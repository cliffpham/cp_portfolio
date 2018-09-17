import React, { Component } from "react";

class Introduction extends Component {
  render() {
    return (
      <div
        style={{
          height: 700,
          width: 700,
          position: "relative",
          paddingTop: "3%",
          left: "55%",
          transform: "translateX(-50%)"
        }}
      >
        <div
          style={{
            backgroundColor: "black",
            margin: "auto",
            display: "flex",
            height: 700
          }}
        >
          <div
            style={{
              backgroundColor: "#4BA9A1",
              width: 280,
              height: 700
            }}
          >
            <img
              src={require("../images/profile.jpg")}
              alt="profile"
              style={{
                height: 200,
                borderRadius: "50%",
                paddingTop: 10,
                paddingLeft: 25
              }}
            />

            <div style={bubble}>
              <h1
                style={{
                  fontFamily: "Homemade Apple, cursive",
                  margin: 0
                }}
              >
                Hey There!
              </h1>
              <textbody
                style={{
                  fontFamily: "Homemade Apple, cursive",
                  fontSize: 17
                }}
              >
                My name is Cliff Pham. I'm a bilingual fullstack developer and
                I'm passionate about translating real-world experiences into
                code and creating applications that are both beautifully
                designed and helpful to users
              </textbody>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#1C252E",
              width: 420,
              height: 700,
              textAlign: "center"
            }}
          >
            <h1
              style={{
                color: "white",
                fontFamily: "Overpass Mono, monospace",
                fontSize: 50,
                letterSpacing: "-3px",
                textAlign: "center",
                paddingTop: 10,
                paddingBottom: 15,
                margin: 0
              }}
            >
              QUICK FACTS
            </h1>

            <div>
              <img
                src={require("../images/creative.png")}
                alt="profile"
                style={{
                  height: 130
                }}
              />
              <h3 style={{ color: "#FFF", margin: 0 }}> Creative Thinker </h3>
            </div>

            <div>
              <img
                src={require("../images/aesthetic.png")}
                alt="profile"
                style={{
                  height: 150
                }}
              />
              <h3 style={{ color: "#FFF", margin: 0 }}> Detail Oriented </h3>
            </div>

            <div style={{ paddingTop: 10 }}>
              <img
                src={require("../images/communicate.png")}
                alt="profile"
                style={{
                  height: 150
                }}
              />
              <h3 style={{ color: "#FFF", margin: 0 }}>
                {" "}
                Effective Communicator{" "}
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Introduction;

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
  // backgroundImage: `url(${Background})`,
  width: 240,
  height: 300,
  paddingLeft: 20
};

// <img
// src={require('../images/prof2.png')}
// alt="profile"
// style={{height:380, position: 'absolute', left: 0, bottom: 0}}

// />

// <div style={postit}>
// <h4 style={{paddingLeft: 5}}> My Technical Skills Include: </h4>
// <ul>
// <li> Javascript </li>
// <li> React </li>
// <li> React Native </li>
// <li> Node.js </li>
// <li> Express </li>
// <li> MongoDB </li>
// <li> MySQL </li>
// <li> Business Japanese </li>
// </ul>

// </div>

// <div
// style={{
//   backgroundColor: "#F3F5F9",
//   display: "flex",
//   flexDirection: "row",
//   width: 700
// }}
// >
// <div
//   style={{
//     backgroundColor: "#abcae3",
//     width: 700,
//     height: 700,
//     alignContent: "stretch",
//     padding: 0
//   }}
// >

// </div>
// </div>
