import React from 'react';

import SearchForm from './components/searchForm';
import Status from './components/status';
import Gallery from './components/gallery';

import './app.css';

export default () => (
	<div className="app">
		<SearchForm />
		<Status />
		<Gallery />
	</div>
);
