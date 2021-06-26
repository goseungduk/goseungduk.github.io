import React from 'react';
import {ReactComponent as Location} from '../statics/location.svg';

const MiddleSection = () => {
  return (
    <div className="middleSections">
      <div id="profile" style={{height: 500}}>
        <h1>PROFILE</h1>
        <div>
          <ul>
            <li style={{verticalAlign:"center"}}>
              <Location style={{float:'left'}} width="30px" height="30px"></Location>
              <span style={{fontSize:25,marginLeft:"1%"}}>인천광역시, 대한민국</span>
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