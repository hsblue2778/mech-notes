# 기계설비 노트 — 작업 규칙

개인 기계설비(HVAC·배관·펌프) 지식 사이트. Astro 정적 빌드, GitHub Pages 배포, 한국어.

## 개념 노트 추가 (가장 흔한 작업)

사용자가 메모를 주며 "개념 노트로 정리해줘"라고 하면:

1. `src/content/concepts/<영문-kebab-case>.md` 생성 — 파일명이 URL slug가 된다.
2. frontmatter는 `src/content.config.ts`의 concepts 스키마를 따른다
   (title, summary, category, tags, relatedTools, relatedConcepts, updated).
3. `updated`는 작성일(YYYY-MM-DD). `category`는 기존 노트들과 통일 (배관설계/펌프/열역학/보온 등).
4. 수식은 KaTeX: `$...$` 인라인, `$$...$$` 블록.
5. 관련 계산기가 있으면 `relatedTools`에 `/tools/...` 경로, 관련 노트는 `relatedConcepts`에 slug.
6. 파일만 추가하면 목록/홈/llms.txt/검색에 자동 반영 — 다른 파일 수정 불필요.

프로젝트 기록은 `src/content/projects/`에 동일 (스키마: category 대신 period).

## 계산기 추가

1. `src/pages/tools/<이름>.astro` 페이지 작성 (BaseLayout 사용, 본문에 `data-pagefind-body`)
2. `src/data/tools.ts`에 등록 — 등록해야 홈/목록/관련 링크에 노출된다.

## 링크 규칙 (GitHub Pages base 경로)

- `.astro` 파일 안 내부 링크는 반드시 `withBase('/concepts/...')` (src/lib/site.ts) 사용.
- 마크다운 본문 안에서는 그냥 `/tools/...`로 쓴다 — rehype 플러그인(plugins/rehype-base-links.mjs)이 base를 자동으로 붙인다.

## 공개 콘텐츠 주의

프로젝트 기록에 발주처명·실제 도면·실제 설계 수치·사내 자료 금지.
수치는 가상의 예시 값으로. 글 작성/정리 시 이런 내용이 보이면 사용자에게 알리고 일반화할 것.

## 빌드/배포

- `npm run build` = `astro build && pagefind --site dist` (검색 인덱스 포함)
- main에 push하면 GitHub Actions(.github/workflows/deploy.yml)가 자동 배포.
- 검색(Pagefind)은 dev 모드에서 동작하지 않음 — build + preview로 확인.
