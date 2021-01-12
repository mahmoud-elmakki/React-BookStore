import React from 'react';
import Book from './Book.js';


function BookList(props) {

  const {books} = props;

  const book = books.map(function(book) {
  	return(
  	  <Book
  		  key={book.id}
  		  title={book.title}
  		  author={book.author}
        price={book.price}
        cover={book.cover}
  	  />
  	);
  })

  return (
    <div>
      {book}
    </div>
  );
}

export default BookList;
