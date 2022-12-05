import React from 'react'
import {useParams} from 'react-router-dom'
import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTutorial, reset} from '../features/tutorials/tutorialSlice'
import {FadeLoader} from 'react-spinners'
import ChapterCollapse from '../components/ChapterCollapse'
import Accordion from 'react-bootstrap/Accordion'

function TutorialDetails() {
    //Zwraca klucz-wartosc z linku
    const {id} = useParams()

    const dispatch = useDispatch() 
    const {selectedTutorial, isError, isLoading, message} = useSelector((state) => state.tutorials)

    useEffect(()=>{
        if(isError){
          console.log(message)
        }

        dispatch(getTutorial(id))
        return () => { 
          dispatch(reset())
        }  
      
      },[isError, message, dispatch, id])

      if(isLoading){
        return <div className={"spinner"}><FadeLoader color="#36d7b7" /></div>
      }


  return (<>
    <div>TutorialDetails</div>
    <div>
      <section className="container">
        <div className="header">
          { <h3>{selectedTutorial.title}</h3> }
        </div>
        <div className="">
          <h5>{selectedTutorial.description}</h5>
        </div>
        {selectedTutorial.chapterArray?.length > 0 ? 
              (<>
              <div className='row d-flex align-items-center justify-content-center' >
                <div className="accordion" id="accordionDetails">
                      {  
                      selectedTutorial.chapterArray.map((tutorial, index)=>(
                        //<ChapterCollapse tutorial={tutorial} id={index}/>
                        <Accordion>
                            <Accordion.Item eventKey={index} >
                                <Accordion.Header> <h5>{tutorial.titleChapter} </h5></Accordion.Header>
                                <Accordion.Body> {tutorial.textChapter}</Accordion.Body> 
                            </Accordion.Item>    
                        </Accordion> 
                        // <div className="card" id={tutorial._id} >
                        //   <div className="card-header">
                        //       <h2 className='mb-0'>
                        //         <button className="btn btn-link" type='button' data-toggle="collapse"  data-target={'#'+index} aria-expanded="true" aria-controls={index} >
                        //           {tutorial.titleChapter}
                        //         </button>
                        //       </h2>
                        //   </div>

                        //   <div className="collapse show" id={"body"+index} data-parent='#accordionDetails'>
                        //     <div className="card-body">
                        //       {tutorial.textChapter}
                        //     </div>
                        //   </div>
                        // </div>
                        ))}
                
                </div>
              </div>
              </>) : (<><h1>There is no chapters</h1></>)}
      </section>
    </div>
    </>)
}

export default TutorialDetails