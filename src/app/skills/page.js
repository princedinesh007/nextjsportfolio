import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from 'react-bootstrap/Card';


function Skills() {
  
  return (
    <>
     <div>
      <h3 style={{fontWeight:600}}>Skills and  Expertise</h3>
      <h6 >Front End</h6>
      <div style={{display:"flex",flexDirection:"column", justifyContent:"space-between"}}>
        <div style={{display:"flex",margin:"10px"}}>
        <div style={{width:"25vw"}}>
        <Card style={{margin:"10px"}}>
        <Card body>
         <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
         <p>Angular</p>
         <p>90%</p>
         </div>
          <ProgressBar animated variant="info" now={90} label="90%" />
        </Card >
      </Card>
      </div>
      <div style={{width:"25vw"}}>
      <Card style={{margin:"10px"}}>
        <Card body>
         <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
         <p>React</p>
         <p>80%</p>
         </div>
          <ProgressBar animated variant="info" now={80} label="80%" />
        </Card >
      </Card>
      </div>
        </div>
        <div style={{display:"flex",margin:"10px"}}>
        <div style={{width:"25vw"}}>
      <Card style={{margin:"10px"}}>
        <Card body>
         <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
         <p>Next JS</p>
         <p>75%</p>
         </div>
          <ProgressBar animated variant="info" now={75} label="75%" />
        </Card >
      </Card>
      </div>
      <div style={{width:"25vw"}}>
      <Card style={{margin:"10px"}}>
        <Card body>
         <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
         <p>Ionic</p>
         <p>70%</p>
         </div>
          <ProgressBar animated variant="info" now={70} label="70%" />
        </Card >
      </Card>
      </div>
      
        </div>
        <div style={{display:"flex",margin:"10px"}}>
        <div style={{width:"25vw"}}>
      <Card style={{margin:"10px"}}>
        <Card body>
         <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
         <p>Chrome Extensions</p>
         <p>60%</p>
         </div>
          <ProgressBar animated variant="info" now={60} label="60%" />
        </Card >
      </Card>
      </div>      
        </div>
      </div>
    </div>
    </>
   
  )
}

export default Skills