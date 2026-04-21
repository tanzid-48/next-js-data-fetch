import Image from 'next/image';
import Link from 'next/link';
import React from 'react';




const BookCard = ({ book }) => {
  const { name, author, price, image, category, stock } = book;

  return (
    <div className="border rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-300">
      
      {/* Image */}
      <Image
        src={image}
        alt={name}
        width={320}
        height={120}
        className="w-full h-48 object-cover rounded-xl mb-3"
      />

      {/* Content */}
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">by {author}</p>

      <p className="text-sm mt-1">
        Category: <span className="font-medium">{category}</span>
      </p>

      <p className="text-sm">
        Stock: <span className="font-medium">{stock}</span>
      </p>

      <div className="flex justify-between items-center mt-3">
        <span className="text-xl font-bold text-green-600">
          ${price}
        </span>

        <Link href={`books/${book.id}`}>
        <button className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600">
          Show Details
        </button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;