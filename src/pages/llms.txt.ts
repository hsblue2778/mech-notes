import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE, byUpdatedDesc } from '../lib/site';
import { tools } from '../data/tools';

/**
 * /llms.txt — AI/검색엔진용 사이트 안내 파일.
 * 빌드할 때마다 콘텐츠 컬렉션에서 전체 페이지 목록을 다시 생성한다.
 */
export const GET: APIRoute = async ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const origin = site ? site.toString().replace(/\/$/, '') : '';
  const abs = (path: string) => `${origin}${base}${path}`;

  const concepts = (await getCollection('concepts')).sort(byUpdatedDesc);
  const projects = (await getCollection('projects')).sort(byUpdatedDesc);

  const lines: string[] = [
    `# ${SITE.title}`,
    '',
    `> ${SITE.description}`,
    '',
    '모든 글은 빌드 시점에 정적 HTML로 렌더링되어 있습니다.',
    '개념 노트와 프로젝트 기록은 같은 경로에 `.md`를 붙이면 원본 마크다운을 그대로 읽을 수 있습니다.',
    '(예: /concepts/pipe-friction-loss → /concepts/pipe-friction-loss.md)',
    '',
    '## 주요 페이지',
    '',
    `- [홈 대시보드](${abs('/')})`,
    `- [개념 노트 목록](${abs('/concepts/')})`,
    `- [계산기 목록](${abs('/tools/')})`,
    `- [프로젝트 목록](${abs('/projects/')})`,
    '',
    '## 개념 노트',
    '',
    ...concepts.map(
      (e) =>
        `- [${e.data.title}](${abs(`/concepts/${e.id}/`)}): ${e.data.summary} (원본: ${abs(`/concepts/${e.id}.md`)})`
    ),
    '',
    '## 계산기',
    '',
    ...tools.map((t) => `- [${t.title}](${abs(`${t.href}/`)}): ${t.summary}`),
    '',
    '## 프로젝트 기록',
    '',
    ...projects.map(
      (e) =>
        `- [${e.data.title}](${abs(`/projects/${e.id}/`)}): ${e.data.summary} (원본: ${abs(`/projects/${e.id}.md`)})`
    ),
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
