var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    mylist: {
        type: Array
    },
    loved: {
        type: Array
    },
    watched: {
        type: Array
    }
});

// unhashes password when user attempts to login
UserSchema.statics.authenticate = function(email, password, callback){
    User.findOne({email:email})
        .exec(function(error, user){
            if(error){
                return callback(error)
            } else if(!user){
                var err = new Error('User not found.')
                return callback(err)
            }

            bcrypt.compare(password, user.password, function(error, result){
                if (result === true){
                    return callback(null, user);
                } else {
                    return callback()
                }
            })
        })
};

// hashes password using bcrypt for better security
UserSchema.pre('save', function(next){
    var user = this;
    bcrypt.hash(user.password, 10, function(err, hash){
        if (err){
            return next(err);
        }
        user.password = hash;
        next();
    })
});

var User = mongoose.model('User', UserSchema)
module.exports = User;
