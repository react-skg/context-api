import React from 'react';
import SearchForm from './searchForm';
import { GalleryContext } from '../../contexts/galleryContext';

export default props => (
	<GalleryContext.Consumer>
		{({ fetchImages }) => <SearchForm {...props} fetchImages={fetchImages} />}
	</GalleryContext.Consumer>
);
