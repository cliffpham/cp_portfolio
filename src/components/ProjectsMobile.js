import React from "react";
import 'pure-react-carousel/dist/react-carousel.es.css';


export default class ProjectsMobile extends React.Component {
  render() {

    return (
      <div style={styles.wrapper}>
        <div style={styles.main}>
        <div style={styles.projects}>
        <h1 style={{color: 'white', fontFamily: 'Overpass Mono, monospace',fontSize: 30, letterSpacing:'-3px', textAlign: 'center', paddingTop: 10, paddingBottom: 5, paddingLeft: 5, margin: 0}}> MEISHI </h1>
      
        <div style={{paddingLeft: 10}}>
        <textbody style={{color: 'white', fontFamily: 'Avenir', fontSize: 14, paddingRight: 5}}> 
        A mobile business card app built on React-Native, Firebase, and Expo. Users are able to create and share their digital business cards using thier phones as a QR code scanner through this app
        </textbody>
        </div>

        <div style={{marginLeft: '33.3%', marginRight: '33.3%', paddingTop: '2%'}}>
        <a href="https://github.com/cliffpham/meishi-mvp" target="_blank" rel="noopener noreferrer">
        <img 
        src={require('../images/github.png')}
        style={{width:40, height: 40, paddingBottom: '3%'}}
        alt="github"
        />
        </a>
  
        <a href="https://www.youtube.com/watch?v=bNAFRY-tw0E&t=178s" target="_blank" rel="noopener noreferrer">
        <img 
        src={require('../images/play.png')}
        style={{width:50, height: 50, paddingLeft: '5%'}}
        alt="github"
        />
        </a>
        </div>

        </div>
        <div style={styles.projects2}>
        
        
        <h1 style={{color: 'white', fontFamily: 'Overpass Mono, monospace',fontSize: 30, letterSpacing:'-3px', textAlign: 'center', paddingTop: 10, paddingBottom: 5, paddingLeft: 5, margin: 0}}> ANOTOKI </h1>
      
        <div style={{paddingLeft: 10}}>
        <textbody style={{color: 'white', fontFamily: 'Avenir', fontSize: 14, textAlign: 'left'}}> 
        A CRUD timeline web application. The project was built using NodeJS, Express, Sequelize and MySQL. Users can search, upload and tag images to the site which is then displayed similarly to a museum exhibit
        </textbody>
        </div>

        <div style={{marginLeft: '33.3%', marginRight: '33.3%'}}>
        <a href="https://github.com/tomkim825/Project2" target="_blank" rel="noopener noreferrer">
        <img 
        src={require('../images/github.png')}
        style={{width:40, height: 40, paddingTop: 20, paddingBottom: 10}}
        alt="github"
        />
        </a>
  
        </div>
        </div>

        <div style={styles.projects3}>
        <h1 style={{color: 'white', fontFamily: 'Overpass Mono, monospace',fontSize: 30, letterSpacing:'-3px', textAlign: 'center', paddingTop: 10, paddingBottom: 5, paddingLeft: 5, margin: 0}}> GIVE A DOG A BONE </h1>
      
        <div style={{paddingLeft: 10}}>
        <textbody style={{color: 'white', fontFamily: 'Avenir', fontSize: 14, textAlign: 'left'}}> 
        A web application to help rescue dogs find loving homes using a similar UI as dating apps, such as Tinder. The app was built using HTML CSS JQuery Javascript Firebase AJAX Bootstrap
        </textbody>
        </div>

        <div style={{marginLeft: '33.3%', marginRight: '33.3%'}}>
        <a href="https://github.com/balbano80/Doggie-Tinder" target="_blank" rel="noopener noreferrer">
        <img 
        src={require('../images/github.png')}
        style={{width:40, height: 40, paddingTop: 20, paddingBottom: 10}}
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


const styles = {
    wrapper: {
      height: '100%', 
      width: '100%', 
    },
    main: {
      margin: 'auto', 
      display: 'flex', 
      flexDirection: "column", 
      height: '100%'
  
    },
    projects: {
      width: '100%',
      height: '31.3%',
      backgroundColor: '#4BA9A1',

    },
    projects2: {
      width: '100%',
      height: '32.3%',
      backgroundColor: '#BF8FCC',

    },
    projects3: {
        width: '100%',
        height: '32.3%',
        backgroundColor: '#FFAE42',
  
      },
}