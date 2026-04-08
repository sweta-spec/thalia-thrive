const PRERENDER_TOKEN = '51H3EcoHgpxmbe10BFOg';

const botUserAgents = [
  'googlebot', 'bingbot', 'yandex', 'duckduckbot',
  'slurp', 'baiduspider', 'facebot', 'ia_archiver',
  'gptbot', 'claudebot', 'perplexitybot', 'anthropic-ai'
];

function isBot(userAgent) {
  const ua = (userAgent || '').toLowerCase();
  return botUserAgents.some(bot => ua.includes(bot));
}

export default {
  async fetch(request, env) {
    const userAgent = request.headers.get('User-Agent') || '';
    const url = new URL(request.url);

    if (isBot(userAgent)) {
      const prerenderUrl = `https://service.prerender.io/${url.href}`;
      const prerendered = await fetch(prerenderUrl, {
        headers: { 'X-Prerender-Token': PRERENDER_TOKEN }
      });
      return prerendered;
    }

    // Real user — serve normal static site
    return env.ASSETS.fetch(request);
  }
};
