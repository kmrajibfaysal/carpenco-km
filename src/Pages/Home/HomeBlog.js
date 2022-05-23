import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import SingleBlog from './SingleBlog';

function HomeBlog() {
    const { isLoading, data: blogs } = useQuery('blogs', () =>
        fetch(`http://localhost:5000/blogs`).then((res) => res.json())
    );

    if (isLoading) return <Loading />;

    return (
        <div className="container mx-auto my-20 font-karla">
            <h4 className="text-md text-center font-josefin text-gray-400">
                LATEST WOOD WORK NEWS
            </h4>
            <h4 className="text-center  text-4xl text-black">Carpenters Blog</h4>
            <div className="mx-auto mt-10 flex w-11/12 flex-col items-center justify-between space-x-3 md:flex-row">
                {blogs.map((blog) => (
                    <SingleBlog key={blog._id} blog={blog} />
                ))}
            </div>
        </div>
    );
}

export default HomeBlog;
