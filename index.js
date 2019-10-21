const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/doctorsDemoApp')

var { Doctor } = require('./model/doctor');

app.use(bodyParser.json());

app.get('/findDoctor/:lat/:long', function (req, res) {
    Doctor.find().where('location').within(
        {
            center: [req.params.lat, req.params.long],
            radius: .3
        }
    ).then(function (data) {
        res.json(data)
    }).catch(function (err) {
        res.json({
            message: "Something went wrong"
        })
    })
});

app.post('/createDoctor', function (req, res) {
    var doctor = new Doctor(req.body);

    doctor.save()
        .then(function (data) {
            res.status(200).json({
                message: "Saved"
            });
        })
        .catch(function (err) {
            res.status(500).json({
                message: "Not Saved"
            });
        })


});

app.listen(3000);

