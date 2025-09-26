//const messageStorage = require('../storage/messageStorage')
const {body, validationResult} = require('express-validator')
const db = require('../db/queries');

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 and 1000 characters.";
const lengthName = "must be beteew 1 and 20 characters";

const validateMessage = [
    body("messageuser").trim()
      .isAlpha().withMessage(`Name: ${alphaErr}`)
      .isLength({min:1, max:20}).withMessage((`Name: ${lengthName}`)),
    body("messagetext").trim()
      .isLength({ min: 1, max: 1000 }).withMessage(`Message: ${lengthErr}`),
  ];
exports.messageListGet = async (req, res) => {
   await res.render('index', {
        rows: await db.getMessages(),
    })
}
exports.getMessageGet = async (req, res) => {
  //  const {messageId} = req.params;
   // let idx = Number(messageId)
    //let obj = messageStorage.getMessage(messageId)
    await   res.render('user', {
            rows: await db.getMessage(req.params.messageId)
    })
}
exports.newMessageGet = async (req, res) => {
    await res.render('form');
}

exports.newMessagePost =  [
    validateMessage,
    async (req, res) =>{
        const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        let d = new Date()
        let added = d.getHours() + ':' + d.getMinutes() + ' ' + ' ' + d.getDate() + ' ' + month[d.getMonth() - 1] + ' ' + d.getFullYear()

        let {messageuser} = await req.body;
        let {messagetext} = await req.body;

        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400). render('index', {
                errors: errors.array(),
            })
        }
    //messageStorage.newMessage({ messageuser, messagetext})
    await db.newMessage(messageuser, messagetext, added)
    await res.redirect('/#bottom')
}]
exports.deleteMessagePost = async (req, res) => {
    //messageStorage.deleteMessage(req.params.id)
    await db.deleteMessage(req.params.id)
    console.log(req.params)
    res.redirect('/')
}




//exports.getUsernames = async function getUsernames(req, res) {
//      const usernames = await db.getAllUsernames();
//      console.log("Usernames: ", usernames);
//      res.send("Usernames: " + usernames.map(user => user.username).join(", "));
//    }
//exports.createUsernameGet = async function createUsernameGet(req, res) {
//  // render the form
//}
//exports.createUsernameGet = async function createUsernamePost(req, res) {
//        const { username } = req.body;
//        await db.insertUsername(username);
//        res.redirect("/");
//}
//module.exports = {
  //getUsernames,
 // createUsernameGet,
 // createUsernamePost
//};