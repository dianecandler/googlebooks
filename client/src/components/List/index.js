/* // show data receiving from parent
import React, { useState, useEffect } from 'react';
import Api from '../../utils/Api';

export default function index(this.props) {

  const [saveState, setSaveState] = useState();

  //useEffect(() => console.log('using use effect', []));
  
  function savedBook(book) {
    console.log('saving this book ' + book);
    Api.saveBook(book);
  }

  return (
    
  )
} */
/* 
  `title` - Title of the book from the Google Books API
* `authors` - The books's author(s) as returned from the Google Books API
* `description` - The book's description as returned from the Google Books API
* `image` - The Book's thumbnail image as returned from the Google Books API
* `link` - The Book's information link as returned from the Google Books API
*/

import React, { Component } from 'react';
import Api from '../../utils/Api';

export default class index extends Component {

  state = {savedBooks:[]}

  componentDidMount() {
    Api.getSaved().then(savedBooks => this.setState({savedBooks:savedBooks})).catch(err => console.log(err));
  }

  handleSave = book => {
    console.log(book);
    Api.saveBook(book).then(savedBooks => this.setState({savedBooks:savedBooks})).catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container my-4">
       <div className="row"> 
       <div className="col-8" > 
        <h3>{this.props.title}</h3>
        <h6>Written by {this.props.authors}</h6>
       </div>
       <div className="col-4" > 
       <button className="btn btn-success text-light">
         <a href={this.props.url} target="_blank" className="text-light">View</a>
       </button>
       <button className="btn btn-info ml-2" onClick={() => this.handleSave(this.props.book)}>
        Save
       </button>

       </div>
       </div>

      <div className="row">
        <div className="col-3" >
          <img src={this.props.image} />
        </div>
        <div className="col-9" >
          <p>{this.props.description} </p>
        </div>
      </div>
      <hr/>
    </div>
    )
  }
}

// export * from "./components/List";
// export * from "./components/ListItem";
// export * from "./components/SaveBtn";
// export * from "./components/DeleteBtn";
