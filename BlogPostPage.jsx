// BlogPostPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';

const BlogPostPage = ({ blogs }) => {
    const { id } = useParams();
    const blog = blogs.find(blog => blog.id === parseInt(id));

    if (!blog) {
        return <div className=''>
            <Navbar />
            <h1 className='text-red-600 text-2xl text-center mt-10'>Blog not found!</h1>
        </div>;
    }

    return (
        <div className='bg-[#000000] text-white h-screen'>
        <Navbar />
            <div className=' flex flex-col items-center justify-center'>
                <div className='text-center'>
                    <img src={blog.image} alt={blog.title} className="w-48 h-48 m-4 mx-auto" />
                    <h1 className="text-2xl font-bold">{blog.title}</h1>
                    <p>{blog.content}</p>
                </div>
            </div>
        </div>

    );
}

export default BlogPostPage;
