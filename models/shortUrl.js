const mongoose = require("mongoose");
const {nanoid} = require("nanoid");
const shortUrlSchema = new mongoose.Schema({
    full: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
        default: () => nanoid() //This could be replace by our own generator
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = mongoose.model("ShortUrl", shortUrlSchema);