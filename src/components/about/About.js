import React, { Component } from 'react';
import { otherImages } from '../../images';

class About extends Component {
    state = {
        skills: ['ReactJS','React', 'JavaScript(ES6)', 'NodeJS', 'Express', 'MongoDB', 'CSS', 'Html']
    }
  render() {
    const { skills } = this.state;

    let outputSkills = skills.map(skill => (
        <div key={skill}className="skill">{skill}</div>
    ))
    return (
      <div className="about">
        <div className="infoContainer">
        <div className="img">
        <img src={otherImages.myownpic} alt="me"/>
        <a href="https://github.com/jh1992jh" target="_blank"  rel="noopener noreferrer">
            <button>
                GitHub <i className="fab fa-github" />
            </button>
        </a>
        </div>
        <div className="bioAndSkills">
        <div className="bio">
        <p>I've started learning to code in the Fall of 2018. I was listening to Tim Ferrish Podcast and heard a mention of FreeCodeCamp. I immediately went to FreeCodeCamp, created an account, and fell in love with code and what I could do with it. Later on I've discovered Udemy, an amazing learning resource with ample courses. It was on Udemy that my real learning began. When I started learning JavaScript and React, it clicked for me that this what I want to do for a living. Since then I've created many projects. Some provided by courses, others as self-directed exploration into the world of possible.</p>
        </div>
        <div className="skills">
        <h3>Current Skills</h3>
        <br />
        <div className="skillsOutput">
        {outputSkills}
        </div>
        </div>
        </div>
        </div>
      </div>
    )
  }
}

export default About;