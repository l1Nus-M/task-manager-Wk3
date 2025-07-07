import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api/jsonPlaceholder";
import Card from "./Card";
import Button from "./Button";

const PAGE_SIZE = 8;

export default function ApiDemoContent() {
  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    setError("");
    fetchPosts({ page, limit: PAGE_SIZE, query })
      .then(({ data, total }) => {
        if (!ignore) {
          setPosts(data);
          setTotal(total);
        }
      })
      .catch((err) => {
        if (!ignore) setError(err.message || "Error fetching posts");
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });
    return () => {
      ignore = true;
    };
  }, [page, query]);

  const totalPages = Math.ceil(total / PAGE_SIZE);

  return (
    <div>
      <form
        onSubmit={e => { e.preventDefault(); setPage(1); }}
        className="mb-6 flex gap-2"
      >
        <input
          type="text"
          className="flex-1 px-3 py-2 rounded border border-gray-300 dark:bg-gray-900 dark:border-gray-700 focus:outline-none"
          placeholder="Search posts..."
          value={query}
          onChange={e => { setQuery(e.target.value); setPage(1); }}
        />
        <Button type="submit" variant="primary">Search</Button>
      </form>
      {loading && <div className="text-center text-blue-500">Loading...</div>}
      {error && <div className="text-center text-red-500">{error}</div>}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {!loading && !error && posts.map(post => (
          <Card key={post.id} className="h-full flex flex-col">
            <h2 className="font-bold text-lg mb-2">{post.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 flex-1">{post.body}</p>
          </Card>
        ))}
      </div>
      <div className="flex justify-center items-center gap-2 mt-6">
        <Button
          variant="secondary"
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1 || loading}
        >
          Previous
        </Button>
        <span className="text-gray-700 dark:text-gray-200">
          Page {page} of {totalPages || 1}
        </span>
        <Button
          variant="secondary"
          onClick={() => setPage(p => Math.min(totalPages, p + 1))}
          disabled={page === totalPages || loading}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
