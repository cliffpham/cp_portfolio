import React, {Component} from 'react';
// import Anotoki from '../images/Anotoki.png'
// import Meishi from '../images/Meishi3.png'


class Projects extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://res.cloudinary.com/djenpulgm/video/upload/v1534369150/MeishiDemo.mp4'
        }
    }
  render() {

    return (
    <div style={{height: 700, width: 700, position: "relative", paddingTop: '3%', left: '55%', transform: 'translateX(-50%)'}}>
    
      <div style={{backgroundColor: 'white', margin: 'auto', display: 'flex', flexDirection: "row", height: 400}}>

      <div style={{backgroundColor: '#4BA9A1', width: 330, height: 700, paddingLeft: 10, paddingRight: 3}}>

      <h1 style={{color: 'white', fontFamily: 'Overpass Mono, monospace',fontSize: 50, letterSpacing:'-3px', textAlign: 'left', paddingTop: 10, paddingBottom: 15, margin: 0}}> MEISHI </h1>
      
      <textbody style={{color: 'white', fontFamily: 'Avenir', fontSize: 20, textAlign: 'left'}}> 
      A mobile business card app that allows users to create and share their digital business cards using thier phones as a QR code scanner through this app.
      </textbody>

      <div style={{display: 'flex', flexDirection: 'row'}}>

      <h5 style={built}> React </h5>
      <h5 style={built}> React Native </h5>
      <h5 style={built}> Firebase </h5>
      <h5 style={built}> Expo </h5>

      </div>

      <a href="https://github.com/cliffpham/meishi-mvp" target="_blank" rel="noopener noreferrer">
      <img 
      src={require('../images/github.png')}
      style={{width:75, height: 75, paddingTop: 50, paddingLeft: 120}}
      alt="github"
      />
      </a>

      <a href="https://www.youtube.com/watch?v=bNAFRY-tw0E&t=178s" target="_blank" rel="noopener noreferrer">
      <img 
      src={require('../images/play.png')}
      style={{width:100, height: 100, paddingTop: 75, paddingLeft: 108}}
      alt="github"
      />
      </a>
     
      </div>

      <div style={{width: 370, height: 700, objectFit: 'fill'}}>
      <video style={VideoStyle} loop autoPlay muted>
      <source src={this.state.videoURL} type="video/mp4" />
      Your browser does not support the video tag.
      </video>
      </div>
  
      </div>

    </div>    
    );
    
  }

}

export default Projects

const VideoStyle = {
    width: 370,
    height: 700,
    objectFit: 'fill'
}

const built = {
    border: 2, 
    borderStyle: 'solid', 
    padding: 5, 
    borderColor: "white", 
    color: 'white', 
    marginRight: 10

}

