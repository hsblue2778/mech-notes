import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 개념 노트: src/content/concepts/*.md
const concepts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/concepts' }),
  schema: z.object({
    title: z.string(), // 개념 이름 (예: 관마찰손실)
    summary: z.string(), // 한 줄 요약
    category: z.string(), // 배관설계 / 펌프 / 열역학 / 보온 등
    tags: z.array(z.string()).default([]),
    relatedTools: z.array(z.string()).default([]), // 예: ["/tools/friction-loss"]
    relatedConcepts: z.array(z.string()).default([]), // 관련 노트의 파일명(slug)
    updated: z.coerce.date(),
  }),
});

// 프로젝트/작업 기록: src/content/projects/*.md
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    period: z.string(), // 작업 기간 (예: "2026.01 – 2026.03")
    tags: z.array(z.string()).default([]),
    relatedConcepts: z.array(z.string()).default([]),
    relatedTools: z.array(z.string()).default([]),
    updated: z.coerce.date(),
  }),
});

export const collections = { concepts, projects };
