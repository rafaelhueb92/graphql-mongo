const mongoose = require('mongoose')
module.exports = { Cat: mongoose.model("Cat", { name: String }) };
