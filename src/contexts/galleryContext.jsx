import React, { Component } from 'react';
import unsplash from '../services/unsplash';

export const GalleryContext = React.createContext();

export class GalleryProvider extends Component {
	state = {
		terms: '',
		images: [],
		status: 'initial'
	};

	componentDidMount() {
		this.fetchImages('Mountains');
	}

	fetchImages = async term => {
		this.setState({ status: 'searching', term: term, images: [] });

		try {
			const images = await unsplash(term);

			this.setState({ status: 'done', images });
		} catch (error) {
			this.setState({ status: 'error' });
		}
	};

	render() {
		return (
			<GalleryContext.Provider
				value={{
					...this.state,
					fetchImages: this.fetchImages
				}}
			>
				{this.props.children}
			</GalleryContext.Provider>
		);
	}
}
