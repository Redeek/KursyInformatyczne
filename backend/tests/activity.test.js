const mongoose = require("mongoose");
const request = require("supertest");
require("dotenv").config();
const app = require("../server");
const connectDB = require('../config/db');
const Tutorial = require("../models/tutorialModel");
const supertest = require("supertest");

// beforeEach(async () => {
//     connectDB()
// })

afterEach(async () =>{
    mongoose.connection.close()
})




test('GET/tutorial', async () => {
    const tutorial = await Tutorial.create({
        user: mongoose.Types.ObjectId("123123123121"),
        title: "test1",
        cardDescription: "krótki opis",
        longDescription: "długi opis",
        language: "java",
        isActive: true
    })

    // await supertest(app)
    //         .post('api/tutorials')
    //         .send(tutorial)
    //         .expect(201)
    const tutorials = await Tutorial.find({})
    expect(tutorials[tutorials.length-1].title).toBe("test1")


})