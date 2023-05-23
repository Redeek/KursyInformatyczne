import React from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTutorial, deleteTutorial, deleteChapter, reset} from '../features/tutorials/tutorialSlice'
import {FadeLoader} from 'react-spinners'
import { getInfo } from '../features/auth/authSlice'
import Accordion from 'react-bootstrap/Accordion'
import AddChapter from '../components/AddChapter'
import {toast} from 'react-toastify'
import ShowVideo from '../components/ShowVideo'
import { getAssignTutorial, setEndChapter, unsetEndChapter } from '../features/assignTutorials/assignSlice'


function TutorialDetails() {
    const {id} = useParams()
    //handle open/close modal for create new chapter
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [link, setLink] = useState("")
    //handle open/close modal for show embed video
    const [showVideo, setShowVideo] = useState(false)
    const handleCloseVideo = () => setShowVideo(false);
    const handleShowVideo = (link) => {
      setLink(link)
      setShowVideo(true);
    }

    const navigate = useNavigate()
    const dispatch = useDispatch() 
    const {selectedTutorial} = useSelector((state) => state.tutorials)
    const {user, userInfo} = useSelector((state) => state.auth)
    const {Tutorial, isError, isLoading, message} = useSelector((state) => state.tutorials)
    
    useEffect(()=>{
        if(isError){
          console.log(message)
        }

        dispatch(getTutorial(id))
        
        dispatch(getAssignTutorial(id))
        if(user){
          dispatch(getInfo())
          
        }
        
        return () => { 
          dispatch(reset())
        }  
      
      },[isError, message, id, user])

      if(isLoading){
        return <div className={"spinner"}><FadeLoader color="#36d7b7" /></div>
      }

      const deletetutorial = async() =>{
        dispatch(deleteTutorial(id))
        dispatch(reset())
        navigate('/').then(toast.success("Usunięto Chapter"))
        window.location.reload()
      } 

      const deletechapter = async (chapterId) => {
        dispatch(deleteChapter(chapterId))
        dispatch(getTutorial(id))
        if(isError.length === 0){
          toast.success("Usunięto Chapter")
        }else{
          toast.error(message)
        }
      } 

      const setchapterfinish = async (index) => {
        const data = {
          tutorialId: id,
          arr: index
        }
        dispatch(setEndChapter(data))
        window.location.reload()
      }

      const unsetchapterfinish = async (index) => {
        const data = {
          tutorialId: id,
          arr: index
        }
        dispatch(unsetEndChapter(data))
        window.location.reload()
      }

      if(selectedTutorial.message ){
        return <div>Tutorial doesn't exist</div>
      }
       

  return (<>
    <div>
      <section className="container">
        <div className="header">
          { <h3>{selectedTutorial.title}</h3> }
          {selectedTutorial?.user === userInfo?._id? (<div>
            <button className='btn btn-primary' onClick={()=>{handleShow()}}>Add chapter</button>
            <button className='btn btn-error' onClick={()=>{deletetutorial()}}>delete tutorial</button>
          </div>):(<></>)}
          
        </div>
        <div className="">
          <h5>Description:</h5><p>{selectedTutorial?.longDescription}</p>
        </div>
        {selectedTutorial.chapterArray?.length > 0 ? 
              (<>
              <div className='row d-flex align-items-center justify-content-center' >
                <div className="accordion" id="accordionDetails">
                      {selectedTutorial?.chapterArray.length > 0 ?   
                      selectedTutorial?.chapterArray.map((chapter, index)=>(
                          <Accordion key={chapter._id} id={chapter._id} >
                              <Accordion.Item eventKey={index} >
                                  <Accordion.Header> 
                                    <h5>{chapter.titleChapter} </h5> 
                                  </Accordion.Header>
                                  <Accordion.Body> 
                                  {chapter.isEnd? <>
                                    <button className="btn btn-info" style={{ zIndex:"2", position:"absolute", right:"45%" }} onClick={()=>{unsetchapterfinish( index)}}> Set chapter as unfinished </button>
                                    <h6 style={{marginTop:"50px"}}>Congratulation! You finished this chapter</h6>
                                    </> : (<></>)}
                                       
                                      
                                    <div className='row' style={chapter.isEnd?{filter: "blur(8px)", zIndex:"-1"}: {}}>
                                      <div className="col-11 "> {chapter.textChapter}</div>
                                      <div className="col-1 "> 
                                       { user? <button className='btn btn-info' onClick={()=>{setchapterfinish( index)}}>Finish</button>:<></> }
                                        
                                        {selectedTutorial?.user === userInfo?._id? (<div>
                                          <button className="btn btn-danger" onClick={() => {deletechapter(chapter._id)}}> delete </button>
                                          </div>):<></>
                                        }
                                      </div>
                                    </div>
 
                                    {chapter.youtubeLink?.length > 0 ? <button className='btn btn-primary' onClick={()=>{handleShowVideo(chapter.youtubeLink)}}>Show Video</button> : <></>}
                                    
                                  </Accordion.Body> 
                              </Accordion.Item>    
                          </Accordion>
                          ))
                      :
                      selectedTutorial.chapterArray.map((chapter, index)=>(
                        <Accordion key={chapter._id} id={chapter._id}>
                            <Accordion.Item eventKey={index} >
                                <Accordion.Header> 
                                  <h5>{chapter.titleChapter} </h5> 
                                </Accordion.Header>
                                <Accordion.Body> 
                                  <div className='row'>
                                    <div className="col-11 "> {chapter.textChapter}</div>
                                    <div className="col-1 "> 
                                    { 
                                                                     
                                    }
                                    <button className='btn btn-info' onClick={()=>{setchapterfinish( index)}}>Finished</button>
                                    {selectedTutorial?.user === userInfo?._id? (<div>
                                      <button className="btn" onClick={() => {deletechapter(chapter._id)}}> delete </button>
                                    </div>):(<></>)}
                                     
                                    </div>
                                  </div>
                                  {chapter.youtubeLink?.length > 0 ? <button className='btn btn-primary' onClick={()=>{handleShowVideo(chapter.youtubeLink)}}>Show Video</button> : <></>}
                                  
                                </Accordion.Body> 
                            </Accordion.Item>    
                        </Accordion>
                        )) 
                        
                      }
                
                </div>
              </div>
              </>) : (<><h1>There is no chapters</h1></>)}
      </section>
    </div>

    <AddChapter show={show} handleClose={handleClose} />
    <ShowVideo showVideo={showVideo} handleCloseVideo={handleCloseVideo} link={link}/>
    </>)
}

export default TutorialDetails