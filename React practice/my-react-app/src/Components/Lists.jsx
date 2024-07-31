import React, { useState } from 'react';
import Props from './Props';

const Lists = () => {
    const [blogs, setBlogs] = useState([
        { title: "My New Website", body: "have some text", author: "mario", id: 1 },
        { title: "text", body: "some paragraph", author: "john", id: 2 },
        { title: "New Website", body: "write something", author: "doe", id: 3 },
    ]);

    return (
        <div className="blog-list">
            <Props blogs={blogs} title="All blogs"/>
        </div>
    );
};

export default Lists;
