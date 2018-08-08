import React, {Component} from 'react';
import Background from '../images/notebook.jpg'




class Introduction extends Component {
  render() {
    return (

      <div style={{height: 700, width: 700, position: "relative", paddingTop: '8%', left: '55%', transform: 'translateX(-50%)'}}>
    
      <div style={{backgroundColor: '#F3F5F9', display: 'flex', flexDirection: "row", width: 700}}>

        <div style={{backgroundColor: '#F3F5F9', width: 700, height: 700, alignContent: 'stretch', padding: 0}}>
          

          


          <div style={bubble}>
          <h1 style={{fontFamily: 'Homemade Apple, cursive', paddingTop: 10, margin: 0}}> Hey There! </h1>
          <textbody style={{fontFamily: 'Homemade Apple, cursive', fontSize: 22, textAlign: 'center', lineSpacing: 2}}> 
          My name is Cliff Pham and I'm passionate about translating real-world experiences into code and creating applications that are both beautifully designed and helpful to users
          </textbody>

          </div>

          <img
          src={require('../images/prof2.png')}
          alt="profile"
          style={{height:380, position: 'absolute', left: 0, bottom: 0}}

          />

          
          <div style={postit}>
          <h4> My Professional Skills Include: </h4>
          <ul>
          <li> Web Development </li>
          <li> Mobile Development </li>
          <li> Business Japanese </li>
          </ul>
          </div>

 
      
      
         


        </div>
        
       
      </div>

  
    </div>   

    
    )
  }
}

export default Introduction


// <div style={{backgroundImage: `url(${Background})`, backgroundSize: 'cover', height: 700,}}>
// <div style={{backgroundColor: 'rgba(0,0,0,.5)', height: 175, paddingLeft: 45, paddingRight: 45}}>
// <h1 style={{color: 'white', fontFamily: 'Overpass Mono, monospace',fontSize: 50, letterSpacing:'-3px', textAlign: 'center', paddingTop: 10, paddingBottom: 8, margin: 0}}> WELCOME </h1>
// <textbody style={{color: 'white', fontFamily: 'Avenir', fontSize: 18, paddingLeft: 5, textAlign: 'center', margin: 0}}>Hey there. Thanks for visiting my page! My name is Cliff Pham and I'm a computer whisperer ...
// I mean, I'm a developer.  Check out some of my coding projects and get to learn more about me. </textbody>
// </div>
// </div>

// <div style={{paddingLeft: 10}}>
// <textbody style={{color: 'white', fontFamily: 'Avenir', fontSize: 18, textAlign: 'center', marginBottom: 0}}> 
// Hey there. Thanks for visiting my page! My name is Cliff Pham and I'm a computer whisperer ...I mean, I'm a developer.  Check out some of my coding projects and get to learn more about me..
// </textbody>
// </div>

const bubble = {
  position: 'absolute',
  left: "2%",
  bottom:410,
	backgroundImage: `url(${Background})`,
  borderRadius: '.4em',
  width: 650,
  height: 280,
  paddingLeft: 15
}

const postit= {
  position: 'absolute',
  right: "8%",
  bottom: "18%",
	backgroundColor: '#FE4E8E',
  width: 250,
  height: 250,


}