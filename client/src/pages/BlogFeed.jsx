import { useEffect, useState } from 'react';
import PostCard from './PostCard';
import { API_ENDPOINTS } from '../config/api';

const BlogFeed = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`${API_ENDPOINTS.POSTS.GET_ALL}?page=${page}&limit=10`);
        if (!res.ok) throw new Error('Failed to fetch posts');
        const data = await res.json();
        setPosts(data);
        if (data.length === 0 && page > 1) {
        setPage(p => p - 1); // fallback if user clicks "Next" beyond available posts
        }
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchPosts();
  }, [page]);

  return (
    <div className="max-w-6xl mx-auto bg-white dark:bg-gray-900 py-16">
      <h2 className='font-bold text-3xl m-20'>SEE <span className='text-gray-500'> WHAT PEOPLE </span>POSTED</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-2">
        {posts.map(post => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogFeed;
