import React from 'react';
import Gallery from './gallery';
import { GalleryContext } from '../../contexts/galleryContext';

export default props => (
	<GalleryContext.Consumer>{({ images }) => <Gallery {...props} images={images} />}</GalleryContext.Consumer>
);
