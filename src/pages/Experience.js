import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { KeyboardArrowDown } from '@mui/icons-material';


function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="black">
        <VerticalTimelineElement
          date="2018 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<KeyboardArrowDown />}
        >
          <h3 className="vertical-timeline-element-title">
            SRV Boys Higher Secondary School<br></br>Namakkal
          </h3>
          <p>SSLC - 92.2%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<KeyboardArrowDown />}

        >
          <h3 className="vertical-timeline-element-title">
          SRV Boys Higher Secondary School<br></br>Namakkal

          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            
          </h4>

          <p> HSC - 92.59%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2025"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<KeyboardArrowDown />}

        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Engineering (ECE)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            CGPA - 8.53
          </h4>
          <p>KONGU ENGINEERING COLLEGE - ERODE</p>
        </VerticalTimelineElement>

      
      </VerticalTimeline>
    </div>
  );
}

export default Experience;