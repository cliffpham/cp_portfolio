import React, {Component} from 'react';
import Fill from '../images/contact.jpg'




class Contact extends Component {
  render() {
    return (
    <div style={styles.wrapper}>

    <div style={styles.main}>

      <div style={styles.info}>

      <h1 style={styles.header}> CONTACT </h1>

      <a href="https://www.linkedin.com/in/cliff-pham-63467473" target="_blank" rel="noopener noreferrer">
      <img 
      src={require('../images/linkedin.png')}
      style={styles.icons}
      alt="linkedin"
      />
      </a>

      <a href="https://github.com/cliffpham" target="_blank" rel="noopener noreferrer">
      <img 
      src={require('../images/github.png')}
      style={styles.icons}
      alt="github"
      />
      </a>
    
      <a href="mailto:cliffpham@gmail.com">
      <img 
      src={require('../images/email.png')}
      style={styles.icons}
      alt="email"
      />
      </a>
 
      </div>

      <div style={{backgroundImage: `url(${Fill})`, width: 500, height: 700, backgroundPosition: 'center'}}>
      </div>

    </div>
 
    </div>
    
    )
  }
}

export default Contact

const styles = {
  wrapper: {
    height: 700, 
    width: 700, 
    position: "relative", 
    paddingTop: '3%', 
    left: '45%', 
    transform: 'translateX(-50%)'
   } ,
  main: {
    margin: 'auto', 
    display: 'flex', 
    flexDirection: "row", 
    height: 700

  },
  info: {
    backgroundColor: '#FF4E20', 
    width: 250, 
    height: 700, 
    flexDirection:"column"

  },
  header: {
    color: 'white', 
    fontFamily: 'Overpass Mono, monospace',
    fontSize: 50, 
    letterSpacing:'-3px', 
    textAlign: 'right', 
    paddingTop: 10, 
    paddingRight: 20, 
    margin: 0

  },
  icons: {
    width:75, 
    height: 75, 
    marginTop: 75, 
    marginLeft: 75
  },

}