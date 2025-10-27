import React, { useState, useEffect } from "react";

const ApiExplorer = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const postsPerPage = 6;

  // Fetch 21 posts
  const fetchPosts = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=21");
      if (!res.ok) throw new Error("Failed to fetch posts");
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setTimeout(() => setLoading(false), 800); // smooth delay for animation
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Filter posts by search
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (page - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  // Adjust current page if filter changes
  useEffect(() => {
    setPage(1);
  }, [search]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700 mt-10 transition-all duration-500">
      <h2 className="text-2xl font-bold text-center mb-6 text-green-700 dark:text-green-400">
        API Explorer
      </h2>

      {/* Search Box */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                     dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 
                     transition-all pl-10"
        />
        <svg
          className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Loading Skeleton */}
      {loading && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-pulse">
          {[...Array(postsPerPage)].map((_, i) => (
            <div
              key={i}
              className="p-4 bg-gray-100 dark:bg-gray-700 rounded-xl h-40"
            >
              <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-5/6"></div>
            </div>
          ))}
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
          <p className="text-red-600 dark:text-red-400 font-medium">
            {error}
          </p>
          <button
            onClick={fetchPosts}
            className="mt-2 text-red-600 dark:text-red-400 underline hover:no-underline"
          >
            Try Again
          </button>
        </div>
      )}

      {/* Posts Grid */}
      {!loading && !error && currentPosts.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-500">
          {currentPosts.map((post) => (
            <div
              key={post.id}
              className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl border 
                         border-gray-200 dark:border-gray-600 hover:shadow-lg 
                         transform hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-semibold mb-2 text-green-700 dark:text-green-400">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{post.body}</p>
            </div>
          ))}
        </div>
      )}

      {/* No Results */}
      {!loading && !error && currentPosts.length === 0 && (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          No posts found matching your search.
        </div>
      )}

      {/* Pagination */}
      {!loading && !error && filteredPosts.length > 0 && (
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 rounded-lg bg-green-600 text-white font-medium disabled:opacity-50 hover:bg-green-700 transition-all"
          >
            Previous
          </button>
          <span className="text-gray-700 dark:text-gray-300">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className="px-4 py-2 rounded-lg bg-green-600 text-white font-medium disabled:opacity-50 hover:bg-green-700 transition-all"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ApiExplorer;
