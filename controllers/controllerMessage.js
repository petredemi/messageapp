const messageStorage = require('../storage/messageStorage')
const {body, validationResult} = require('express-validator')

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 and 10 characters.";

const validateMessage = [
    body("messageuser").trim()
      .isAlpha().withMessage(`User name: ${alphaErr}`),
   //   .isLength({ min: 1, max: 10 }).withMessage(`Message: ${lengthErr}`),
    body("messagetext").trim()
     // .isAlpha().withMessage(`User name: ${alphaErr}`)
      .isLength({ min: 1, max: 10 }).withMessage(`Message: ${lengthErr}`),
  ];



exports.messageListGet = (req, res) =>{
    res.render('index', {
        messages: messageStorage.getMessages()
    })
}
exports.newMessageGet = (req, res) => {
    res.render('form')
}
exports.getMessageGet = (req, res) => {
    let {messageId} = req.params
    let obj = messageStorage.getMessage(messageId)
    res.render('user', {
        user: obj.messageuser,
        text: obj.messagetext,
        date: obj.added
    })
}
exports.newMessagePost = [  
    validateMessage,
    (req, res) =>{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400). render('form', {
                errors: errors.array(),
            })
        }

    const {messageuser, messagetext} = req.body;
    messageStorage.newMessage({ messageuser, messagetext})
    res.redirect('/')
}
]
exports.deleteMessagePost = (req, res) => {
    messageStorage.deleteMessage(req.params.id)
    res.redirect('/')
}