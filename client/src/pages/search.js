import React, { Component } from 'react';
import Api from '../utils/Api';

export default class search extends Component {
	state = {
		value: '',
		books: []
	};
	valueChange = (event) => {
		const book = event.target.value;
		this.setState({ value: book });
	};
	searchBook = (queryString) => {
		Api.googleBooks(queryString).then((response) => console.log(response));
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
			</div>
		);
	}
}
