require('dotenv').config()
const mongoose = require('mongoose');


async function connect() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/SmartHome_dev");
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failure!!!');
    }
}

module.exports = { connect }