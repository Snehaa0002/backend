const mongoose = require('mongoose');

const url = "mongodb://sneha862:gautam2003@<hostname>/?ssl=true&replicaSet=atlas-pmmede-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"

// asynchronous function
mongoose.connect(url)
.then((result) => { 
    console.log('connect to db');
})
.catch((err) => {
    console.log(err);
});

console.log('something else');
