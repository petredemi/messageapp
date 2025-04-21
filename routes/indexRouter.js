const { Router } = require("express");
const indexRouter = Router();
const path = require("node:path");

//const users = ["Rose", "Cakdgfere", "Biff"];
//const links = [
//  { href: "/", text: "Home" },
//  { href: "books", text: "About" },
//];
const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];
  
indexRouter.get("/", (req, res,) => {
res.render('index', {title: 'mini messageboard', messages: messages});
});
indexRouter.get("/new", (req, res,) => {
    res.render("form");
});




module.exports = indexRouter;
