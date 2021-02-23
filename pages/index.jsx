import React, { useRef,useEffect } from "react";
import {gsap,TweenMax} from 'gsap';

const Loader = () => {
  
  const best=useRef(null);
  const tl=gsap.timeline();

  useEffect(()=>{
    tl.from(best.current.children[0].children, {duration:1, y: 800,opacity:0.5});
    tl.to(best.current.children[0].children,{duration:2, opacity:1,stagger:0.2});
  }) // fromTo(target, duration, {fromVars}, {toVars})

  return (
    <div>
      <div ref={best} id="title">
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
  </div>
  );
}

export default Loader;