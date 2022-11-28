import React from 'react'
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TutorialsCard from '../components/TutorialsCard'
import { getTutorials , reset} from '../features/tutorials/tutorialSlice'
import {FadeLoader} from 'react-spinners'
import Pagination from '../components/Pagination'

function Main() {
  const dispatch = useDispatch() 
  const {tutorials, isError, isSuccess, isLoading, message} = useSelector((state) => state.tutorials)

  //pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [tutorialsPerPage, setTutorialsPerPage] = useState(12)

  const indexOfLastTutorial = currentPage * tutorialsPerPage
  const indexOfFirstTutorial = indexOfLastTutorial - tutorialsPerPage
  const currentTutorial = tutorials.slice(indexOfFirstTutorial, indexOfLastTutorial)

  //Set current Page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  
    
useEffect(()=>{

  if(isError){
    console.log(message)
  }

  dispatch(getTutorials())
  return () => { dispatch(reset()) }  
},[isError, message, dispatch])

if(isLoading){
  return <div className={"spinner"}><FadeLoader color="#36d7b7" /></div>
}
    
  return (
    <>
        <div className="container">
            <p>all tutorials</p>

           
              {tutorials.length > 0 ? 
              (<>
              <div className='row d-flex align-items-center justify-content-center' >
              
                {  
                  currentTutorial.map((tutorial, index)=>(
                        <div className='col-xs-1 m-3' key={index}>
                          <TutorialsCard key={tutorial._id} tutorial={tutorial}/>
                        </div>
                      )
                    )
                }
              
              </div>
              <div className='row d-flex align-items-center justify-content-center mb-3' >
                <Pagination TutorialsPerPage={tutorialsPerPage} totalTutorials={tutorials.length} paginate={paginate}/>
              </div>
              
              </>) : (<><h1>There is no tutorials</h1></>)}
            
            
        </div>
        
    </>
  )
}

export default Main