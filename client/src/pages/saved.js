import React, { Component } from 'react';
import Api from '../utils/Api';
import SavedList from '../components/SavedList';

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
    
    render() {
        return (
            <div>
                {this.state.savedBooks.map(book =>
							{
                                console.log(book);
								return(
									<SavedList key={book._id} book={book} id={book._id} title={book.title} author={book.authors} description={book.description} url={book.link} image={book.image} loadPage={() => this.loadBooks}/>

								)
							}
							)}
            </div>
        )
    }
}


