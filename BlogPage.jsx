// BlogPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const BlogPage = ({ blogs }) => {
    return (
        <div className='bg-[#000000]'>
            <Navbar />
            <div className='max-w-6xl mx-auto'>
                <h1 className='text-center text-3xl text-white mt-10 font-josef'>Blogs</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto my-10">
                    {blogs.map(blog => (
                        <div key={blog.id} className="bg-gray-100 rounded-2xl w-auto mx-4">
                            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                            <div className='bg-slate-600 text-white rounded-b-xl'>
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                                    <p>{blog.content}</p>
                                </div>
                                <div className='flex justify-center items-center p-4'>
                                    <Link to={`/blog/${blog.id}`} className="font-semibold">View Blog</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default BlogPage;
