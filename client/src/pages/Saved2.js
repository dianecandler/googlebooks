import React, { Component } from 'react';
import {List, ListItem, DeleteBtn} from '../components/List/';
import Api from '../utils/Api'

class Saved extends Component {
    state = {
        savedBooks: []
    }
    
    componentDidMount() {
        this.loadBooks()
    }

    loadBooks = () => {
        API.getSaved()
            .then(res => {
                this.setState({savedBooks: res.data});
            })
            .catch(err => console.log(err));
    };

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => console.log(res))
            .catch(err => console.log(err));
            this.loadBooks();
    }


    render() {
        return (
            <div className="row">
            {this.state.savedBooks.length ? (
                <List>
                    {this.state.savedBooks.map((book) => {
                        return (
                            <ListItem key={book._id}>
                                <div className="card">
                                    <div className="card-body">
                                        <img src={book.image} alt="The Book's Cover" className="float-left img-fluid m-3"/>
                                        <div className="card-title"><strong>{book.title}</strong> by {book.authors[0]}</div>
                                        <div className="card-text">{book.summary}</div>
                                        <a className="btn btn-primary float-right" href={book.link} rel="noopener noreferrer" target="_blank">Google Books</a>
                                //*TODO: change Delete to x if size is too big
                                        <DeleteBtn onClick={() => this.deleteBook(book._id)}>Delete</DeleteBtn>
                                    </div>
                                </div>
                            </ListItem>
                        )
                    })}

                </List>
            ) : (
                <h4>No Results Found</h4>
                )}
              
            </div>
        )
    }
}

export default Saved

