import React, { useRef,useEffect } from "react";
import {gsap} from 'gsap';
import Header from './components/Header'
import MiddleSection from './components/MiddleSection'

const MainPage = () => {  
  const main_slogan=useRef(null);
  const gsap_timeline=gsap.timeline();
  
  useEffect(()=>{
    
    gsap_timeline.from(main_slogan.current.children[0].children, {duration:1, y: 800,opacity:0.5});
    gsap_timeline.to(main_slogan.current.children[0].children,{duration:2, opacity:1,stagger:0.2});
  }) // fromTo(target, duration, {fromVars}, {toVars})

  return (
    <div>
      <Header></Header>
      <div ref={main_slogan} id="title">
        <h1>
          <span>E</span>
          <span>F</span>
          <span>F</span>
          <span>O</span>
          <span>R</span>
          <span>T</span>
          <span>_</span>
          <span>H</span>
          <span>A</span>
          <span>C</span>
          <span>K</span>
          <span>E</span>
          <span>R</span>
        </h1>
      </div>
      <MiddleSection></MiddleSection>
  </div>
  );
}

export default MainPage;