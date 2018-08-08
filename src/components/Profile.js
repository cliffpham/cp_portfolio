import React from "react";
import { CarouselProvider, Slider, Slide, ButtonNext, ButtonBack } from 'pure-react-carousel';
import Title from '../components/Title';
import Introduction from '../components/Introduction';
import ScrollLock from 'react-scrolllock';
import 'pure-react-carousel/dist/react-carousel.es.css';


export default class Profile extends React.Component {
  render() {

    return (
        <div style={{height: 700, width: "80%"}}>
        <CarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={200}
        totalSlides={2}
      
        >
       <ButtonNext style={{position: 'fixed', top: 400, right: '3%', borderWidth: 0, backgroundColor: '#FFF', outline: 'none'}}> <img style={{width: '50px', height: '50px'}}src={require('../images/arrowRight.png')} alt="Next"/> </ButtonNext>
       <ButtonBack style={{position: 'fixed', top: 400, left: '2%', borderWidth: 0, backgroundColor: '#FFF', outline: 'none'}}> <img style={{width: '50px', height: '50px'}}src={require('../images/arrowLeft.png')} alt="Back"/> </ButtonBack>
      
      <Slider>
      <Slide index={0}><Title /></Slide>
      <Slide index={1}><Introduction /></Slide>
      </Slider>

      </CarouselProvider>
      <ScrollLock />
      </div>
    );
  }
}