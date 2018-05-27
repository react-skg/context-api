import React, { Component } from "react";
import PropTypes from "prop-types";

import "./image.css";

class Image extends Component {
  render() {
    const { image } = this.props;
    const {
      urls: { small },
      user,
      links: { download }
    } = image;

    return (
      <div className="app-image-container">
        <img className="app-image-src" src={small} alt="img" />
        <div className="app-image-overlay">
          <div className="app-image-likes-container">
            <div className="app-image-likes-wrapper">
              <i className="app-image-like-heart far fa-heart" />
              <span>{user.total_likes}</span>
            </div>
          </div>
          <div className="app-image-bottom-container">
            <div className="app-image-user-details">
              <img
                className="app-image-user-icon"
                src={user.profile_image.small}
                alt="profile-img"
              />
              <span className="app-image-user-name">
                {user.first_name} {user.last_name}
              </span>
            </div>
            <div
              className="app-image-download-container"
              title="Download image"
            >
              <a
                className="app-image-anchor"
                href={`${download}?force=true`}
                target="_blank"
              >
                <i className="far fa-arrow-alt-circle-down" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const { object } = PropTypes;

Image.propTypes = {
  /**
   * The image object.
   */
  image: object
};

export default Image;
