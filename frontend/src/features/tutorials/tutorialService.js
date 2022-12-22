import axios from 'axios'

const createTutorial = async ( tutorialData, token) => {
    const config = {
        headers: {
            Authorization:`Bearer ${token}`
        },
    }

    const res = await axios.post("http://localhost:5000/api/tutorials", tutorialData, config)
    return res.data
}

const getTutorials = async () => {
    const res = await axios.get("http://localhost:5000/api/tutorials")
    return res.data
}

const getTutorial = async(id) =>{
    const res = await axios.get(`http://localhost:5000/api/tutorials/${id}`)
    return res.data
}

const deleteTutorial = async(id, token) => {
    const config = {
        headers: {
            Authorization:`Bearer ${token}`
        },
    }
    const res = await axios.delete(`http://localhost:5000/api/tutorials/${id}`, config)
    return res.data
}

const userTutorials = async(token) => {
    const config = {
        headers: {
            Authorization:`Bearer ${token}`
        },
    }

    const res = await axios.get('http://localhost:5000/api/tutorials/usertutorial', config)

    return res.data
}

const addChapter = async(formData, token) => {
    const config = {
        headers: {
            Authorization:`Bearer ${token}`
        },
    }

    const res = await axios.post('http://localhost:5000/api/chapters',formData, config)

    return res.data
}

const deleteChapter = async(idData, tutorial, token) => {
    const config = {
        headers: {
            Authorization:`Bearer ${token}`
        },
    }
    const res = await axios.delete(`http://localhost:5000/api/chapters/${tutorial}/${idData}`, config)

    return res.data
}

const tutorialService = {
    createTutorial,
    getTutorials,
    getTutorial,
    deleteTutorial,
    userTutorials,
    addChapter,
    deleteChapter,
}

export default tutorialService