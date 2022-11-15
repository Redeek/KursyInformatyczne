
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'

function Dashboard() {
  
  const navigate = useNavigate()
  const {user} = useSelector((state)=>state.auth)

  useEffect(() => {
    if(!user){
      navigate("/")
    }
    
    
  },[user,navigate])
  

  return (<>
    {user? <div >User: {user.name} </div> : <div>Dashboard</div>}
     
    </>)
}

export default Dashboard