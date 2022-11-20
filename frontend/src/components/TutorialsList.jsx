import React from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import Java from '../Javas.jpg'

function TutorialsList({tutorial}) {


  const detalis = () => {

  }

  return (
    <div className='card mt-3' style={{width:"18rem", maxHeight:"600px"}} >
      <img src={Java} alt="img" className="card-img-top" style={{width:"18rem", maxHeight:"50rem"}}/>
        <div className="card-body">
          <h3 className='card-title'>{tutorial.title}</h3>
          <p className="card-text">{tutorial.description}</p>
          <button className="btn btn-primary" onClick={detalis(tutorial._id)}> details</button>
          <button className="btn btn-secondary"> Add</button>
        </div>
    </div>
  )
}

export default TutorialsList