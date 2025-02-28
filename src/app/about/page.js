import React from "react";
import sytles from "./about.module.css";
import { Card } from "react-bootstrap";

function About() {
  return (
    <>
    <div className={sytles.container}>
    <h3>About Me</h3>
    <div className={sytles.container1}>
      <div  style={{margin:"10px"}}>
      <Card className={sytles.card_main} shadow-lg>
      <h5 className={sytles.subtitle}>As a frontend developer, I specialize in building user-friendly websites and applications using popular technologies like Angular, React, and Next.js. I focus on creating smooth, responsive designs that work seamlessly across all devices and browsers. My goal is to deliver clean, fast, and efficient web applications that provide great user experiences. 
        With my expertise in these frameworks, I strive to create applications that are both functional and easy to use</h5>
      
      </Card>
      </div>
        
       </div>
       <div className={sytles.container2} >
         <div style={{margin:"5px"}}>
          <Card className={sytles.card} shadow-lg>
            <h5 className={sytles.heading}>Education</h5>
            <p className={sytles.subheading}>Master of Engg</p>
            <p className={sytles.subtitle}>
              National College of Engg <br/>
              2012-2015
            </p>
           </Card>
         </div>
         <div style={{margin:"5px"}}>
         <Card className={sytles.card} shadow-lg>
            <h5 className={sytles.heading}>Experience</h5>
            <p className={sytles.subheading}>Front End Developer</p>
      
           </Card>
         </div>
       </div>
    </div>
    </>
    
  );
}

export default About;
