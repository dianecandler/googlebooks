// show data receiving from parent
import React from 'react'

export default function index(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <h6>Written by {props.author}</h6>
      <div className="row">
        <div className="col-3" >
          <img src={props.image} />
        </div>
        <div className="col-9" >
          <p>{props.description} </p>
    <a href={props.url} target="_blank">{props.url}</a>
        </div>
      </div>

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