// show data receiving from parent
import React, { useState, useEffect } from 'react';
import Api from '../../utils/Api';

export default function index(props) {

  const [saveState, setSaveState] = useState();

  useEffect(() => console.log('using use effect', []));
  
  function savedBook(book) {
    console.log('saving this book ' + book);
    Api.saveBook(book);
  }

  return (
    <div className="container my-4">
       <div className="row"> 
       <div className="col-8" > 
        <h3>{props.title}</h3>
        <h6>Written by {props.author}</h6>
       </div>
       <div className="col-4" > 
       <button className="btn btn-success text-light">
         <a href={props.url} target="_blank" className="text-light">View</a>
       </button>
       <button className="btn btn-info ml-2" onClick={savedBook(props)}>
        Save
       </button>

       </div>
       </div>

      <div className="row">
        <div className="col-3" >
          <img src={props.image} />
        </div>
        <div className="col-9" >
          <p>{props.description} </p>
        </div>
      </div>
      <hr/>
    </div>
  )
}
/* 
  `title` - Title of the book from the Google Books API
* `authors` - The books's author(s) as returned from the Google Books API
* `description` - The book's description as returned from the Google Books API
* `image` - The Book's thumbnail image as returned from the Google Books API
* `link` - The Book's information link as returned from the Google Books API
*/