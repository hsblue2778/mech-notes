/**
 * 마크다운 본문 안의 루트 상대 링크(/tools/..., /concepts/...)에
 * GitHub Pages base 경로를 자동으로 붙여주는 rehype 플러그인.
 * 글을 쓸 때는 base를 신경 쓰지 않고 /tools/friction-loss 처럼 쓰면 된다.
 */
export function rehypeBaseLinks(base) {
  const prefix = (base ?? '').replace(/\/$/, '');

  return () => (tree) => {
    if (!prefix) return;

    const walk = (node) => {
      if (node.type === 'element' && node.properties) {
        for (const key of ['href', 'src']) {
          const value = node.properties[key];
          if (
            typeof value === 'string' &&
            value.startsWith('/') &&
            !value.startsWith('//') &&
            !value.startsWith(`${prefix}/`)
          ) {
            node.properties[key] = prefix + value;
          }
        }
      }
      for (const child of node.children ?? []) walk(child);
    };

    walk(tree);
  };
}
