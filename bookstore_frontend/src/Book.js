import React from 'react';


function Book(props) {
  //const { title, author, price,  cover } = props;
  return (
    <div className='tc br3 pa3 ma2 dib bw2 shadow-5'>
      <img className="bookcover" alt='cover' src={props.cover} />
      <div>
        <h2>{props.title}</h2>
        <p>{props.author}</p>
        <p>{props.price}</p>
      </div>
    </div>
  );
}

export default Book;

