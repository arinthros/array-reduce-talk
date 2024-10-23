/**
 * Transform an array into an object without external references.
 *
 * @example
 * ```ts
 * postStatuses = {
 *   1: 'published',
 *   2: 'draft',
 *   5: 'published',
 *   7: 'published'
 * }
 * ```
 */

import { posts } from './data/posts';

const postStatusesLooped: Record<number, string> = {};

posts.forEach(post => {
  if (post?.id && post.status) {
    postStatusesLooped[post.id] = post.status;
  }
});

console.log('looped');
console.dir(postStatusesLooped, { depth: null });

const postStatusesReduced = posts.reduce((postStatusObject: Record<number, string>, post) => {
  if (post?.id && post.status) {
    postStatusObject[post.id] = post.status;
  }

  return postStatusObject;
}, {});

console.log('reduced');
console.dir(postStatusesReduced, { depth: null });
