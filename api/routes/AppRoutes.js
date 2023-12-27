// import express from "express";
const express = require("express");
const LanguageController = require("../controllers/LanguageController");
//extract routing from express
const AppRouter = express.Router();

AppRouter.get("/", LanguageController.getHomePage);

AppRouter.get("/english", LanguageController.getEnglish);

AppRouter.get("/french", LanguageController.getFrench);

AppRouter.get("/japaneese", LanguageController.getJapaneese);

AppRouter.get("/spanish", LanguageController.getSpanish);

// export
// es5 format

module.exports = AppRouter;


