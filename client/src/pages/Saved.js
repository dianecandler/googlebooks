import React, { Component } from 'react';
import Api from '../utils/Api';
import SavedList from '../components/SavedList';
import DeleteBtn from '../components/SavedList/DeleteBtn';


export default class Saved extends Component {
    state = {savedBooks: []}

    componentDidMount() {
        this.loadBooks()
    }

    loadBooks = () => {
        Api.getSaved()
            .then(res => {
                this.setState({savedBooks: res.data});
            })
            .catch(err => console.log(err));
    };
    deleteBook = id => {
        Api.deleteBook(id).then(() => {this.loadBooks()})
            .catch(err => console.log(err));
    
    }
    
    render() {
        return (
            <div>
                {this.state.savedBooks.map(book =>
							{
                                console.log(book);
								return(
                                    //<SavedList key={book._id} book={book} id={book._id} title={book.title} author={book.authors} description={book.description} url={book.link} image={book.image} loadPage={()=>this.loadBooks()}/>
                                    <div className="container my-4" key={book._id}>
                                    <div className="row"> 
                                    <div className="col-8" > 
                                        <h3>{book.title}</h3>
                                        <h6>Written by {book.authors}</h6>
                                    </div>
                                    <div className="col-4" > 
                                    <button className="btn btn-success text-light">
                                        <a href={book.url} target="_blank" className="text-light">View</a>
                                    </button>
                                    {/* <button className="btn btn-info ml-2" onClick={() => this.handleSave(book.book)}>
                                        Save
                                    </button> */}
                                    <DeleteBtn onClick={() => {this.deleteBook(book._id);}}>Delete</DeleteBtn>
                                    </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-3" >
                                        <img src={book.image} />
                                        </div>
                                        <div className="col-9" >
                                        <p>{book.description} </p>
                                        </div>
                                    </div>
                                    <hr/>
                                    </div>

								)
							}
							)}
            </div>
        )
    }
}


