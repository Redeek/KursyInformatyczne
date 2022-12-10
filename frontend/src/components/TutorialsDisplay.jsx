import React from 'react'
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAssignTutorials , reset} from '../features/assignTutorials/assignSlice'
import {FadeLoader} from 'react-spinners'
import Pagination from './Pagination'

function TutorialsDisplay() {

  const dispatch = useDispatch() 
  const {assigntutorials, isError, isLoading, message} = useSelector((state) => state.assigntutorials)

  useEffect(()=>{

    if(isError){
      console.log(message)
    }
  
    dispatch(getAssignTutorials())
  
    return () => { dispatch(reset()) }  
  },[isError, message, dispatch])

  if(isLoading){
    return <div className={"spinner"}><FadeLoader color="#36d7b7" /></div>
  }


  return (
    <div>TutorialsDisplay</div>
  )
}

export default TutorialsDisplay