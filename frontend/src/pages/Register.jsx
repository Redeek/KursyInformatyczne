import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {register, reset} from '../features/auth/authSlice'
import {BounceLoader} from 'react-spinners'

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPasword: "",
  });

  const { name, surname, email, password,confirmPasword} = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isLoading, isError, isSuccess, message} = useSelector((state)=> state.auth )

  useEffect(()=>{
    if(isError){
        toast.error(message)
    }

    if(isSuccess || user){
        navigate('/')
    }

    dispatch(reset())

  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
        e.preventDefault()

    if(password !== confirmPasword){
            toast.error('Passwords are not the same')
        }else{
            const userData = {
                name,
                surname,
                email,
                password
            }
            console.log(userData)
            dispatch(register(userData))
        }
    }

    if(isLoading){
        return <BounceLoader color="#36d7b7" />
    }
  
  return (<>
      <section className="heading">
        <div>
          <h2>
            <FaUser /> Register
          </h2>
        </div>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label> name</label>
            <input type="text" className="form-control" id="name" name="name" value={name} placeholder="enter your name" onChange={onChange} />
          </div>

          <div className="form-group">
            <label> surname</label>
            <input type="text" className="form-control" id="surname" name="surname" value={surname} placeholder="enter your surname" onChange={onChange} />
          </div>

          <div className="form-group">
            <label> email</label>
            <input type="email" className="form-control" id="email" name="email" value={email} placeholder="enter your email" onChange={onChange} />
          </div>

          <div className="form-group">
            <label> password </label>
            <input type="password" className="form-control" id="password" name="password" value={password} placeholder="enter your password" onChange={onChange} />
          </div>

          <div className="form-group">
            <label> password </label>
            <input type="password" className="form-control" id="confirmPasword" name="confirmPasword" value={confirmPasword} placeholder="confirm your password" onChange={onChange} />
          </div>

          <div className="form-group">
            <button className="btn-block button btn-group-vertical" type="submit">Submit</button>
          </div>

        </form>
      </section>
    </>
  );
}

export default Register;
