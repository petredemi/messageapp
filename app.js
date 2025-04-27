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
    id: 0,
    text: "Hi there!",
    user: "Amando",
    added: added
  },
  {
    id: 1,
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

app.get("/", (req, res,) => {
  res.render('index', {title: 'mini messageboard', messages: messages});
  });
  
app.get("/new", (req, res,) => {
      res.render("form");
  });

app.post("/new", (req, res) => {
  if(req.body.messagetext != '' && req.body.messageuser){
    messages.push({id: req.body.id, text: req.body.messagetext, user: req.body.messageuser, added: added});
  }
    res.redirect("/")
  })
  async function bbb(idd){
    return messages.find((message) => message.id === idd)
  }
  
async function aaa(req, res){
    let {messageId} = req.params;
    let message = await bbb(Number(messageId));
    console.log(typeof message)
    console.log(message)
    res.render('user', {title: 'users', user: message.user,
      text: message.text, added: message.added

    });
  }

  app.get("/:messageId", aaa)

// app.get("/:messageId", (req, res) =>{
//   const { messageId } = req.params;
//   let message = bbb(Number(messageId))
//   res.render('user', {title: 'users', messnr: messageId, message: message.user});
// });
  
//app.get("/:authorId", (req, res) => {
  //const { authorId } = req.params;
 // res.send(`Author ID: ${authorId}`);
//});
app.use((req, res, next) => {
  throw new Error("OH NO!");
  // or next(new Error("OH NO!"));
});

app.use((err, req, res, next) => {
  console.error(err);
  // You will see an OH NO! in the page, with a status code of 500 that can be seen in the network tab of the dev tools
  res.status(500).send(err.message);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`messageapp ${PORT}!`);
  
});
