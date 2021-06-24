
import React, { Component } from 'react';
import {Element} from 'react-scroll';

export default class MiddleSection extends Component {
    render() {
        return (
            <div class="middleSections">
              <Element id="profile" style={{height: 500}}>
                <h1>This is Home section</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
              </Element>
              <Element name="projects" style={{height: 500}}>
                <h1>This is About section</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
              </Element>
              <Element name="awards" style={{height: 500}}>
                <h1>This is Contact section</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
              </Element>
            </div>
        )
    }
}