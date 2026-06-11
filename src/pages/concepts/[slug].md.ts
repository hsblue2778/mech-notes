import type { APIRoute } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';
import fs from 'node:fs/promises';

// /concepts/[slug].md — 원본 마크다운(frontmatter 포함)을 그대로 서빙
export async function getStaticPaths() {
  const entries = await getCollection('concepts');
  return entries.map((entry) => ({ params: { slug: entry.id }, props: { entry } }));
}

export const GET: APIRoute = async ({ props }) => {
  const entry = (props as { entry: CollectionEntry<'concepts'> }).entry;

  let text: string;
  if (entry.filePath) {
    text = await fs.readFile(entry.filePath, 'utf-8');
  } else {
    text = entry.body ?? '';
  }

  return new Response(text, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
