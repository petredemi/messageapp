const { Router } = require("express");
const controllerMessage = require("../controllers/controllerMessage");
const routerMessage = Router();


routerMessage.get('/', controllerMessage.messageListGet)
routerMessage.get ('/new', controllerMessage.newMessageGet)
routerMessage.post('/new', controllerMessage.newMessagePost)
routerMessage.get ('/:messageId', controllerMessage.getMessageGet)
routerMessage.post('/:id/delete', controllerMessage.deleteMessagePost)

module.exports = routerMessage