export const SITE = {
  title: '기계설비 노트',
  description:
    'HVAC · 배관 · 펌프 — 개념 노트, 직접 만든 계산기, 프로젝트 작업 기록을 모아둔 개인 지식 베이스',
};

/** base 경로 ('/mech-notes' 또는 ''). 내부 링크 앞에 항상 붙인다. */
export const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** 루트 상대 경로('/concepts/...')에 base를 붙인 최종 href를 만든다. */
export function withBase(path: string): string {
  return BASE + path;
}

/** YYYY-MM-DD 형식으로 날짜 표시 */
export function formatDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

/** updated 내림차순 정렬용 비교 함수 */
export function byUpdatedDesc<T extends { data: { updated: Date } }>(a: T, b: T): number {
  return +b.data.updated - +a.data.updated;
}
