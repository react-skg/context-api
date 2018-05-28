import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Image from '../image';
import './gallery.css';

export default ({ images }) => (
	<div className="app-gallery-container">{images.map(image => <Image image={image} key={image.id} />)}</div>
);
