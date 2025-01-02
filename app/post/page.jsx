"use client"; // This makes the component a Client Component

import React, { useEffect, useState } from 'react';
import "./Post.css";
function PostPages() {
  const [posts, setPosts] = useState([]); // State for storing posts
  const [loading, setLoading] = useState(true); // Optional loading state

  useEffect(() => {
    async function loadPages() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");

        // Simulate a delay before processing the response
        await new Promise(resolve => setTimeout(resolve, 2000)); // 2-second delay

        const data = await res.json();
        setPosts(data); // Set fetched data
        setLoading(false); // Turn off loading state after fetching
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false); // Turn off loading in case of error
      }
    }

    loadPages();
  }, []); // Empty dependency array to run on mount

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator
  }

  return (
    <div className='grid'>
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
          <h3>{post.id} - {post.title}</h3>
          <p>{post.body}</p>
          {/* Add button below each post body */}
          <button onClick={() => alert(`Post ID: ${post.id}`)}>Show Post ID</button>
        </div>
      ))}
    </div>
  );
}

export default PostPages;
