import React, { Component } from 'react';
import Api from '../utils/Api';
import List from '../components/List';

export default class Saved extends Component {
    state = {savedBooks: []}
    componentDidMount() {
        Api.getSaved()
        .then(savedBooks => {let x = savedBooks.data; console.log(x)})
        .then(savedBooks => {let y = savedBooks.data; console.log(y)})
        .then(savedBooks => {let x = savedBooks.data; console.log(x); this.setState({savedBooks:x})})
        .then(() => console.log(this.state.savedBooks))
        .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                {this.state.savedBooks.map(book =>
							{
                                console.log(book);
								return(
									<List key={book._id} book={book} title={book.title} author={book.authors} description={book.description} url={book.link} image={book.image}/>

								)
							}
							)}
            </div>
        )
    }
}


