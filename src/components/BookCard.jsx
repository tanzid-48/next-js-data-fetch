import Image from 'next/image';
import React from 'react';

/*
==============================
 Next.js Data Fetching Notes
==============================

🔹 Cache
Cache stores fetched data to reuse and improve performance.
Example:
fetch(url, { cache: 'force-cache' })
→ First fetch → then reused (static data)

--------------------------------

🔹 SSR (Server-Side Rendering)
Data is fetched on every request (always fresh).
Example:
fetch(url, { cache: 'no-store' })

--------------------------------

🔹 SSG (Static Site Generation)
Data is fetched once at build time and reused.
Example:
fetch(url, { cache: 'force-cache' })

--------------------------------

🔹 ISR (Incremental Static Regeneration)
Data is cached but updates after a specific time.
Example:
fetch(url, { next: { revalidate: 10 } })

--------------------------------

💡 Shortcut:
force-cache → static
no-store    → always fresh
revalidate  → auto update

==============================
*/


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

        <button className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600">
          Buy
        </button>
      </div>
    </div>
  );
};

export default BookCard;