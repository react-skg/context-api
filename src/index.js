import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

import { GalleryProvider } from './contexts/galleryContext';

ReactDOM.render(
	<GalleryProvider>
		<App />
	</GalleryProvider>,
	document.getElementById('root')
);
registerServiceWorker();
