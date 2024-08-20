const mongoose = require('mongoose')
const connection_string = process.env.MONGODB_URL


const Db = () => {
    mongoose.connect(connection_string, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("database connected sucessfully"))
    .catch((err) => console.log("data base connection error",err)) 
}

module.exports = Db