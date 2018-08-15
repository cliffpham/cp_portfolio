import React, {Component} from 'react';


class Projects3 extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://res.cloudinary.com/djenpulgm/video/upload/v1532493118/DoggyDemo.mp4'
        }
    }
  render() {

    return (
      <div style={{height: 700, width: 700, position: "relative", paddingTop: '3%', left: '55%', transform: 'translateX(-50%)'}}>
    
      <div style={{backgroundColor: '#FFAE42', display: 'flex', flexDirection: "row", width: 700}}>

        <div style={{backgroundColor: '#FFAE42', width: 700, height: 700, alignContent: 'stretch', padding: 0}}>

          <h1 style={{color: 'white', fontFamily: 'Overpass Mono, monospace',fontSize: 50, letterSpacing:'-3px', textAlign: 'left', margin: 0, paddingLeft: 10}}> GIVE A DOG A BONE </h1>
      
          <div style={{paddingLeft: 10}}>
          <textbody style={{color: 'white', fontFamily: 'Avenir', fontSize: 18, textAlign: 'center', marginBottom: 0}}> 
          A web application to help rescue dogs find loving homes using a similar UI as dating apps, such as Tinder. The app was built using HTML CSS JQuery Javascript Firebase AJAX Bootstrap.
          </textbody>
          </div>
          
          <div style={{display: 'flex', flexDirection: 'row', paddingLeft: 10}}>

          <h5 style={built}> jQuery </h5>
          <h5 style={built}> HTML </h5>
          <h5 style={built}> Bootstrap </h5>
          <h5 style={built}> Petfinder API </h5>
          <h5 style={built}> Google Maps API </h5>
          <h5 style={built}> Firebase </h5>
      
          </div>

          <div style={{height: 390, width: 700, objectFit: 'cover'}}>

          <video style={VideoStyle} loop autoPlay muted>
          <source src={this.state.videoURL} type="video/mp4" />
          Your browser does not support the video tag.
          </video>


          </div>

          <div style={{display: 'flex', flexDirection: 'row', paddingTop: 10, margin: '0 auto', width: 70}}>
          <a href="https://github.com/balbano80/Doggie-Tinder" target="_blank" rel="noopener noreferrer"  >
          <img 
          src={require('../images/github.png')}
          style={{width:55, height: 55}}
          alt="github"
          />
          </a>

          </div>

      

        </div>

      </div>

  
    </div>    
    );
    
  }

}

export default Projects3

const VideoStyle = {
    width: 700,
    height: 390,
    objectFit: 'cover'
}

const built = {
  border: 2, 
  padding: 5,
  borderStyle: 'solid',  
  borderColor: "white", 
  color: 'white', 
  marginRight: 10

}

// #FFAE42

// https://res.cloudinary.com/djenpulgm/video/upload/v1532493118/DoggyDemo.mp4

// https://github.com/balbano80/Doggie-Tinder

// A web application to help rescue dogs find loving homes using a similar UI as dating apps, such as Tinder. The app was built using HTML CSS JQuery Javascript Firebase AJAX Bootstrap.

