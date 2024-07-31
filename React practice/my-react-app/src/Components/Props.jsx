import React from 'react';

const Props = (props) => {
    const { blogs, title } = props;

    return (
        <div>
            <div className="home">
                <h2>{title}</h2>
                {blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Props;
