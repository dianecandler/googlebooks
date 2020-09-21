// Using Class Component on Search.js and Hooks with Saved.js
import React, { Component } from 'react';
import Api from '../utils/Api';
import List from '../components/List';

export default class search extends Component {
	state = {
		value: '',
		books: []
	};
	valueChange = (event) => {
		const book = event.target.value;
		this.setState({ value: book });
	};
	newBook = bookData => {
		return {
			_id: bookData.id,
			title: bookData.volumeInfo.title,
			authors: bookData.volumeInfo.authors,
			image: bookData.volumeInfo.imageLinks.thumbnail,
			description: bookData.volumeInfo.description,
			link: bookData.volumeInfo.previewLink
		}
	}
	searchBook = (queryString) => {
		Api.googleBooks(queryString).then((response) => 
			// console.log(response);
		this.setState({books: response.data.items.map(book => 
				this.newBook(book),
				console.log(this.state.books)
			)})	
			);
	};
	valueSubmit = (event) => {
		event.preventDefault();
		this.searchBook(this.state.value);
	};
	render () {
		return (
			<div>
				<nav className='navbar navbar-expand-lg navbar-light bg-light'>
					<form className='form-inline my-2 my-lg-0 col-12 justify-content-center'>
						<input
							className='form-control mr-sm-2 col-7'
							type='search'
							placeholder='search book name'
							aria-label='Search'
                            onChange= {event => this.valueChange(event)
                            }
						/>
						<button
							className='btn btn-outline-info my-2 my-sm-0'
							type='submit'
							onClick={this.valueSubmit}
						>
							Enter
						</button>
					</form>
				</nav>
				<div className="results">
					<div>
						{this.state.books.map(book =>
							{
								return(
									<List key={book._id} book={book} title={book.title} author={book.authors} description={book.description} url={book.link} image={book.image}/>

								)
							}
							)}
					</div>
				</div>
			</div>
		);
	}
}
