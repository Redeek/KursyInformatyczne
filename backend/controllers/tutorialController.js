const getTutorials = (req, res) => {
   
    res.status(200).json({message: 'show tutorials'})
}

const setTutorials = (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('please add a text field')
    }

    res.status(200).json({message: 'post tutorials'})
}

module.exports = {getTutorials, setTutorials}