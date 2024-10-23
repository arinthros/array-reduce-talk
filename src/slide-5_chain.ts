/**
 * Simplify chains into one loop.
 *
 * @example
 * ```ts
 * lastTwoPublishedPosts = [
 *   { id: 1, title: 'article one' },
 *   { id: 5, title: 'article five' },
 * ]
 * ```
 *
 * `yarn chain`
 */

import { type Post, posts } from './data';

// Chaining.
const lastTwoPublishedPostsChained: Array<Omit<Post, 'status'>> = posts
  .filter(post => post?.id && post.status === 'published')
  .map(post => ({ id: post?.id, title: post?.title }))
  .slice(0, 2);

console.log('chain');
console.dir(lastTwoPublishedPostsChained, { depth: null });

// Combine map, filter, and slice
const lastTwoPublishedPostsReduced = posts.reduce((publishedPosts: Array<Omit<Post, 'status'>>, post) => {
  if (publishedPosts.length < 2 && post?.id && post.status === 'published') {
    publishedPosts.push({
      id: post.id,
      title: post.title,
    });
  }

  return publishedPosts;
}, []);

console.log('reduce');
console.dir(lastTwoPublishedPostsReduced, { depth: null });
