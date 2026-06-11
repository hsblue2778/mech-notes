/**
 * 계산기 목록.
 * 새 계산기를 추가할 때:
 *   1. src/pages/tools/ 아래에 페이지(.astro)를 만들고
 *   2. 여기 배열에 한 줄 등록하면
 * 홈 대시보드와 /tools 목록, 개념 노트의 "관련 계산기" 섹션에 자동으로 노출된다.
 */
export interface Tool {
  title: string;
  summary: string;
  /** 루트 상대 경로. 예: '/tools/friction-loss' */
  href: string;
  status?: '사용 가능' | '준비 중';
  tags?: string[];
}

export const tools: Tool[] = [
  {
    title: '관마찰손실 계산기',
    summary: 'Darcy-Weisbach 식 기반 배관 마찰손실(압력손실) 계산',
    href: '/tools/friction-loss',
    status: '사용 가능',
    tags: ['배관설계'],
  },
];
