
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

function Dashboard() {
  
  const navigate = useNavigate()
  let user = JSON.parse(sessionStorage.getItem("user"))
  const [userData, setUserData] = useState('')
  const [error, setError] = useState("")

  useEffect(() => {
    if(!user){
      navigate("/login")
    }
    
    
  },[])


  

  return (<>
    {user? <div >User: {userData.name} </div> : <div>Dashboard</div>}
     
    </>)
}

export default Dashboard