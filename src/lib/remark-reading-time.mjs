import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';

const ignored = new Set(['code', 'html', 'image', 'inlineCode', 'inlineMath', 'math', 'mdxJsxFlowElement', 'mdxJsxTextElement', 'yaml']);

function readableText(node) {
  if (!node || ignored.has(node.type)) return '';
  if (node.type === 'text') return node.value;
  return node.children?.map(readableText).join(' ') ?? '';
}

export function estimateReadingMinutes(tree) {
  const text = readableText(tree);
  const koreanCharacters = text.match(/[가-힣]/g)?.length ?? 0;
  const otherWords = text.replace(/[가-힣]/g, ' ').match(/[\p{L}\p{N}]+/gu)?.length ?? 0;
  return Math.max(1, Math.ceil(koreanCharacters / 500 + otherWords / 220));
}

export function remarkReadingTime() {
  return (tree, { data }) => {
    data.astro.frontmatter.minutesRead = estimateReadingMinutes(tree);
  };
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  assert.equal(estimateReadingMinutes({ type: 'root', children: [{ type: 'text', value: '가'.repeat(501) }] }), 2);
  assert.equal(estimateReadingMinutes({ type: 'root', children: [{ type: 'math', value: 'x'.repeat(1000) }, { type: 'text', value: '짧은 글' }] }), 1);
  console.log('reading-time self-check passed');
}
