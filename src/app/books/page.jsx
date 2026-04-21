import BookCard from '@/components/BookCard';
import React from 'react';

const getBooks = async() => {
    const res = await fetch('http://localhost:3004/books')
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