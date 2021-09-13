const mongoose = require("mongoose");
const config = require('../config');

const connectDb = () => {
    return mongoose.connect(config.db.connString, {useNewUrlParser: true, useUnifiedTopology: true});
};

module.exports = connectDb;
