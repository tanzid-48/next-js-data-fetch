import React from 'react';

const PostCard = ({ post }) => {
    const { id, title, body } = post;

    return (
        <div className="border rounded-2xl shadow-md p-5 bg-white hover:shadow-xl transition duration-300">
            
            {/* Post ID */}
            <span className="text-sm text-gray-500">Post #{id}</span>

            {/* Title */}
            <h2 className="text-xl font-semibold mt-2 mb-3 text-gray-800">
                {title}
            </h2>

            {/* Body */}
            <p className="text-gray-600 text-sm">
                {body.slice(0, 100)}...
            </p>

            {/* Button */}
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Read More
            </button>
        </div>
    );
};

export default PostCard;