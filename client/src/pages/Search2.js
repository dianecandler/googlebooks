import React, { Component } from 'react';
import {Input, FormBtn} from '../components/Form';
import {List, ListItem, SaveBtn} from '../components/List';
import API from '../utils/API';

class Search extends Component {
	state = {
		books: [],
		currentTerm: '',
		queryString: "https:www.googleapis.com/books/v1/volumes?q="
	};

	handleInputChange = event => {
		const {name, value} = event.target;
		this.setState({
			[name]: value
		})
	};
handleFormSubmit = event => {
	event.preventDefault();
	if (this.state.currentTerm) {
		let localSearchTerms = this.state.currentTerm.split(" ");
		let queryTerms = localSearchTerms.join("+")
		let localQueryString = this.state.queryString + queryTerms;
		API.googleBooks(localQueryString).then(response => {
			console.log(response)
			this.state({
				books:response.data.items
			})
			console.log(this.state.books)
		})
	}
};

saveBook = id => {
	const data = {
		title: localBook.title,
		authors: localBook.authors,
		summary: localBook.description,
		image: localBook.imageLinks.thumbnail,
		link: localBook.infoLink
	}
	API.saveBook(data)
	.then(res => console.log(res))
	.catch(err => console.log(err))
	alert('Book saved !')
}
render ( {
	<div className="col-md-10 text-center mx-auto">
		<div className="row">
			<form className="col-md-6 mx-auto">
				<h4 className="ml-1">Search Book </h4>
				<Input
					value={this.state.currentTerm}
					onChange={this.handleInputChange}
					name="currentTerm"
					placeholder="Batman"
			
			//*todo not sure if this is self closing </> or need </form> - ASK
			<FormBtn
				disabled={!{this.state.currentTerm}}
				onClick={this.handleFormSubmit}
			>
			Submit
			</FormBtn>
			</form>
		</div>
		<div className="row">
			{this.state.books.length ? (
				<List>
					{this.state.books.map((book, i) => {
						return (
							<ListItem key={i}>
								<div className="card">
									<img src={book.volumeInfoi.imageLinks
									?
									book.volumeInfo.imageLinks,thumbnail
									:
									"https://cdn4.iconfinder.com/data/icons/basic-17/80/22_BO_open_book-512.png"}
									alt="The Book's Cover" className="float-left img-fluid m-3" />
									<div className="card-title"><strong>{book.volumeInfo.title ? book.volumeInfo.title : "Title Unknown"</strong> by {book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Anonymous" })}</div>
									
									<div className="card-text">{book.volumeInfo.description ? book.volumeInfo.description : "No Description Found"}</div>
									<a className="btn btn-primary float-right" href={book.volumeInfo.infoLink ? book.volumeInfo.infoLink : "https://en.wikipedia.org/wiki/HTTP_404"}>Google Books</a>
									<SaveBtn onClick={() => this.saveBook(i)}>Save Book</SaveBtn>
								</div>
							</div>
						</ListItem>
					)
				})}
			</List>
		) : (
				<h4 className="mx-auto"> No results found </h4>
			)}
	</div>
</div>
)
}
