import axios from "axios";

const getTutorials = async(token) =>{
    const config = {
        headers: {
            Authorization:`Bearer ${token}`
        },
    }

    const res = await axios.get("http://localhost:5000/api/assign", config)
    return res.data
}

const addAssignTutorial = async(tutorialId, token) =>{
    const config = {
        headers: {
            Authorization:`Bearer ${token}`
        },
    }

    const res = await axios.post("http://localhost:5000/api/assign", tutorialId, config)
    return res.data
}

const getTutorial = async(id, token) =>{
    const config = {
        headers: {
            Authorization:`Bearer ${token}`
        },
    }

    const res = await axios.get(`http://localhost:5000/api/assign/${id}`, config)
    return res.data
}

const setEndChapter = async(tutorial, token) =>{
    const config = {
        headers: {
            Authorization:`Bearer ${token}`
        },
    }
    console.log(tutorial)
    const res = await axios.put(`http://localhost:5000/api/assign/isEnd/${tutorial.tutorialId}`,tutorial, config)
    return res.data
}

const unsetEndChapter = async(tutorial, token) =>{
    const config = {
        headers: {
            Authorization:`Bearer ${token}`
        },
    }
    console.log(tutorial)
    const res = await axios.put(`http://localhost:5000/api/assign/isStart/${tutorial.tutorialId}`,tutorial, config)
    return res.data
}


const assignService = {
    getTutorials,
    addAssignTutorial,
    getTutorial,
    setEndChapter,
    unsetEndChapter
}

export default assignService