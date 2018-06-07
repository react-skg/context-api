import React, { Component } from "react";
import unsplash from "./services/unsplash";
import SearchForm from "./components/searchForm/searchForm";
import Image from "./components/image/image";

import "./app.css";

class App extends Component {
  state = {
    terms: "",
    images: [],
    status: "initial"
  };

  componentDidMount() {
    this.fetchImages("kitten");
  }

  fetchImages = async term => {
    this.setState({
      status: "searching",
      term: term,
      images: []
    });

    try {
      const images = await unsplash(term);
      console.log(images);

      this.setState({
        status: "done",
        images
      });
    } catch (error) {
      this.setState({
        status: "error"
      });
    }
  };

  render() {
    const { term, status, images } = this.state;

    return (
      <div className="app">
        <SearchForm fetchImages={this.fetchImages} />

        {status === "searching" && (
          <h2 className="app-result-searching">Searching for {term} </h2>
        )}
        {status === "done" &&
          images.length === 0 && (
            <h2 className="app-result-searching">
              Sorry, no results for {term}!
            </h2>
          )}
        {status === "error" && (
          <h2 className="app-result-searching">Oops... error!</h2>
        )}

        <div className="app-images-container">
          {images.map(image => <Image image={image} key={image.id} />)}
        </div>
      </div>
    );
  }
}

export default App;
