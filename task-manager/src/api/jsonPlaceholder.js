const API_URL = "https://jsonplaceholder.typicode.com/posts";

export async function fetchPosts({ page = 1, limit = 10, query = "" } = {}) {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch posts");
  let data = await res.json();
  if (query) {
    data = data.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.body.toLowerCase().includes(query.toLowerCase())
    );
  }
  const total = data.length;
  const start = (page - 1) * limit;
  const paged = data.slice(start, start + limit);
  return { data: paged, total };
}
