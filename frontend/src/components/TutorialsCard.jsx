import React from 'react'
import Java from '../Javas.jpg'
import { useEffect} from 'react'
import {assignTutorialToAccount} from '../features/assignTutorials/assignSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

function TutorialsCard({tutorial}) { 

  const dispatch = useDispatch() 
  const {assignTutorials, isError, message} = useSelector((state) => state.assigntutorials)
  
  useEffect(()=>{
    
    if(isError){
      console.log(message)
    }
 
  },[isError, message])

  const check = async (tutorial) => {

    if(assignTutorials?.assignTutorials?.length > 0){
       assignTutorials.assignTutorials.some(e => e.tutorialId === tutorial._id)? toast.error("Już posiadasz ten tutorial") : handleAddTutorial(tutorial._id)
    }else{
      handleAddTutorial(tutorial._id)
    }
    
  }

  const handleAddTutorial = (tutorialId) => {
    
    const data = {
      id: tutorialId
    }
    dispatch(assignTutorialToAccount(data))
    toast.info("Przypisano tutorial do konta")
  }

  return (
    <div className='card mt-3' style={{width:"18rem", minHeight:"600px", maxHeight:"600px"}} >
      <img src={Java} alt="img" className="card-img-top m-2" style={{width:"18rem" , maxHeight:"50rem", maxWidth:"17rem"}}/>
        <div className="card-body">
          <h4 className='card-title'>{tutorial.title}</h4>
          <p className="card-text mt-4">{tutorial.cardDescription}</p>
          <div className='display-flex d-flex align-items-center justify-content-center ' style={{position: "absolute", bottom:"5%"}}>
          <a className="btn btn-primary m-4" href={'/details/'+tutorial._id} style={{maxWidth:"5rem", minWidth:"5rem"}}> details</a>
          { <button className="btn btn-secondary m-3" style={{maxWidth:"5rem", minWidth:"5rem"}} onClick={()=>{check(tutorial)}} > Add</button>  }
           
            
          </div>
        </div>
    </div>
  )
}

export default TutorialsCard