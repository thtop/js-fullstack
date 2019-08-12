const mongodb = require('mongodb');

const connectionString = 'mongodb+srv://mSI:k7MjxYg6lpDvzXsO@cluster0-mlatc.mongodb.net/ComplexApp?retryWrites=true&w=majority';

mongodb.connect(connectionString, {useNewUrlParser: true}, function(err, client) {
    module.exports = client.db();
    const app = require('./app');
    app.listen(3000);
});