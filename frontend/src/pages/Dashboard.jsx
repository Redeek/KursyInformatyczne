
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import TutorialForm from '../components/TutorialForm'
import UserInfo from '../components/UserInfo'
import TutorialsDisplay from '../components/TutorialsDisplay'
import { useDispatch, useSelector } from 'react-redux'
import { getInfo } from '../features/auth/authSlice'
import {FadeLoader} from 'react-spinners'


function Dashboard() {
  
  const [status, setStatus] = useState("showTutorials")
  const navigate = useNavigate()
  const {user} = useSelector((state)=>state.auth)

  const dispatch = useDispatch() 
  const {userInfo, isError, isLoading, message} = useSelector((state) => state.auth)

  useEffect(()=>{
      if(isError){
        console.log(message)
      }

      dispatch(getInfo())

      if(!user){
        navigate("/")
      }
    
    },[isError, message, dispatch, user, navigate])

    if(isLoading){
      return <div className={"spinner"}><FadeLoader color="#36d7b7" /></div>
    }
  

  return (<>
    {user? (
    <div>
      <div className='container'>
        <div className="row align-items-center align-items-center mt-5">
          <div className="col-4 mt-3 mb-3">
            <div className="d-flex" style={{float:"right"}}>
              <button type="button" className={status === "createTutorial"? "btn btn-outline-light active" :"btn btn-outline-light"} onClick={()=>{setStatus("createTutorial")}}  >Create Tutorial</button>
            </div>
          </div>
          
          <div className="col-4 mt-3 mb-3" >
            <div>
              <button type="button" className={status === "showTutorials"? "btn btn-outline-light active" :"btn btn-outline-light"} onClick={()=>{setStatus("showTutorials")}}>Show Tutorials</button>
            </div>
          </div>
          <div className="col-4 mt-3 mb-3">
            <div className="d-flex" style={{float:"left"}}>
              <button type="button" className={status === "showUser"? "btn btn-outline-light active" :"btn btn-outline-light"} onClick={()=>{setStatus("showUser")}}>Check info about account</button>
            </div>
          </div>
        </div>
      </div>
      <div className="header"></div>
    { status === "createTutorial" ? <TutorialForm /> : <></>}
    { status === "showTutorials" ? <TutorialsDisplay /> : <></>}
    { status === "showUser" ? <UserInfo Info={userInfo}/> : <></>}
    </div>) : 
    (<div>
      You have no permission to this site
    </div>)}
     
    </>)
}

export default Dashboard