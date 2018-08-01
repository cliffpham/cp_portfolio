import React, { Component } from 'react';
import { Parallax} from 'react-parallax';
import ProjectsMobile from './ProjectsMobile';
import Mobile from './mobileTest';
import profile from '../images/filler.jpg'
import contact from '../images/contact.jpg'



class ProfileMobile extends Component {
    render() {
  
      return (

        <div style={styles}>
        <Parallax 
          bgImage={profile}
          strength={-105}>
          
          <div style={{height: 570}}>
            <div>
            <h2>Hi there, I'm Cliff and I am a developer</h2>
            </div>
          </div>
        </Parallax>
        <img
        src={require('../images/arrowRight.png')}
        alt="logo"
        style={{height: 50, transform: 'rotate(90deg)'}}
        />
        <Parallax>
          <div style={{height: 720}}>
          <ProjectsMobile/>
          </div>
        </Parallax>
        <img
        src={require('../images/arrowRight.png')}
        alt="logo"
        style={{height: 50, transform: 'rotate(90deg)'}}
        />
        <Parallax bgImage={contact} blur={{ min: 3, max: -3 }} strength={75} >
          <div style={{height: 500}}>
            <Mobile/>
          </div>
        </Parallax>
        <img
        src={require('../images/mylogo.png')}
        alt="logo"
        style={{width: 100}}
        />
      </div>




);
}
}

export default ProfileMobile

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

// const insideStyles = {background: 'white', padding: 20, position: 'absolute', top: '50%', right: 0};


// /////
// // <div>
// <Parallax
// blur={10}
// bgImage={require('../images/mylogo.png')}
// bgImageAlt="the cat"
// strength={200}
// >
// <Introduction/>

// </Parallax>

// <Parallax
// blur={{ min: -15, max: 15 }}
// bgImageAlt="the dog"
// strength={200}
// >
// <ProjectsMobile/>
// <div style={{ height: '200px' }} />
// </Parallax>
// <Parallax strength={300}>
//   <div>Use the background component for custom elements</div>
// <Mobile/>
// </Parallax>
// </div>
