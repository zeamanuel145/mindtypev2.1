import { Link } from 'react-router-dom';
import { AiFillLike } from 'react-icons/ai';
import { BiShareAlt } from 'react-icons/bi';
const PostCard = ({ post }) => {
  return (
<div className="bg-white dark:bg-gray-600 shadow-md rounded flex flex-col h-auto transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-gray-100 dark:hover:bg-gray-700">
    
      <div className="p-4 flex flex-col flex-grow rounded-3xl" >
        <h4 className="text-xs text-blue-500 truncate">{post.title}</h4>
        <h2 className="text-gray-900 dark:text-gray-100 mt-2 text-2xl line-clamp-2">{post.summary}</h2>
        <p className='pt-2 text-sm text-gray-700 dark:text-gray-200 line-clamp-3'>{post.content}</p>

        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 flex items-center gap-3">
            <img
                src="https://via.placeholder.com/150"
                alt="Author"
                className="w-12 h-12 rounded-full object-cover"
            />
            <div>
                <p className='text-md text-black dark:text-white'>{post.author.name}</p>
                <p className="text-sm">{new Date(post.createdAt).toLocaleDateString()}</p>
            </div>
        </div>


        <div className="flex justify-between items-center text-sm pt-4 rounded-3xl border-2 p-2 bg-gray-800">
          <p className='p-2 flex items-center gap-2 w-10 rounded-full  text-white'>
            <AiFillLike className='text-blue-500 p-2 w-8 h-8 bg-gray-600 rounded-full' />
            {post.likes} 
          </p>

          <p className='p-2 ml-3 flex items-center gap-2 w-24 rounded-3xl bg-gray-800 text-white'>
            <BiShareAlt className='text-white p-2 w-8 h-8 bg-gray-600 rounded-full text-7xl' />
            {post.commentsCount}
          </p>

          <Link
            to={`/posts/${post._id}`}
            className="text-blue-600 hover:underline ml-auto border-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-sm"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
