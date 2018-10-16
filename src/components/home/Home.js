import React, { Component } from 'react';
import Modal from '../modal/Modal';
import ProjectCardContainer from '../projectCardContainer/ProjectCardContainer';
import ProjectCard from '../projectCard/ProjectCard';
import { projectCardImages} from '../../images';





class Home extends Component {
 state = {
   showModal: null,
   loading: false
 }

 componentDidMount() { 
   const modalSeen = localStorage.getItem('modalShown')
   if(modalSeen === null) {
     this.setState({showModal: true});
   } else {
     this.setState({showModal: false})
     this.setState({loading: true})
     setTimeout(this.setState({loading: false}),100)
   }
 }

 closeModal = () => {
   this.setState({ showModal: false });
   localStorage.setItem('modalShown', 'true');
 }
  render() {
    const { showModal, loading } = this.state;
    const projectCardData = [
      {
        projectURL: '/socialfeed',
        projectImage: projectCardImages.sfDesktop1,
        projectTitle: 'Social Feed'
      },
      {
        projectURL: '/sassy-music-player',
        projectImage: projectCardImages.smpDesktop1,
        projectTitle: 'Sassy-musicplayer'
      },
      {
        projectURL: '/simply-do',
        projectImage: projectCardImages.sdDesktop1,
        projectTitle: 'Simply Do'
      },
      {
        projectURL: '/dont-be-a-square',
        projectImage: projectCardImages.dbasDesktop1,
        projectTitle: 'Dont be a SQUARE'
      },
      {
        projectURL: '/react-landing-page',
        projectImage: projectCardImages.rlpDesktop1,
        projectTitle: 'React Landing Page'
      },
      {
        projectURL: '/punkbeer',
        projectImage: projectCardImages.pbDesktop1,
        projectTitle: 'Punk Beer'
      },
    ]

    let outputContent;

    if(showModal) {
     outputContent = <Modal closeModal={this.closeModal} /> 
    } else if (loading) {
      outputContent = (<div className="home">
        <h3 className="loading">loading</h3>
      </div>)
    } else {
      outputContent = (<div className="home">
      <ProjectCardContainer>
        {projectCardData.map(project => (
          <ProjectCard projectImage={project.projectImage} projectURL={project.projectURL} projectTitle={project.projectTitle} key={project.projectTitle} />
        ))}
      </ProjectCardContainer>
      </div>)
    }

    return outputContent;
  }
}

export default Home;
