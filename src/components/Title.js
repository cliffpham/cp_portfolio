import React, {Component} from 'react';
import Logo from '../images/mylogo.png';

class Title extends Component {
  render() {
    return (
    <div style={style}>

    <h1 style={{fontFamily: 'Overpass Mono, monospace',fontSize: 50, letterSpacing:'-3px', textAlign: 'center', margin: 0, position: 'absolute', bottom: '10%', left: '38%'}}> WELCOME </h1>
    </div>
    
    )
  }
}

export default Title

const style = {
  backgroundImage: `url(${Logo})`, 
  backgroundPosition: 'center', 
  backgroundSize: 'cover', 
  height: 700,
  position: 'relative',
  width: 700,
  paddingTop: '10%', 
  left: '55%', 
  transform: 'translateX(-50%)'
}