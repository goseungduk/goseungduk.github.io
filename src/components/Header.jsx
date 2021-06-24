import React, {useRef, useEffect} from 'react';
import {Link} from 'react-scroll';
import {gsap} from 'gsap';


const Header = () => {
    const header=useRef(null);
    const gsap_timeline=gsap.timeline();

    useEffect(()=>{
        gsap_timeline.from(header.current,{duration:5,opacity:0})
        gsap_timeline.to(header.current,{duration:1,opacity:1});
    })
    return (
        <div id="header-wrapper">
            <ul id="header" ref={header} style={{display:'flex',listStyle:'none',justifyContent:'space-around'}}>
                <li><Link to="profile" smooth={true} duration={500}>Profile</Link></li>
                <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                <li><Link to="awards" mooth={true} duration={500}>Awards and Honors</Link></li>
            </ul>
        </div>    
    )
}

export default Header;