import React, {useRef, useEffect} from 'react';
import {gsap} from 'gsap';


const Header = () => {
    let sections=document.getElementsByClassName(("menu"));
    const header=useRef(null);
    const gsap_timeline=gsap.timeline();
    const scroll_spying=()=>{
        for(let i=0;i<sections.length;i++){
            sections[i].addEventListener('click',(e)=>{
                let target=document.getElementById(sections[i].getAttribute('data-scroll'));
                let startTime=performance.now();
                const animation=()=>{
                    const now=(performance.now()-startTime) / time, // 지속적 증가
                    progress=transition(now);
                    if(1>now){
                        window.scrollTo(0,from+(target.offsetTop-from)*progress); // target.offsetTop 에 근사하는 스크롤
                        window.requestAnimationFrame(animation);
                    }else{
                        window.scrollTo(0,target.offsetTop);
                    }
                }
                const from=window.scrollY; // 현재 스크롤 Y축
                const time=500,
                transition=(number)=>{
                    return -(.5*(Math.cos(Math.PI*number)-1));
                }; // duration 조정 시, 수정항목
                animation();
            })
        }
    }
    useEffect(()=>{
        gsap_timeline.from(header.current,{duration:5,opacity:0})
        gsap_timeline.to(header.current,{duration:1,opacity:1});
        scroll_spying();
    })

    return (
        <div id="header-wrapper" className="header-wrapper">
            <ul id="header" ref={header}>
                <li>
                    <a data-scroll="profile" className="menu" href="#profile">
                        <span>Profile</span>
                    </a>
                </li>
                <li>
                    <a data-scroll="education" className="menu" href="#education">
                        <span>Education</span>
                    </a>
                </li>
                <li>
                    <a data-scroll="projects" className="menu" href="#projects">
                        <span>Projects</span>
                    </a>
                </li>
                <li>
                    <a data-scroll="awards" className="menu" href="#awards">
                        <span>Awards</span>
                    </a>
                </li>
            </ul>
        </div>    
    )
}

export default Header;