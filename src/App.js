import React, { Component } from "react";
import Navbar from "./components/Navbar";
import ImageSquare from "./components/ImageSquare";
import Wrapper from "./components/Wrapper";
import images from "./images.json";
import "./App.css";

class App extends Component {
  state = {
    images: images,
    remainingImages: images,
    currentScore: 0,
    topScore: 0
  };

  componentDidMount() {
    this.shuffleImages(images);
  };

  shuffleImages = images => {
    for(let i = images.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i+1));
      [images[i], images[j]] = [images[j], images[i]]
    }
  };

  checkWin = () => {
    if(this.state.currentScore === 12) {
      alert("You win! Play again.")
      this.setState({
        images: images,
        remainingImages: images,
        currentScore: 0,
        topScore: this.state.topScore
      })
    }
  }
    
  selectedImage = id => {
    const selectedImage = this.state.remainingImages.find(image => image.id === id);
    
    if(selectedImage === undefined) {
      this.setState({
        images: images,
        remainingImages: images,
        currentScore: 0,
        topScore: (this.state.currentScore > this.state.topScore) ? this.state.currentScore : this.state.topScore
      });
    }
    else {
      const newImages = this.state.remainingImages.filter(image => image.id !== id);
      if(this.state.currentScore === 11) {
        alert("You win! Play again.")
        this.setState({
          images: images,
          remainingImages: newImages,
          currentScore: 0,
          topScore: 12
        })
      }
      else {
        this.setState({
          images: images,
          remainingImages: newImages,
          currentScore: this.state.currentScore + 1,
          topScore: this.state.topScore
        })
      }
    }

    this.shuffleImages(images);
  };

  render() {
    return (
      <div className="container">
      <Wrapper>
        <Navbar
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />
        {
          this.state.images.map(images => (
            <ImageSquare
              key={images.id}
              id={images.id}
              image={images.image}
              selectedImage={this.selectedImage}
            />
          ))
        }
      </Wrapper>
      </div>
    )
  }
}

export default App;
