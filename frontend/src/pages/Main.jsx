import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {BounceLoader} from 'react-spinners'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

function Main() {
    
    const dispatch = useDispatch()

    //const {tutorials, isLoading, isSuccess, isError, message} = useSelector((state)=> state.tutorials)

    // useEffect(()=>{
    //     if(isError){
    //         toast.error(message)
    //     }

    //     dispatch(getTutorials())

    //     return ()=>{dispatch(reset())}

    // },[isError, message, dispatch])

    // if(isLoading){
    //     return <><div className={"spinner"}><BounceLoader color="#36d7b7" /></div></>
    // }
    
  return (
    <>
        <section className="heading">
            <p>all tutorials</p>
            <div className='tutorials'>
                
            <section className='content'>
             
            </section>
            </div>
        </section>
    </>
  )
}

export default Main