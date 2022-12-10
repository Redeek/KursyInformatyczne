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


const assignService = {
    getTutorials,
    addAssignTutorial,
    
}

export default assignService