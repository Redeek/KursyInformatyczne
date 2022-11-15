import axios from 'axios'

const register = async( userData) => {
    const res = await axios.post("http://localhost:5000/api/users/register", userData)

    if(res.data){
        sessionStorage.setItem('user', JSON.stringify(res.data))

    }

    return res.data
}

const login = async( userData) => {
    const res = await axios.post("http://localhost:5000/api/users/login", userData)

    if(res.data){
        sessionStorage.setItem('user', JSON.stringify(res.data))

    }

    return res.data
}

const logout = () => {
    sessionStorage.removeItem('user')
}

const authService = {
    register,
    logout,
    login
}

export default authService