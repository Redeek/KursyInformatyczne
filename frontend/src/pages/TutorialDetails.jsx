import React from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTutorial, deleteTutorial, reset} from '../features/tutorials/tutorialSlice'
import {FadeLoader} from 'react-spinners'
import { getInfo } from '../features/auth/authSlice'
import Accordion from 'react-bootstrap/Accordion'

function TutorialDetails() {
    const {id} = useParams()

    const navigate = useNavigate()
    const dispatch = useDispatch() 
    const {selectedTutorial, isError, isLoading, message} = useSelector((state) => state.tutorials)
    const {userInfo} = useSelector((state) => state.auth)
    
    useEffect(()=>{
        if(isError){
          console.log(message)
        }
      
        dispatch(getInfo())
        dispatch(getTutorial(id))
        return () => { 
          dispatch(reset())
        }  
      
      },[isError, message, dispatch, id])

      if(isLoading){
        return <div className={"spinner"}><FadeLoader color="#36d7b7" /></div>
        
      }

      const addChapter = async() =>{
        console.log("add chapter")
      }


      const deletetutorial = async() =>{
        dispatch(deleteTutorial(id))
        dispatch(reset())
        navigate('/')
        window.location.reload()
      } 

      if(selectedTutorial===null ){
        return <div>Tutorial doesn't exist</div>
      }


  return (<>
    <div>TutorialDetails</div>
    <div>
      <section className="container">
        <div className="header">
          { <h3>{selectedTutorial.title}</h3> }
          {selectedTutorial?.user === userInfo?._id? (<div>
            <button className='btn btn-primary' onClick={()=>{addChapter()}}>Add chapter</button>
            <button className='btn btn-error' onClick={()=>{deletetutorial()}}>delete tutorial</button>
          </div>):(<></>)}
          
        </div>
        <div className="">
          <h5>{selectedTutorial?.description}</h5>
        </div>
        {selectedTutorial.chapterArray?.length > 0 ? 
              (<>
              <div className='row d-flex align-items-center justify-content-center' >
                <div className="accordion" id="accordionDetails">
                      {  
                      selectedTutorial.chapterArray.map((tutorial, index)=>(
                        <Accordion key={tutorial._id}>
                            <Accordion.Item eventKey={index} >
                                <Accordion.Header> <h5>{tutorial.titleChapter} </h5></Accordion.Header>
                                <Accordion.Body> {tutorial.textChapter}</Accordion.Body> 
                            </Accordion.Item>    
                        </Accordion>
                        ))}
                
                </div>
              </div>
              </>) : (<><h1>There is no chapters</h1></>)}
      </section>
    </div>
    </>)
}

export default TutorialDetails