import React from 'react';

 export const  generateStaticParams = async() =>{

    const res = await fetch('http://localhost:3004/books')
  const books = await res.json();

  return books.slice(0,3).map(book => ({bookId: book.id}))

 }

const BookDetailsPage = async({params}) => {
    const {bookId} = await params
    const res = await fetch(`http://localhost:3004/books/${bookId}`);

    const {name,author,price} = await res.json();

    return (
        <div>
            <h2>Details of:{bookId}</h2>
            <h3 className='text-4xl'>{name}</h3>
            <h3 className='text-2xl'>{author}</h3>
            <h3>{price}</h3>
        </div>
    );
};

export default BookDetailsPage;