import React from 'react';
import Status from './status';
import { GalleryContext } from '../../contexts/galleryContext';

export default props => (
	<GalleryContext.Consumer>
		{({ term, status, images }) => <Status {...props} term={term} status={status} images={images} />}
	</GalleryContext.Consumer>
);
