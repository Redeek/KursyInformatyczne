const mongoose = require("mongoose")
const app = require("../app");
const request = require("supertest")

 beforeEach(async () => {
    await mongoose.connect('mongodb://localhost:27017/tests',{useNewUrlParser: true})
 })

 afterEach(async () =>{
    await mongoose.connection.dropDatabase()
    await mongoose.connection.close()
 })

describe('Error login, user doesnt exists', () => {
    it('returns status 400, user doesnt exists', async () => {
        const data = {
            email: 'email.red@vp.pl', 
            password: 'secret'
        }
        const res = await request(app).post('/api/users/login').send(data)

        expect(res.status).toEqual(400)
    })

})

describe('successful register new user', () => {
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





