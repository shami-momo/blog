import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

export const postSlug = (post: Post) =>
  post.id
    .split('/')
    .map((part) => part.replace(/^\d{4}-\d{2}-\d{2}-/, ''))
    .join('/');

export const postUrl = (post: Post) => `/posts/${postSlug(post)}/`;

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date).replaceAll(' ', '');

export async function getPosts() {
  return (await getCollection('posts', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
}
