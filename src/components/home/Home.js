import React, { Component } from 'react';
import Modal from '../modal/Modal';
import ProjectCardContainer from '../projectCardContainer/ProjectCardContainer';
import ProjectCard from '../projectCard/ProjectCard';
import { images } from '../../images';





class Home extends Component {
 state = {
   showModal: null
 }

 componentDidMount() { 
   const modalSeen = localStorage.getItem('modalShown')
   if(modalSeen === null) {
     this.setState({showModal: true});
   } else {
     this.setState({showModal: false})
   }
 }

 closeModal = () => {
   this.setState({ showModal: false });
   localStorage.setItem('modalShown', 'true');
 }
  render() {
    const { showModal } = this.state;

    return showModal ? <Modal closeModal={this.closeModal} />  : (
      <div className="home">
      <ProjectCardContainer>
      <ProjectCard projectURL="/socialfeed" projectImage={images.sfDesktop1} projectTitle="Social Feed" />
      <ProjectCard projectURL="/sassy-music-player" projectImage={images.smpDesktop1} projectTitle="Sassy Music Player" />    
      <ProjectCard projectURL="/simply-do" projectImage={images.sdDesktop1} projectTitle="Simply DO" />   
      <ProjectCard projectURL="/dont-be-a-square" projectImage={images.dbasDesktop1} projectTitle="Don't be a SQUARE" />
      <ProjectCard projectURL="/react-landing-page" projectImage={images.rlpDesktop1} projectTitle="React Landing Page" />
      <ProjectCard projectURL="/punkbeer" projectImage={images.pbDesktop1} projectTitle="PunkBeer" />
      </ProjectCardContainer>
      </div>
    );
  }
}

export default Home;
