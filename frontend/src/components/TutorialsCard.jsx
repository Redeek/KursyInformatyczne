import React from 'react'
import Java from '../Javas.jpg'

function TutorialsCard({tutorial}) { 

  return (
    <div className='card mt-3' style={{width:"18rem", minHeight:"600px", maxHeight:"600px"}} >
      <img src={Java} alt="img" className="card-img-top m-2" style={{width:"18rem" , maxHeight:"50rem", maxWidth:"17rem"}}/>
        <div className="card-body">
          <h4 className='card-title'>{tutorial.title}</h4>
          <p className="card-text mt-4">{tutorial.description}</p>
          <div className='display-flex d-flex align-items-center justify-content-center ' style={{position: "absolute", bottom:"5%"}}>
            <a className="btn btn-primary m-4" href={'/details/'+tutorial._id} style={{maxWidth:"5rem", minWidth:"5rem"}}> details</a>
            <button className="btn btn-secondary m-3" style={{maxWidth:"5rem", minWidth:"5rem"}} > Add</button>
          </div>
        </div>
    </div>
  )
}

export default TutorialsCard