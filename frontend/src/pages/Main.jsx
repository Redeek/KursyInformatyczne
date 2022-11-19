import React from 'react'
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TutorialsList from '../components/TutorialsList'
import { getTutorials , reset} from '../features/tutorials/tutorialSlice'

function Main() {

  const dispatch = useDispatch() 
  const {tutorials, isError, isSuccess, isLoading, message} = useSelector((state) => state.tutorials)
    
useEffect(()=>{

  if(isError){
    console.log(message)
  }

  dispatch(getTutorials())
  //return () => { dispatch(reset()) }  
},[isError, message, dispatch])
    
  return (
    <>
        <section className="heading">
            <p>all tutorials</p>
            <section className="content">
              {tutorials.length > 0 ? (<>
              <div>
                {tutorials.map((tutorial)=>(
                  <TutorialsList key={tutorial._id} tutorial={tutorial}/>
                ))}
              </div>
              
              
              </>) : (<><h1>There is no tutorials</h1></>)}
            </section>
            
        </section>
    </>
  )
}

export default Main