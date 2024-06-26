const mongoose = require('mongoose');

const url = "mongodb+srv://harshitagautam773:2003sneha@cluster0.9oxcakt.mongodb.net/myDb?retryWrites=true&w=majority&appName=Cluster0"

// asynchronous function
mongoose.connect(url)
.then((result) => { 
    console.log('database connected');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;
