// CreateBlog.js

import React, { useState } from 'react';
import { useDataContext } from '../globalContext';

const CreateBlog = () => {
    const { createBlog, isLoading, isLogin } = useDataContext();

    const [title, setTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');
    const [blog, setBlog] = useState('');

    if (isLoading) {
        return <div>
            <h1>LOADING........</h1>
        </div>
    }

    // console.log(isLogin);
    if (isLogin === false) {
        return <div>
            <h1>Try Logging in first</h1>
        </div>
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubTitleChange = (e) => {
        setSubTitle(e.target.value);
    };

    const handleBlogChange = (e) => {
        setBlog(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createBlog({
            title: title,
            subTitle: subTitle,
            blog: blog
        })

        // Reset form fields
        setTitle('');
        setSubTitle('');
        setBlog('');


    };

    return (
        <div>
            <h1>Create a New Blog Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                        required
                    />
                </div>
                <div>
                    <label>Subtitle:</label>
                    <input
                        type="text"
                        value={subTitle}
                        onChange={handleSubTitleChange}
                        required
                    />
                </div>
                <div>
                    <label>Blog:</label>
                    <textarea
                        value={blog}
                        onChange={handleBlogChange}
                        required
                    />
                </div>
                <button type="submit">Create Blog</button>
            </form>
        </div>
    );
}

export default CreateBlog;
