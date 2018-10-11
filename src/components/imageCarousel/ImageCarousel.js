import React, { Component } from 'react'

class ImageCarousel extends Component {
    state = {
        images: [],
        activeImage: 0
    }

componentDidMount() {
    const { projectImages } = this.props;

    const projectImageArr = Object.keys(projectImages).map(img => projectImages[img]);

    this.setState({ images: projectImageArr });

    this.timerID = setInterval(this.incActiveImage, 3000)
} 

componentWillUnmount() {
  clearInterval(this.timerID);
  this.setState({images: null})
}

incActiveImage = () => {
    const { activeImage, images } = this.state;

    activeImage < images.length - 1? this.setState({ activeImage: activeImage + 1}) : this.setState({activeImage: 0});
}
  render() {

    const { images, activeImage } = this.state;
    return (
      <div className="imageCarousel forMobile">
        <img src={images[activeImage]} alt="carousel"/>
      </div>
    )
  }
}

export default ImageCarousel;
