import React from 'react'
import navArrow from '../../images/nav-arrow.svg';

const Modal = ({ closeModal }) => {
  return (
    <div className="modalBackground">
        <img className="navArrow" src={navArrow} alt="arrow"/>
        <div className="modalWrapper">
          <div className="modalContent">
            <h3 className="modalTitle">Hello</h3>
            <p className="modalText">My name is Jani and i'm a webdeveloper whos skillset is mostly based around JavaScript, ReactJS, Redux, ES6, NodeJS, Express and MongoDB for example. On this site you can see some of the projects i've built myself. All the projects are responsive to different screen sizes like e.g. mobile, tablets and desktops. At the top left from the nav you can find link to my gitHub profile and more.</p>
            <button onClick={closeModal} className="modalBtn">Okay</button>
          </div>
        </div>
      </div>
  )
}

export default Modal;