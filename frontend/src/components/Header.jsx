import React from 'react'
import {FaSignInAlt, FaUser} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)

    const onLogout = () =>{
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

  return (
    <header className='header m-2 no-link-style'>
        <div className='d-flex flex-row ' >
            <Link to='/' style={{textDecoration: 'none', fontSize:'2rem'}} >ITutorial</Link>
        </div>
        <div className='d-flex row-reverse '>
            {user? (<>
                    <div className='m-3 align-items-center mt-4' >
                        <Link to='/dashboard' style={{textDecoration: 'none', fontSize:'1.3rem'}}>
                            <FaUser /> Dashboard
                        </Link>
                    </div>
                    <div className="vr" />
                    <div className='m-3 align-items-center' >
                        <button className="button" onClick={onLogout}>Logout</button>
                    </div>
                </>) : (<>
                <div className='m-3'>
                    <Link to='/login' style={{textDecoration: 'none'}}>
                        <FaSignInAlt /> Login
                    </Link>
                </div>
                <div className="vr" />
                <div className='m-3'>
                    <Link to='/register' style={{textDecoration: 'none'}}>
                        <FaUser /> Register
                    </Link>
                </div></>)}
            
        </div>
    </header>
  )
}

export default Header