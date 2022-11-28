import React from 'react'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

function TutorialDetails() {
    //Zwraca klucz-wartosc z linku
    const {id} = useParams()

    const dispatch = useDispatch() 
    const {tutorials, isError, isSuccess, isLoading, message} = useSelector((state) => state.tutorials)

    useEffect(()=>{

        if(isError){
          console.log(message)
        }
      
      },[isError, message])

  return (<>
    <div>TutorialDetails</div>
    <div>
        {id}
    </div>
    </>)
}

export default TutorialDetails