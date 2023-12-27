const english = require("../models/english.json");
const french = require("../models/french.json");
const japaneese = require("../models/japaneese.json");
const spanish = require("../models/spanish.json");

module.exports.getHomePage = (request, response) => {
    response.send({
        status: true,
        message: "Welcome to Language Learning api",
    });
};

module.exports.getEnglish = (request, response) => {
    response.send({
        status: true,
        message: english,
    });
};

module.exports.getFrench = (request, response) => {
    response.send({
        status: true,
        message: french,
    });
};

module.exports.getJapaneese = (request, response) => {
    response.send({
        status: true,
        message: japaneese,
    });
};

module.exports.getSpanish = (request, response) => {
    response.send({
        status: true,
        message: spanish,
    });
};

