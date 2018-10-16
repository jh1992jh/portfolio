import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import ProjectView from './components/projectView/ProjectView';
import { projectViewimages, otherImages } from './images';
import { rlpProjectImages, dbasProjectImages, sdProjectImages, sfProjectImages, pbProjectImages, smpProjectImages } from './images';
import NavDropdownMenu from './components/navbars/NavDropdownMenu';
import createHashHistory from 'history/createHashHistory';
import './App.css';

const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });


class App extends Component {
 componentDidMount() {
   console.log(process.env.PUBLIC_URL);
 }
  render() {

    
    return (
      <Router history={hashHistory}>
      <div className="portfolio">
      <img src={otherImages.logo} alt="logo" className="logo" />
      <NavDropdownMenu />
      <Route exact path="/about" component={About} /> 
      <Route exact path="/" component={Home} />
    
      <Route exact path="/socialfeed" render={(props) => (
        <ProjectView
        {...props}
        desktopImg={projectViewimages.sfDesktopFrame}
        iPadImg={projectViewimages.sfIpadFrame}
        iPhoneImg={projectViewimages.sfIphoneFrame}
        projectImages={sfProjectImages} 
        projectTitle="SocialFeed"
        projectDescription="A social media app with mobile first design. I got the inspiration for this project from Instagram. The project uses JWT tokes for user authentication. Users are able to create their own profiles and edit them. Follow other profiles and be followed. Post images with filters, post stories, like posts, comment to posts, delete their own posts and comments. The project is built with the MERN stack aka MongoDB, Express, React&Redux and NodeJS"
        projectTechnologies={['ReactJS', 'Redux', 'NodeJS', 'MongoDB', 'Express']}
        projectURL="https://tranquil-taiga-96610.herokuapp.com/login"
        />
      )} />
      <Route exact path="/react-landing-page" render={(props) => (
        <ProjectView
        {...props}
        iPhoneImg={projectViewimages.rlpIphoneFrame} 
        iPadImg={projectViewimages.rlpIpadFrame}
        desktopImg={projectViewimages.rlpDesktopFrame}
        projectImages={rlpProjectImages} 
        projectTitle="React Landing Page"
        projectDescription="Landing page built with ReactJS taking advantage many features of ReactJS like building reusable components.
        Each component is built with reusability in mind. The page also includes a self-built image-carousel from scratch. The site is responsive for different screen sizes and no CSS libraries or frameworks were used to achieve it, just vanilla CSS"
        projectTechnologies={['ReactJs', 'JavaScript', 'Html5', 'CSS3'] }
        projectURL="https://jh1992jh.github.io/react-landing-page/"
        />
      )} />
      <Route exact path="/dont-be-a-square" render={(props) => (
        <ProjectView
        {...props}
        desktopImg={projectViewimages.dbasDesktopFrame}
        projectImages={dbasProjectImages}  
        iPadImg={null}
        iPhoneImg={null}
        projectTitle="Don't be a SQUARE"
        projectDescription="A game built on Html5 canvas using Vanilla JavaScript. In it you must make sure that the enemy squares don't catch you. The game gets harder at certain points when your score reaches a high enough of a number spawing new squares to catch you. The Game also keep track of your personal highscore"
        projectTechnologies={['JavaScript','Html5', 'CSS3'] }
        projectURL="https://jh1992jh.github.io/dont-be-a-square/index.html"
        />
      )} />
      <Route exact path="/simply-do" render={(props) => (
        <ProjectView
        {...props}
        desktopImg={projectViewimages.sdDesktopFrame} 
        iPadImg={projectViewimages.sdIpadFrame}
        iPhoneImg={projectViewimages.sdIphoneFrame}
        projectImages={sdProjectImages} 
        projectTitle="Simply DO"
        projectDescription="Yes, i know what you might be thinking, another todo app. Don't we already have enough of those already? This one steps it up a notch though. This isn't your regular todo app. It's a todo app with user authentication using JWT tokens, functionality to save your todos to a database, mark them as done and see your all past done todos with the exact dates you completed them. It's also responsive to different screensizes like mobile, tablets and laptops etc..."
        projectTechnologies={['ReactJS', 'Redux', 'NodeJS', 'MongoDB', 'Express'] }
        projectURL="https://floating-fortress-57611.herokuapp.com/"
        />
      )} />
      <Route exact path="/punkbeer" render={(props) => (
        <ProjectView
        {...props}
        desktopImg={projectViewimages.pbDesktopFrame}
        iPadImg={projectViewimages.pbIpadFrame}
        iPhoneImg={projectViewimages.pbIphoneFrame}
        projectImages={pbProjectImages} 
        projectTitle="PunkBeer"
        projectDescription="A React app to that uses the Punk API to fetch info about beers. It also displays them and you are able to favorite beers, see your favorited beers, delete a beer from the favorites. The app also has modals that have been built from scratch without using any frameworks or libraries. The app is also responsive to different screensizes like mobile, tablest and desktops etc..."
        projectTechnologies={['ReactJS', 'JavaScript', 'CSS3']}
        projectURL="https://jh1992jh.github.io/punk-api-beer-project/"
        />
      )} />
      <Route exact path="/sassy-music-player" render={(props) => (
        <ProjectView
        {...props}
        desktopImg={projectViewimages.smpDesktopFrame}
        iPadImg={projectViewimages.smpIpadFrame}
        iPhoneImg={projectViewimages.smpIphoneFrame}
        projectImages={smpProjectImages} 
        projectTitle="Sassy Music Player"
        projectDescription="Now that React supports Sass out of the box i decided to do a React app using Sass. This project is a music player written with mobile first approach with all the basic functionality like rewinding, changing tracks, being able to play and pause tracks etc... All the icons in the app are also self-made with Figma"
        projectTechnologies={['ReactJS', 'JavaScript', 'Sass', 'Figma']}
        projectURL="https://jh1992jh.github.io/sassy-musicplayer/"
        />
      )} />
      </div>
      </Router>
    );
  }
}

export default App;
