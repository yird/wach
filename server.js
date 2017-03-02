
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
app.use(bodyParser.json());
app.use(session({
    secret: 'wach-c873-app-a4f8071f',
    resave: true,
    saveUninitialized: false
}));

app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname, 'index.html'));
})

app.get('/profile', function(req, res){
    if (req.session.userId){
        res.sendFile(path.resolve(__dirname, 'index.html'));
    } else {
        res.send('nope');
    }
})

app.post('/api/getuser', function(req, res){
    User.findById(req.session.userId)
    .exec(function(error, user){
            var userInfo = {
                name: user.name,
                email: user.email
            }
            res.send(userInfo);
    })
})

//logout
app.post('/api/logout', function(req, res){
    req.session.destroy();
})

//login
app.post('/api/login', function(req, res){
    if(req.body.email && req.body.password){
        User.authenticate(req.body.email, req.body.password, function(error, user){
            if (error || !user){
                res.status(404)
                .send('Not Found')
            } else {
                req.session.userId = user._id;
                res.status(200)
                .send('Log');
            }
        })
    }else { // something was left empty
        return 0;
    }
})

app.post('/api/islogged', function(req, res){

    if (req.session.userId){
        res.send(true);
    } else {
        res.send(false);
    }

});

//signup
app.post('/api/signup', function(req, res){

    if (req.body.name &&
        req.body.email &&
        req.body.password &&
        req.body.confirmPassword
       ){
            if (req.body.password !== req.body.confirmPassword){
                res.send('passwords did not match')
            } else{ // everything is confirmed
                
                var userData = {
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                }
                 // insert new users data into database.  
                User.create(userData, function(error, user){
                    if (error){
                        console.log(error)
                        res.send(false)
                    } else {
                        req.session.userId = user._id;
                        res.status(200)
                        .send('Log');
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