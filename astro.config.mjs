// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { rehypeBaseLinks } from './plugins/rehype-base-links.mjs';

// ── GitHub Pages 배포 설정 ──────────────────────────────────────
// 저장소 이름을 mech-notes가 아닌 다른 이름으로 만들면 BASE도 같이 바꾸세요.
const SITE = 'https://hsblue2778.github.io';
const BASE = '/mech-notes';

export default defineConfig({
  site: SITE,
  base: BASE,
  output: 'static',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex, rehypeBaseLinks(BASE)],
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
