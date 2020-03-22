const mongoose = require('mongoose');

mongoose
    .connect(
        'mongodb+srv://emery:05xIIYLOc6UOjH9h@cluster0-l8vui.mongodb.net/ionote?retryWrites=true', {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'ionote'
        },
        function(err) {
            if (err) {
                return console.dir(err);
            }
        })