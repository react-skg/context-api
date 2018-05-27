import React, { Component } from "react";
import PropTypes from "prop-types";

import "./searchForm.css";

class SearchForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const term = this.input.value;
    this.props.fetchImages(term);
  };

  render() {
    return (
      <form className="app-search-form" onSubmit={this.handleSubmit}>
        <h2 className="app-search-form-title">
          Search images from unsplash.com
        </h2>
        <fieldset className="app-search-field-set">
          <input
            className="app-search-input"
            ref={input => {
              this.input = input;
            }}
            placeholder="Enter your search term"
          />
          <input className="app-search-button" type="submit" value="Submit" />
        </fieldset>
      </form>
    );
  }
}

const { func } = PropTypes;

SearchForm.propTypes = {
  /**
   * Fired when the button pressed.
   */
  fetchImages: func
};

export default SearchForm;
