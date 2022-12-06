import axios from 'axios'

const register = async( userData) => {
    const res = await axios.post("http://localhost:5000/api/users/register", userData)

    if(res.data){
        sessionStorage.setItem('user', JSON.stringify(res.data.token))

    }

    return res.data
}

const login = async( userData) => {
    const res = await axios.post("http://localhost:5000/api/users/login", userData)

    if(res.data){
        sessionStorage.setItem('user', JSON.stringify(res.data.token))

    }

    return res.data
}

const getInfo = async (token) => {
    const config = {
        headers: {
            Authorization:`Bearer ${token}`
        },
    }

    const res = await axios.get("http://localhost:5000/api/users/user", config)
    return res.data
}

const logout = () => {
    sessionStorage.removeItem('user')
}

const authService = {
    register,
    logout,
    getInfo,
    login
}

export default authService