const validator = require('validator');

let User = function(data) {
    this.data = data;
    this.errors = [];
}

User.prototype.validate = function() {
    if (this.data.username == '') {
        this.errors.push('You must provide a username.')
    }

    if (this.data.user != '' && !validator.isAlphanumeric(this.data.username)) {
        this.errors.push('Username can only contail letters and numbers.');
    }

    if (!validator.isEmail(this.data.email)) {
        this.errors.push('You must provide a email address.')
    }

    if (this.data.password == '') {
        this.errors.push('You must provide a password.')
    }

    if (this.data.password.length > 0 && this.data.password.length < 12) {
       this.errors.push('Password must be at least 12 characters.'); 
    }

    if (this.data.password.length > 100) {
        this.errors.push('Password cannot exceed 100 characters.');
    }

    if (this.data.username.length > 0 && this.data.username.length < 3) {
        this.errors.push('Username must be at least 3 characters.'); 
     }
 
    if (this.data.username.length > 30) {
        this.errors.push('Username cannot exceed 30 characters.');
    }
}

User.prototype.register = function(req, res) {
    // Step #1: Validate user data
    this.validate();

    // Step #2: Only if there are no validation errors
    // them save the user data into a database
}

module.exports = User;