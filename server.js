
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const session = require('express-session')

const path = require('path');
const port = 8000;
const app = express();
var User = require('./models/user');

//mongodb connection
mongoose.connect('mongodb://localhost:27017/wachdb');
var db = mongoose.connection;

app.use(express.static(__dirname))

//sessions
app.use(session({
    secret: 'wach-c873-app-a4f8071f',
    resave: true,
    saveUninitialized: false
}));

app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname, 'index.html'));
})

app.use(bodyParser.json());
//login
app.post('/login', function(req, res){
    if(req.body.email && req.body.password){
        User.authenticate(req.body.email, req.body.password, function(error, user){
            if (error || !user){
                console.log('no user')
                return next(err)
            } else {
                req.session.userId = user._id;
                return 0;
            }
        })
    }else { // something was left empty
        return 'empty'
    }
})

//signup
app.post('/signup', function(req, res){

    if (req.body.name &&
        req.body.email &&
        req.body.password &&
        req.body.confirmPassword
       ){
            if (req.body.password !== req.body.confirmPassword){
                console.log('error 1')
                return error;
            } else{ // everything is confirmed
                
                var userData = {
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                }
                 // insert new users data into database.  
                User.create(userData, function(error, user){
                    if (error){
                        console.log('error4')
                        return(error)
                    } else {
                        console.log('noerror')
                    }
                });
            }


        } else { // something was left empty
            console.log('error 2');
            return 0;
        }


    })


app.listen(port);
console.log('Server started on port:' + port);