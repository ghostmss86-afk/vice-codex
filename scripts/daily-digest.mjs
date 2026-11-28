#!/usr/bin/env node
/**
 * VICE CODEX Automated Daily Feedback & Activity Digest
 * Reads SUPABASE_URL, SUPABASE_KEY, NOTIFY_EMAIL, RESEND_API_KEY, NOTIFY_WEBHOOK from env.
 */
const SUPABASE_URL = (process.env.SUPABASE_URL || '').replace(/\/+$/, '');
const SUPABASE_KEY = (process.env.SUPABASE_KEY || '').trim();
const NOTIFY_EMAIL = (process.env.NOTIFY_EMAIL || '').trim();
const RESEND_API_KEY = (process.env.RESEND_API_KEY || '').trim();
const EMAIL_API_URL = (process.env.EMAIL_API_URL || '').trim();
const NOTIFY_WEBHOOK = (process.env.NOTIFY_WEBHOOK || '').trim();

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('Missing SUPABASE_URL or SUPABASE_KEY environment variables.');
  process.exit(1);
}

const sinceIso = new Date(Date.now() - 24 * 3600 * 1000).toISOString();

async function sbGet(path) {
  const headers = { apikey: SUPABASE_KEY, 'Content-Type': 'application/json' };
  if (SUPABASE_KEY.startsWith('eyJ')) headers.Authorization = 'Bearer ' + SUPABASE_KEY;
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, { headers });
  if (!res.ok) return [];
  return await res.json();
}

function esc(s) {
  return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

async function main() {
  const sinceEnc = encodeURIComponent(sinceIso);
  const [feedback, events, comments, posts, chat, allMembers] = await Promise.all([
    sbGet(`vc_feedback?created_at=gte.${sinceEnc}&order=created_at.desc`),
    sbGet(`vc_events?created_at=gte.${sinceEnc}&order=created_at.desc`),
    sbGet(`item_comments?created_at=gte.${sinceEnc}&order=created_at.desc`),
    sbGet(`community_posts?created_at=gte.${sinceEnc}&order=created_at.desc`),
    sbGet(`chat_messages?created_at=gte.${sinceEnc}&order=created_at.desc`),
    sbGet(`vc_members?select=username,created_at`)
  ]);

  const authEvents = events.filter(e => e.event_type === 'login' || e.event_type === 'register');
  const todayStr = new Date().toISOString().slice(0, 10);
  const totalCount = feedback.length + authEvents.length + comments.length + posts.length + chat.length;

  const subject = `[罪城全书日报 ${todayStr}] 反馈 ${feedback.length} · 登录/注册 ${authEvents.length} · 评论 ${comments.length} · 聊天/投稿 ${posts.length + chat.length}`;

  const textLines = [
    `罪城全书 VICE CODEX 每日反馈与动态汇报 (${todayStr})`,
    `统计窗口：过去 24 小时`,
    `----------------------------------------`,
    `• 新建议/反馈：${feedback.length} 条`,
    `• 注册/登录动态：${authEvents.length} 次（累计注册会员 ${allMembers.length} 人）`,
    `• 新增评论：${comments.length} 条`,
    `• 新增攻略投稿：${posts.length} 篇 | 聊天发言：${chat.length} 条`,
    ``
  ];
  if (feedback.length) {
    textLines.push('【用户建议与优化方案】');
    feedback.forEach((f, i) => textLines.push(`${i + 1}. [${f.category}] ${f.author}${f.contact ? ' (' + f.contact + ')' : ''}：${f.message}`));
    textLines.push('');
  }
  if (comments.length) {
    textLines.push('【新增评论】');
    comments.forEach((c, i) => textLines.push(`${i + 1}. ${c.author} (${c.target_key})：${c.text}`));
    textLines.push('');
  }
  if (authEvents.length) {
    textLines.push('【登录与注册】');
    authEvents.forEach((e, i) => textLines.push(`${i + 1}. [${e.event_type}] ${e.actor} - ${e.summary}`));
    textLines.push('');
  }
  if (!totalCount) {
    textLines.push('过去 24 小时暂无新增用户反馈或互动记录。');
  }
  const plainBody = textLines.join('\n');
  console.log(plainBody);

  const htmlBody = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,sans-serif;max-width:640px;margin:0 auto;background:#090E16;color:#F5F2EB;padding:24px;border-radius:6px;">
      <h2 style="margin:0 0 8px;color:#F5B041;">罪城全书 VICE CODEX · 每日反馈日报 (${todayStr})</h2>
      <p style="color:#9AA7B8;margin:0 0 18px;">过去 24 小时全站动态汇总（累计注册会员 ${allMembers.length} 人）</p>
      <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
        <tr>
          <td style="padding:10px;background:#101824;border:1px solid #223047;">反馈建议<br><strong style="font-size:22px;color:#FF5A36;">${feedback.length}</strong></td>
          <td style="padding:10px;background:#101824;border:1px solid #223047;">登录/注册<br><strong style="font-size:22px;color:#2EC4B6;">${authEvents.length}</strong></td>
          <td style="padding:10px;background:#101824;border:1px solid #223047;">新增评论<br><strong style="font-size:22px;color:#F5B041;">${comments.length}</strong></td>
          <td style="padding:10px;background:#101824;border:1px solid #223047;">投稿/聊天<br><strong style="font-size:22px;color:#F5F2EB;">${posts.length + chat.length}</strong></td>
        </tr>
      </table>
      ${feedback.length ? `<h3 style="color:#FF5A36;">用户建议与优化方案</h3><ul>${feedback.map(f => `<li><strong>[${esc(f.category)}] ${esc(f.author)}</strong>${f.contact ? ` (${esc(f.contact)})` : ''}：${esc(f.message)}</li>`).join('')}</ul>` : ''}
      ${comments.length ? `<h3 style="color:#F5B041;">新增评论</h3><ul>${comments.map(c => `<li><strong>${esc(c.author)}</strong> (${esc(c.target_key)})：${esc(c.text)}</li>`).join('')}</ul>` : ''}
      ${authEvents.length ? `<h3 style="color:#2EC4B6;">登录与注册</h3><ul>${authEvents.map(e => `<li><strong>${esc(e.actor)}</strong>：${esc(e.summary)}</li>`).join('')}</ul>` : ''}
      ${!totalCount ? '<p style="color:#9AA7B8;">过去 24 小时暂无新增反馈或互动。</p>' : ''}
    </div>
  `;

  if (RESEND_API_KEY && NOTIFY_EMAIL && EMAIL_API_URL) {
    const r = await fetch(EMAIL_API_URL, {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'VICE CODEX <onboarding@resend.dev>',
        to: [NOTIFY_EMAIL],
        subject,
        html: htmlBody,
        text: plainBody
      })
    });
    console.log('Email API status:', r.status);
  }

  if (NOTIFY_WEBHOOK) {
    const r = await fetch(NOTIFY_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        msg_type: 'text',
        content: { text: `${subject}\n\n${plainBody}` },
        text: `${subject}\n\n${plainBody}`,
        title: subject,
        body: plainBody
      })
    });
    console.log('Webhook status:', r.status);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
