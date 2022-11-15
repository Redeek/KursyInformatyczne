import { useState, useEffect } from "react";
import { FaSignInAlt} from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

import {useSelector, useDispatch} from 'react-redux'
import {login, reset} from '../features/auth/authSlice'
import {BounceLoader} from 'react-spinners'

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const {email, password} = formData;
  const {user, isLoading, isError, isSuccess, message} = useSelector((state)=> state.auth )

  useEffect(()=>{
    if(isError){
        toast.error(message)
    }

    if(isSuccess || user){
        navigate('/')
    }

    dispatch(reset())
  },[user, isError, isSuccess, message, navigate, dispatch])

  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = {
        email,
        password
    }
    dispatch(login(formData))

  }

  const onChange = (e) => {
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  if(isLoading){
    return <BounceLoader color="#36d7b7" />
}

  return (
    <>
      <section className="heading">
        <div>
          <h2>
            <FaSignInAlt /> Login
          </h2>
        </div>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>

          <div className="form-group">
            <label> email</label>
            <input type="email" className="form-control" id="email" name="email" value={email} placeholder="enter your email" onChange={onChange} />
          </div>

          <div className="form-group">
            <label> password </label>
            <input type="password" className="form-control" id="password" name="password" value={password} placeholder="enter your password" onChange={onChange} />
          </div>

          <div className="form-group">
            <button className="btn-block btn" type="submit">Submit</button>
          </div>

        </form>
      </section>
    </>
  );
}

export default Login;
