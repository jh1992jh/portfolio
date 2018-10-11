import React, { Component } from 'react'
import { Spring, config } from 'react-spring';
import ImageCarousel from '../imageCarousel/ImageCarousel';

class ProjectView extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    const {iPhoneImg, iPadImg, desktopImg, projectTitle, projectDescription, projectTechnologies, projectURL, projectImages} = this.props;

    return (
      <div className="projectView">
      <Spring from={{opacity: 0}} to={{opacity: 1}}>
      {styles => (
        <div style={styles} className="imageContainer forDesktop">
        {desktopImg !== null ?  <img src={desktopImg} alt="Desktop frame" className="desktop" /> : null}
        {iPadImg !== null ?  <img src={iPadImg} alt="iPad frame" className="iPad" /> : null}
        {iPhoneImg !== null ?  <img src={iPhoneImg} alt="iPhone frame" className={desktopImg === null && iPadImg === null ? 'iPhone singleImg' : 'iPhone'} /> : null}
    </div>
      )}
  </Spring>

  <ImageCarousel projectImages={projectImages} />

  <Spring config={config.molasses} from={{opacity: 0}} to={{opacity: 1}}>
  {styles => (
    <div style={styles} className="infoContainer">
    <h3 className="projectTitle">{projectTitle}</h3>
    <p className="projectDescription">
    {projectDescription}
    </p>
    <h4 className="technologiesUsed">Technologies Used</h4>

    <ul>
        {projectTechnologies.map((technology, i) => <li key={i}>{technology}</li>)}
    </ul>

    <a href={projectURL} target="_blank"  rel="noopener noreferrer">
        <button>
            Click to View
        </button>
    </a>
</div>
  )}
  </Spring>
      </div>
    )
  }
}

export default ProjectView;