// VICE CODEX Cloud Social, In-Site Auth & Analytics Adapter (Zero-dependency)
// Automatically activates global multi-user persistence when cloud-config.js has Supabase keys,
// and injects Cloudflare Web Analytics when cfAnalyticsToken is provided.
(function () {
  const cfg = window.VICE_CLOUD_CONFIG || {};

  // 1. Optional Cloudflare Web Analytics (zero-cookie, free)
  if (cfg.cfAnalyticsToken) {
    const s = document.createElement('script');
    s.defer = true;
    s.src = 'https://static.cloudflareinsights.com/beacon.min.js';
    s.setAttribute('data-cf-beacon', JSON.stringify({ token: cfg.cfAnalyticsToken }));
    document.head.appendChild(s);
  }

  const base = (cfg.supabaseUrl || '').replace(/\/+$/, '');
  const key = (cfg.supabaseAnonKey || '').trim();
  const enabled = Boolean(base && key);

  function headers(extra) {
    const h = {
      apikey: key,
      'Content-Type': 'application/json'
    };
    if (key.startsWith('eyJ')) h.Authorization = 'Bearer ' + key;
    return Object.assign(h, extra || {});
  }

  async function req(path, opts) {
    if (!enabled) return null;
    try {
      const res = await fetch(base + '/rest/v1/' + path, Object.assign({ headers: headers() }, opts || {}));
      if (!res.ok) return null;
      if (res.status === 204) return true;
      return await res.json();
    } catch (e) {
      return null;
    }
  }

  async function sha256Hex(str) {
    if (window.crypto && window.crypto.subtle) {
      const buf = new TextEncoder().encode(str);
      const hash = await window.crypto.subtle.digest('SHA-256', buf);
      return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
    }
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return (h >>> 0).toString(16).padStart(64, '0');
  }

  window.VICE_CLOUD = {
    enabled,
    async hashPassword(username, password) {
      return sha256Hex('vc_v2_salt::' + String(username).toLowerCase().trim() + '::' + String(password));
    },
    async fetchAll() {
      if (!enabled) return null;
      const [posts, squad, chat, comments, reactions] = await Promise.all([
        req('community_posts?select=*&order=upvotes.desc&limit=100'),
        req('squad_cards?select=*&order=created_at.desc&limit=100'),
        req('chat_messages?select=*&order=created_at.asc&limit=240'),
        req('item_comments?select=*&order=created_at.asc&limit=300'),
        req('reactions?select=*&limit=500')
      ]);
      return { posts, squad, chat, comments, reactions };
    },
    async registerMember({ username, displayName, password, platform, avatarColor, progressJson }) {
      const canonical = String(username || '').toLowerCase().replace(/^@+/, '').trim();
      if (!canonical || canonical.length < 2) return { ok: false, reason: 'invalid' };
      const existing = await req('vc_members?username=eq.' + encodeURIComponent(canonical) + '&select=username');
      if (existing === null) return { ok: false, reason: 'schema_missing' };
      if (Array.isArray(existing) && existing.length) return { ok: false, reason: 'exists' };
      const password_hash = await this.hashPassword(canonical, password);
      const ok = await req('vc_members', {
        method: 'POST',
        headers: headers({ Prefer: 'return=minimal' }),
        body: JSON.stringify({
          username: canonical,
          display_name: displayName.startsWith('@') ? displayName : '@' + displayName,
          password_hash,
          platform: platform || 'PS5',
          avatar_color: avatarColor || '#FF5A36',
          progress_json: progressJson || {}
        })
      });
      if (!ok) return { ok: false, reason: 'failed' };
      return { ok: true, member: { username: canonical, displayName: displayName.startsWith('@') ? displayName : '@' + displayName, platform: platform || 'PS5', avatarColor: avatarColor || '#FF5A36', progressJson: progressJson || {} } };
    },
    async loginMember(username, password) {
      const canonical = String(username || '').toLowerCase().replace(/^@+/, '').trim();
      if (!canonical) return { ok: false, reason: 'invalid' };
      const rows = await req('vc_members?username=eq.' + encodeURIComponent(canonical) + '&select=*');
      if (rows === null) return { ok: false, reason: 'schema_missing' };
      if (!Array.isArray(rows) || !rows.length) return { ok: false, reason: 'not_found' };
      const row = rows[0];
      const expected = await this.hashPassword(canonical, password);
      if (row.password_hash !== expected) return { ok: false, reason: 'wrong_password' };
      return {
        ok: true,
        member: {
          username: row.username,
          displayName: row.display_name,
          platform: row.platform,
          avatarColor: row.avatar_color,
          progressJson: row.progress_json || {}
        }
      };
    },
    async saveMemberProgress(username, progressJson) {
      const canonical = String(username || '').toLowerCase().replace(/^@+/, '').trim();
      if (!canonical) return null;
      return req('vc_members?username=eq.' + encodeURIComponent(canonical), {
        method: 'PATCH',
        headers: headers({ Prefer: 'return=minimal' }),
        body: JSON.stringify({ progress_json: progressJson || {} })
      });
    },
    async createPost(p) {
      const rich = await req('community_posts', {
        method: 'POST',
        headers: headers({ Prefer: 'return=minimal' }),
        body: JSON.stringify({
          id: p.id,
          title: p.title,
          author: p.author,
          category: p.category,
          video_url: p.videoUrl || '',
          body: p.body,
          upvotes: p.upvotes || 1,
          is_member: Boolean(p.isMember),
          platform: p.platform || ''
        })
      });
      if (rich) return rich;
      return req('community_posts', {
        method: 'POST',
        headers: headers({ Prefer: 'return=minimal' }),
        body: JSON.stringify({
          id: p.id,
          title: p.title,
          author: p.author,
          category: p.category,
          video_url: p.videoUrl || '',
          body: p.body,
          upvotes: p.upvotes || 1
        })
      });
    },
    async updateUpvotes(id, upvotes) {
      return req('community_posts?id=eq.' + encodeURIComponent(id), {
        method: 'PATCH',
        headers: headers({ Prefer: 'return=minimal' }),
        body: JSON.stringify({ upvotes })
      });
    },
    async createSquadCard(f) {
      return req('squad_cards', {
        method: 'POST',
        headers: headers({ Prefer: 'return=minimal' }),
        body: JSON.stringify({ id: f.id, game_id: f.gameId, platform: f.platform, note: f.note })
      });
    },
    async sendChat(channel, author, text, meta) {
      const m = meta || {};
      const rich = await req('chat_messages', {
        method: 'POST',
        headers: headers({ Prefer: 'return=minimal' }),
        body: JSON.stringify({
          channel,
          author,
          text,
          reply_to_author: m.replyToAuthor || '',
          reply_to_text: m.replyToText || '',
          is_member: Boolean(m.isMember),
          platform: m.platform || '',
          avatar_color: m.avatarColor || '#F5B041'
        })
      });
      if (rich) return rich;
      return req('chat_messages', {
        method: 'POST',
        headers: headers({ Prefer: 'return=minimal' }),
        body: JSON.stringify({ channel, author, text })
      });
    },
    async addComment(targetKey, author, text) {
      return req('item_comments', {
        method: 'POST',
        headers: headers({ Prefer: 'return=minimal' }),
        body: JSON.stringify({ target_key: targetKey, author, text })
      });
    },
    async saveReaction(targetKey, emoji, count) {
      return req('reactions', {
        method: 'POST',
        headers: headers({ Prefer: 'resolution=merge-duplicates,return=minimal' }),
        body: JSON.stringify({ target_key: targetKey, emoji, count })
      });
    },
    async triggerInstantNotify(eventType, title, body) {
      const hook = (cfg.notifyWebhook || '').trim();
      const email = (cfg.notifyEmail || '').trim();
      let sent = false;
      if (hook) {
        try {
          await fetch(hook, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              msg_type: 'text',
              content: { text: `[罪城全书] ${title}\n${body}` },
              text: `[罪城全书] ${title}\n${body}`,
              title: `[罪城全书] ${title}`,
              body,
              event_type: eventType
            })
          });
          sent = true;
        } catch (e) {}
      }
      if (email && cfg.notifyEmailEndpoint) {
        try {
          await fetch(cfg.notifyEmailEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({
              _subject: `[罪城全书通知] ${title}`,
              event: eventType,
              detail: body,
              site: location.href
            })
          });
          sent = true;
        } catch (e) {}
      }
      return sent;
    },
    async logEvent(eventType, actor, summary, meta) {
      const id = 'ev-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6);
      if (enabled) {
        req('vc_events', {
          method: 'POST',
          headers: headers({ Prefer: 'return=minimal' }),
          body: JSON.stringify({
            id,
            event_type: eventType,
            actor: actor || '@匿名玩家',
            summary: String(summary || '').slice(0, 500),
            meta_json: meta || {}
          })
        });
      }
      if (['feedback', 'login', 'register', 'comment', 'post'].includes(eventType)) {
        const labels = { feedback: '新网站反馈', login: '玩家登录', register: '新玩家注册', comment: '新评论', post: '新攻略投稿' };
        this.triggerInstantNotify(eventType, `${labels[eventType] || eventType} · ${actor || '@匿名玩家'}`, summary);
      }
      return true;
    },
    async submitFeedback(fb) {
      const row = {
        id: fb.id || ('fb-' + Date.now()),
        category: fb.category || '功能建议',
        author: fb.author || '@匿名玩家',
        contact: fb.contact || '',
        message: fb.message || '',
        page_url: location.href,
        status: 'new'
      };
      const ok = enabled ? await req('vc_feedback', {
        method: 'POST',
        headers: headers({ Prefer: 'return=minimal' }),
        body: JSON.stringify(row)
      }) : false;
      this.logEvent('feedback', row.author, `[${row.category}] ${row.message}${row.contact ? ' | 联系：' + row.contact : ''}`, { category: row.category, contact: row.contact });
      return Boolean(ok);
    },
    async updateFeedbackStatus(id, status) {
      return req('vc_feedback?id=eq.' + encodeURIComponent(id), {
        method: 'PATCH',
        headers: headers({ Prefer: 'return=minimal' }),
        body: JSON.stringify({ status })
      });
    },
    async fetchAdminDashboard() {
      if (!enabled) return null;
      const [feedback, events, comments, members, posts, chat] = await Promise.all([
        req('vc_feedback?select=*&order=created_at.desc&limit=200'),
        req('vc_events?select=*&order=created_at.desc&limit=200'),
        req('item_comments?select=*&order=created_at.desc&limit=200'),
        req('vc_members?select=username,display_name,platform,created_at&order=created_at.desc&limit=200'),
        req('community_posts?select=id,title,author,category,created_at&order=created_at.desc&limit=100'),
        req('chat_messages?select=id,channel,author,text,created_at&order=created_at.desc&limit=200')
      ]);
      return {
        feedbackMissing: feedback === null,
        feedback: Array.isArray(feedback) ? feedback : [],
        events: Array.isArray(events) ? events : [],
        comments: Array.isArray(comments) ? comments : [],
        members: Array.isArray(members) ? members : [],
        posts: Array.isArray(posts) ? posts : [],
        chat: Array.isArray(chat) ? chat : []
      };
    }
  };
})();
