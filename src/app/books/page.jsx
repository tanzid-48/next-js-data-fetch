import BookCard from '@/components/BookCard';
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

const getBooks = async() => {
    const res = await fetch('http://localhost:3004/books',{ cache: 'no-store' })
    return res.json();
}

const BooksPage = async() => {
  const books = await getBooks()
    return (
        <div>
            <h2>Books page:{books.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                 books.map(book => <BookCard key={book.id} book = {book}></BookCard>)
                }

            </div>
        </div>
    );
};

export default BooksPage;