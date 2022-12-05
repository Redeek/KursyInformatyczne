import React from 'react'
import Accordion from 'react-bootstrap/Accordion'

function ChapterCollapse({tutorial, index}) {
  return (
    <>
    <Accordion defaultActiveKey={1}>
        <Accordion.Item eventKey={index}  style={{border: "3px"}}>
            <Accordion.Header> <h5>{tutorial.titleChapter} </h5></Accordion.Header>
            <Accordion.Body> {tutorial.textChapter}</Accordion.Body> 
        </Accordion.Item>    
    </Accordion>  
    </>
  )
}

export default ChapterCollapse