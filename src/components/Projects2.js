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
    <div style={{backgroundColor: '#BF8FCC', height: 700, width: 711.09, position: "absolute", top: "5%", left: "21%"}}>
    
      <div style={{backgroundColor: '#BF8FCC', display: 'flex', flexDirection: "row", width: 700}}>

        <div style={{backgroundColor: '#BF8FCC', width: 700, height: 150, alignContent: 'stretch', padding: 10}}>

          <h1 style={{color: 'white', fontFamily: 'Overpass Mono, monospace',fontSize: 50, letterSpacing:'-3px', textAlign: 'left', margin: 0}}> ANOTOKI </h1>
      
          <textbody style={{color: 'white', fontFamily: 'Avenir', fontSize: 18, textAlign: 'left', marginBottom: 0}}> 
          A CRUD timeline web application. Users can search, upload and tag images to the site which is then displayed similarly to a museum exhibit.
          </textbody>
          
          <div style={{display: 'flex', flexDirection: 'row'}}>

          <h5 style={built}> Node.js </h5>
          <h5 style={built}> Express </h5>
          <h5 style={built}> MySQL </h5>
          <h5 style={built}> Firebase </h5>
      
          </div>

      

        </div>

    </div>

    <div style={{objectFit: 'cover', marginTop: 40}}>
    <video style={VideoStyle} loop autoPlay muted>
    <source src={this.state.videoURL} type="video/mp4" />
    Your browser does not support the video tag.
    </video>



    </div>

    <div style={{display: 'flex', flexDirection: 'row', paddingLeft: 280, paddingRight: 280}}>

    
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
    );
    
  }

}

export default Projects2

const VideoStyle = {
    width: 711,
    height: 400,
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
