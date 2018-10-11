import React, { Component } from 'react'

class ProjectCardContainer extends Component {
  render() {
      const { children } = this.props;
    return (
      <div className="projectCardContainer">
        {children}
      </div>
    )
  }
}


export default ProjectCardContainer;