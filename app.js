const express = require("express");
const app = express();
const path = require("node:path");
const { Router } = require("express");
const router = Router();
//const newRouter = require("./routes/newRouter.js");
//const indexRouter = require("./routes/indexRouter.js");
const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
let d = new Date()
let added = d.getHours() + ':' + d.getMinutes() + '   ' + d.getDate() + '.' + month[d.getMonth()] + '.' + d.getFullYear()
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: added
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: added
  }
];

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

//app.use("/new", newRouter)
//app.use("/", indexRouter);

app.get("/", (req, res,) => {
  res.render('index', {title: 'mini messageboard', messages: messages});
  });
  
app.get("/new", (req, res,) => {
      res.render("form");
  });

app.post("/new", (req, res) => {
  if(req.body.messagetext != '' && req.body.messageuser){
    messages.push({text: req.body.messagetext, user: req.body.messageuser, added: added});
  }
    res.redirect("/")
  })


app.get("/:authorId", (req, res) => {
  const { authorId } = req.params;
  res.send(`Author ID: ${authorId}`);
});

app.use((req, res, next) => {
  throw new Error("OH NO!");
  // or next(new Error("OH NO!"));
});

app.use((err, req, res, next) => {
  console.error(err);
  // You will see an OH NO! in the page, with a status code of 500 that can be seen in the network tab of the dev tools
  res.status(500).send(err.message);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`messageapp ${PORT}!`);
  
});
