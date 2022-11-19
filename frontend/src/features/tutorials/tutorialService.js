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


const tutorialService = {
    createTutorial,
    getTutorials,
}

export default tutorialService