const mongoose = require ("mongoose");

const host = "localhost";
const port = "27017";
const db = "petfinder";

exports.mongoConnect = () => {
    const mongoStringConnection = `mongodb://${host}:${port}/${db}`; 
    // ALT 96 COMILLAS INVERTIDAS
    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind(console, " Mongodb connection error "))
}