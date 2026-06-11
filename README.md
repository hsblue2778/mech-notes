# 기계설비 노트

HVAC · 배관 · 펌프 — 개념 노트, 직접 만든 계산기, 프로젝트 작업 기록을 모아둔 개인 지식 베이스.
[Astro](https://astro.build) 정적 빌드 + GitHub Pages 배포.

## 구조

```
src/
├── content/
│   ├── concepts/   ← 개념 노트 (.md를 추가하면 사이트에 자동 반영)
│   └── projects/   ← 프로젝트/작업 기록 (.md)
├── pages/
│   └── tools/      ← 계산기 페이지 (.astro, 직접 작성)
├── data/tools.ts   ← 계산기 목록 레지스트리 (새 계산기는 여기에도 등록)
└── content.config.ts ← frontmatter 스키마
```

## 글 쓰는 법

`src/content/concepts/`에 영문 kebab-case 파일명으로 `.md` 파일을 만들면 끝.
파일명이 곧 URL slug가 된다 (`pipe-friction-loss.md` → `/concepts/pipe-friction-loss/`).

```yaml
---
title: "관마찰손실"        # 개념 이름
summary: "한 줄 요약"
category: "배관설계"       # 배관설계 / 펌프 / 열역학 / 보온 등
tags: ["마찰손실"]
relatedTools: ["/tools/friction-loss"]   # 관련 계산기 경로
relatedConcepts: []        # 관련 노트의 파일명(slug)
updated: 2026-06-11
---
```

- 수식: `$...$` 인라인, `$$...$$` 블록 (KaTeX)
- 본문 안 내부 링크는 `/tools/...`처럼 루트 기준으로 쓰면 빌드 시 base 경로가 자동으로 붙는다.
- 프로젝트 기록은 `src/content/projects/`에 같은 방식 (스키마에 `period` 추가, `category` 없음).

## 계산기 추가

1. `src/pages/tools/이름.astro` 페이지 작성
2. `src/data/tools.ts` 배열에 한 줄 등록 → 홈/목록/관련 링크에 자동 노출

## 로컬 실행

```bash
npm install
npm run dev      # http://localhost:4321/mech-notes/  ← base 경로 포함 주의
npm run build    # dist/ 생성 + Pagefind 검색 인덱스 빌드
npm run preview  # 빌드 결과 확인 (검색은 build 후에만 동작)
```

## 배포 (GitHub Pages)

1. `astro.config.mjs`의 `SITE`를 본인 GitHub 사용자명으로 수정
   (`https://<username>.github.io`). 저장소 이름이 `mech-notes`가 아니면 `BASE`도 수정.
2. GitHub에 `mech-notes` 저장소를 만들고 push:
   ```bash
   git remote add origin https://github.com/<username>/mech-notes.git
   git push -u origin main
   ```
3. 저장소 **Settings → Pages → Source**를 **GitHub Actions**로 설정 (최초 1회).
4. 이후 `main`에 push할 때마다 자동 배포 → `https://<username>.github.io/mech-notes/`

## AI 가독성

- 모든 글은 빌드 시점에 정적 HTML로 렌더링됨 (수식 포함)
- `/llms.txt` — 사이트 소개 + 전체 페이지 목록 (빌드마다 자동 갱신)
- `/concepts/<slug>.md`, `/projects/<slug>.md` — 원본 마크다운 그대로 서빙

## 공개 전 주의사항

프로젝트 기록에 **발주처명, 실제 도면, 실제 설계 수치, 사내 자료를 넣지 않는다.**
"어떤 문제를 어떤 방법으로 풀었는가" 중심으로 쓰고, 수치는 가상의 예시 값으로 대체.
