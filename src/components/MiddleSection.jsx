import React from 'react';
import {ReactComponent as Location} from '../statics/location.svg';
import {ReactComponent as Mail} from '../statics/mail1.svg';
import Name from '../statics/name.svg';
import Group from '../statics/group.svg';
import Graduation from '../statics/graduation2.svg';
import ROKA from '../images/roka.png';

const MiddleSection = () => {
  return (
    <div className="middleSections">
      <div id="profile" style={{height: 500}}>
        <h1>PROFILE</h1>
        <div>
          <ul>
            <li style={{verticalAlign:"center"}}>
              <img src={Name} style={{float:'left'}} width="33px" alt="name"></img>
              <span style={{fontSize:20,marginLeft:"1%"}}>이승형</span>
            </li>
            <li style={{verticalAlign:"center"}}>
              <Location style={{float:'left'}} width="32px" height="30px"></Location>
              <span style={{fontSize:20,marginLeft:"1%"}}>인천광역시, 대한민국 (South Korea)</span>
            </li>
            <li style={{verticalAlign:"center"}}>
              <Mail style={{float:'left'}} width="35px" height="30px"></Mail>
              <span style={{fontSize:20,marginLeft:"1%"}}><a href="mailto:a42873410@gmail.com">a42873410@gmail.com</a></span>
            </li>
            <li style={{verticalAlign:"center"}}>
              <img src={Group} style={{float:'left'}} width="36px" height="33px" alt="group"></img>
              <span style={{fontSize:20,marginLeft:"1%"}}><a href="http://catsecurity.net">CAT-Security</a> 소속</span>
            </li>
            <li style={{verticalAlign:"center",marginBottom:"10px"}}>
              <img src={ROKA} style={{float:'left',marginLeft:'5px'}} width="28px" height="28px" alt="group"></img>
              <span style={{fontSize:20,marginLeft:"1%"}}>대한민국 육군(ROKA) 병장 만기전역</span>
            </li>
            <li>
              <span style={{fontSize:15,marginLeft:"1%",fontWeight:'bold',fontStyle:'italic'}}>정보보호병(2020.01~2021.07)</span>
            </li>
          </ul>
        </div>
      </div>
      <div id="education" style={{height: 500}}>
        <h1>Education</h1>
        <div>
          <ul>
            <li style={{verticalAlign:"center",marginBottom:"10px"}}>
              <img src={Graduation} style={{float:'left'}} width="30px" alt="graduation"></img>
              <span style={{fontSize:20,marginLeft:"1%"}}>초등학교 졸업</span>
            </li>
            <li>
              <span style={{fontSize:15,marginLeft:"1%",fontWeight:'bold',fontStyle:'italic'}}>인천 정각초등학교(2006~2011)</span>
            </li>
            <li style={{verticalAlign:"center",marginBottom:"10px"}}>
              <img src={Graduation} style={{float:'left'}} width="30px" alt="graduation"></img>
              <span style={{fontSize:20,marginLeft:"1%"}}>중학교 졸업</span>
            </li>
            <li>
              <span style={{fontSize:15,marginLeft:"1%",fontWeight:'bold',fontStyle:'italic'}}>인천 구월중학교(2012~2014)</span>
            </li>
            <li style={{verticalAlign:"center",marginBottom:"10px"}}>
              <img src={Graduation} style={{float:'left'}} width="30px" alt="graduation"></img>
              <span style={{fontSize:20,marginLeft:"1%"}}>고등학교 졸업</span>
            </li>
            <li>
              <span style={{fontSize:15,marginLeft:"1%",fontWeight:'bold',fontStyle:'italic'}}>인천 인제고등학교(2015~2017)</span>
            </li>
            <li style={{verticalAlign:"center",marginBottom:"10px"}}>
              <img src={Graduation} style={{float:'left'}} width="30px" alt="graduation"></img>
              <span style={{fontSize:20,marginLeft:"1%"}}>대학교 재학</span>
            </li>
            <li>
              <span style={{fontSize:15,marginLeft:"1%",fontWeight:'bold',fontStyle:'italic'}}>가톨릭대학교 컴퓨터정보공학부(2018~)</span>
            </li>
          </ul>
        </div>
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