import React, { Fragment } from 'react';

import './status.css';

export default ({ status, term, images }) => (
	<Fragment>
		{status === 'searching' && <h2 className="app-status-container">Searching for {term}</h2>}

		{status === 'done' &&
			images.length === 0 && <h2 className="app-status-container">Sorry, no results for {term}!</h2>}

		{status === 'error' && <h2 className="app-status-container">Oops... error!</h2>}
	</Fragment>
);
