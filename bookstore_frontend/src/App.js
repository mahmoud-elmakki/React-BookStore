import React, { Component } from 'react';
import './App.css'
import BookList from './BookList.js'

// import axios from 'axios';

export const books = [
  {
    id: "641d602f-3335-46a8-80f9-184d2c27a8b4",
    title: "Django for Beginners",
    author: "William S. Vincent",
    price: "39.00",
    //cover: "http://127.0.0.1:8000/media/covers/dfb_k34oCMq.jpg"
    cover: "C:\Users\hp\django projects\bookstore_backend\media\covers\dfa_JXaHhnT.jpg"
  },
  {
    id: "656e2ed8-65a8-4ec6-81dd-bbb514d9724c",
    title: "Django for APIs",
    author: "William S. Vincent",
    price: "38.00",
    //cover: "http://127.0.0.1:8000/media/covers/dfa_JXaHhnT.jpg"
    cover: "C:\Users\hp\django projects\bookstore_backend\media\covers\dfa_JXaHhnT.jpg"
  },
  {
    id: "4b544f7f-fa7b-4431-b2b8-72d863ff068b",
    title: "Django for Professionals",
    author: "William S. Vincent",
    price: "39.00",
    //cover: "http://127.0.0.1:8000/media/covers/dfp_9aLl4id.jpg"
    cover: "C:\Users\hp\django projects\bookstore_backend\media\covers\dfa_JXaHhnT.jpg"
  },
];


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: books
    };
  } 

// Rest API
/*
  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    axios
      .get('http://127.0.0.1:8000/api/v1/')
      .then(res => {
        this.setState({ books: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
 */

  render() {
    return (
      <div className="">
        <BookList books={this.state.books}/>
      </div>
    );
  }
}


export default App;
