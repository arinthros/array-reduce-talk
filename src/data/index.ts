export type Post = {
  id?: number | null | undefined;
  status?: "published" | "draft" | null | undefined;
  title?: string | null | undefined;
};
export type Posts = Array<Post | undefined>;

export const posts: Posts = [
  { id: 1, status: "published", title: "article one" },
  { id: 2, status: "draft", title: "article two" },
  {},
  { id: 4, status: null, title: "article four" },
  { id: 5, status: "published", title: "article five" },
  { id: null, status: "draft", title: null },
  { id: 7, status: "published", title: "article seven" },
];
