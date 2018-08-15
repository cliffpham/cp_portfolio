import React, {Component} from 'react';


class Projects2 extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://res.cloudinary.com/djenpulgm/video/upload/v1532412738/DemoReel2.mp4'
        }
    }
  render() {

    return (
    <div style={{height: 700, width: 700, position: "relative", paddingTop: '3%', left: '55%', transform: 'translateX(-50%)'}}>
    
      <div style={{backgroundColor: '#BF8FCC', display: 'flex', flexDirection: "row", width: 700}}>

        <div style={{backgroundColor: '#BF8FCC', width: 700, height: 700, alignContent: 'stretch', padding: 0}}>

          <h1 style={{color: 'white', fontFamily: 'Overpass Mono, monospace',fontSize: 50, letterSpacing:'-3px', textAlign: 'left', margin: 0, paddingLeft: 10}}> ANOTOKI </h1>
      
          <div style={{paddingLeft: 10}}>
          <textbody style={{color: 'white', fontFamily: 'Avenir', fontSize: 18, textAlign: 'center', marginBottom: 0}}> 
          A CRUD timeline web application. Users can search, upload and tag images to the site which is then displayed similarly to a museum exhibit.
          </textbody>
          </div>
          
          <div style={{display: 'flex', flexDirection: 'row', paddingLeft: 10}}>

          <h5 style={built}> Node.js </h5>
          <h5 style={built}> Express </h5>
          <h5 style={built}> MySQL </h5>
          <h5 style={built}> Firebase </h5>
      
          </div>

          <div style={{height: 390, width: 700, objectFit: 'cover'}}>

          <video style={VideoStyle} loop autoPlay muted>
          <source src={this.state.videoURL} type="video/mp4" />
          Your browser does not support the video tag.
          </video>


          </div>

          <div style={{display: 'flex', flexDirection: 'row', paddingTop: 10, margin: '0 auto', width: 150}}>
          <a href="https://github.com/tomkim825/Project2" target="_blank" rel="noopener noreferrer"  >
          <img 
          src={require('../images/github.png')}
          style={{width:65, height: 65, paddingTop: 2, paddingRight: 25}}
          alt="github"
          />
          </a>
      
          <a href="https://project-2-crud-app.herokuapp.com/blog" target="_blank" rel="noopener noreferrer"  >
          <img 
          src={require('../images/demo.png')}
          style={{width:70, height: 70, paddingTop: 2}}
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

export default Projects2

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

// <div style={{objectFit: 'cover'}}>



// </div>
