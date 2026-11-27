// VICE CODEX Cloud Social & Analytics Adapter (Zero-dependency)
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
    return Object.assign(
      {
        apikey: key,
        Authorization: 'Bearer ' + key,
        'Content-Type': 'application/json'
      },
      extra || {}
    );
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

  window.VICE_CLOUD = {
    enabled,
    async fetchAll() {
      if (!enabled) return null;
      const [posts, squad, chat, comments] = await Promise.all([
        req('community_posts?select=*&order=upvotes.desc&limit=100'),
        req('squad_cards?select=*&order=created_at.desc&limit=100'),
        req('chat_messages?select=*&order=created_at.asc&limit=200'),
        req('item_comments?select=*&order=created_at.asc&limit=300')
      ]);
      return { posts, squad, chat, comments };
    },
    async createPost(p) {
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
    async sendChat(channel, author, text) {
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
    }
  };
})();
