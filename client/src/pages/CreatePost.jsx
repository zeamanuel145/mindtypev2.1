import { useState } from 'react';
import { API_ENDPOINTS } from '../config/api';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState(''); 
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');     
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
  e.preventDefault();

  const token = localStorage.getItem('token');

  const payload = { title, summary, content, image };

  try {
    const res = await fetch(API_ENDPOINTS.POSTS.CREATE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    console.log('Response status:', res.status);

    const data = await res.json().catch(() => null);
    console.log('Response data:', data);

    if (res.ok) {
      setMessage('✅ Post created successfully');
      setTitle('');
      setSummary('');
      setContent('');
      setImage('');
    } else {
      setMessage(`❌ Error: ${data?.message || 'Failed to create post'}`);
    }
  } catch (error) {
    console.error('Fetch error:', error);
    setMessage(`❌ Network or unexpected error: ${error.message}`);
  }
};


  return (
    <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Create New Post</h2>
      {message && <p className="mb-4 text-sm text-red-500">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Summary"
          className="w-full p-2 border rounded"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          className="w-full p-2 border rounded"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <textarea
          placeholder="Content"
          className="w-full p-2 border rounded"
          rows="5"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
