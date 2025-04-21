const express = require("express");
const { Router } = require("express");
const newRouter = Router();
const path = require("node:path");


newRouter.use(express.urlencoded({ extended: true }));

newRouter.get("/", (req, res,) => {
        res.render("form");
});

module.exports = newRouter;
