import React from 'react';
import {ReactComponent as Location} from '../statics/location.svg';
import {ReactComponent as Mail} from '../statics/mail1.svg';
import Name from '../statics/name.svg';
import Group from '../statics/group.svg';

const MiddleSection = () => {
  return (
    <div className="middleSections">
      <div id="profile" style={{height: 500}}>
        <h1>PROFILE</h1>
        <div>
          <ul>
            <li style={{verticalAlign:"center"}}>
              <img src={Name} style={{float:'left'}} width="33px" alt="name"></img>
              <span style={{fontSize:25,marginLeft:"1%"}}>이승형</span>
            </li>
            <li style={{verticalAlign:"center"}}>
              <Location style={{float:'left'}} width="32px" height="30px"></Location>
              <span style={{fontSize:25,marginLeft:"1%"}}>인천광역시, 대한민국 (South Korea)</span>
            </li>
            <li style={{verticalAlign:"center"}}>
              <Mail style={{float:'left'}} width="35px" height="30px"></Mail>
              <span style={{fontSize:25,marginLeft:"1%"}}><a href="mailto:a42873410@gmail.com">a42873410@gmail.com</a></span>
            </li>
            <li style={{verticalAlign:"center"}}>
              <img src={Group} style={{float:'left'}} width="36px" alt="name"></img>
              <span style={{fontSize:25,marginLeft:"1%"}}><a href="http://catsecurity.net">CAT-Security</a>    임원</span>
            </li>
          </ul>
        </div>
      </div>
      <div id="education" style={{height: 500}}>
        <h1>Education</h1>
      </div>
      <div id="projects" style={{height: 500}}>
        <h1>Projects</h1>
      </div>
      <div id="awards" style={{height: 500}}>
        <h1>Awards</h1>
      </div>
    </div>
  )
}

export default MiddleSection;