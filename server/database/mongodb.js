const mongoose = require("mongoose");
require("colors");

const connectDB = async () => {
    try {
        const username = process.env.USER;
        const password = process.env.PASSWORD;
        const cluster = process.env.CLUSTER;
        const dbname = process.env.DBNAME;
        const url = `mongodb+srv://${username}:${password}@${cluster}.fbo3j.mongodb.net/${dbname}?retryWrites=true&w=majority`;
        const conn = await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        const host = conn.connection.host;
        console.log(`Communicating with database successfully done with host ${host}`.bgGreen.white);
    } catch (error) {
        console.log(`Error Communicating with the database: ${error.message}`.bgRed.white);
    }
}

module.exports = connectDB;
