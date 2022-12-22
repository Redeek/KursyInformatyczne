const mongoose = require("mongoose")
const dotenv = require('dotenv').config()
const app = require("../app");
const request = require("supertest")

 beforeEach(async () => {
    await mongoose.connect('mongodb://localhost:27017/tests',{useNewUrlParser: true})
 })

 afterEach(async () =>{
    await mongoose.connection.dropDatabase()
    await mongoose.connection.close()
 })

describe('login', () => {
    it('returns status 400,user doesnt exists', async () => {
        const data = {
            email: 'email.red@vp.pl', 
            password: 'secret'
        }
        const res = await request(app).post('/api/users/login').send(data)

        expect(res.status).toEqual(400)
    })

})

describe('register', () => {
    it('returns status 201 if registered new user', async () => {
        const data = {
            name: 'Tom',
            surname: 'Pom',
            email: 'Tom@mail.com', 
            password: 'secret'
        }
        const res = await request(app).post('/api/users/register').send(data)

        expect(res.status).toEqual(201)
        expect(res.body.name).toEqual('Tom')
    })

})


// test('GET/tutorial', async () => {
//     const tutorial = await Tutorial.create({
//         user: mongoose.Types.ObjectId("123123123121"),
//         title: "test1",
//         cardDescription: "krótki opis",
//         longDescription: "długi opis",
//         language: "java",
//         isActive: true
//     })

//     // await supertest(app)
//     //         .post('api/tutorials')
//     //         .send(tutorial)
//     //         .expect(201)
//     const tutorials = await Tutorial.find({})
//     expect(tutorials[tutorials.length-1].title).toBe("test1")


//})