import { existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dist = 'dist';
if (!existsSync(dist)) mkdirSync(dist, { recursive: true });

const keep = (name) => name === 'robots.txt' || /^sitemap.*\.xml$/.test(name);

for (const entry of readdirSync(dist)) {
  if (!keep(entry)) rmSync(join(dist, entry), { recursive: true, force: true });
}

const html = [
  '<!doctype html>',
  '<html lang="en">',
  '<head>',
  '<meta charset="utf-8">',
  '<meta name="viewport" content="width=device-width, initial-scale=1">',
  '<meta name="robots" content="noindex, nofollow">',
  '<title>Site under construction</title>',
  '<style>',
  'html, body { height: 100%; margin: 0; }',
  'body { display: flex; align-items: center; justify-content: center; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; background: #f5f3ef; color: #1f1f1f; text-align: center; padding: 2rem; }',
  'h1 { font-size: 1.75rem; font-weight: 600; margin: 0 0 0.5rem; }',
  'p { margin: 0; opacity: 0.7; }',
  '</style>',
  '</head>',
  '<body>',
  '<main>',
  '<h1>Site under construction</h1>',
  '<p>Please check back soon.</p>',
  '</main>',
  '</body>',
  '</html>',
  ''
].join('\n');

writeFileSync(join(dist, 'index.html'), html);

if (!existsSync(join(dist, 'robots.txt'))) {
  writeFileSync(join(dist, 'robots.txt'), 'User-agent: *\nAllow: /\n');
}

console.log('holding-page: dist now contains ' + readdirSync(dist).join(', '));
