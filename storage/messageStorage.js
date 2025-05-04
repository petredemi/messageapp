const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
let d = new Date()
let added = d.getHours() + ':' + d.getMinutes() + '   ' + d.getDate() + '.' + month[d.getMonth()] + '.' + d.getFullYear()

class messageStorage {
    constructor() {
        this.storage = {}
        this.id = 0;
    }
    newMessage({messageuser, messagetext}){
        const id = this.id
        this.storage[id] = {id, messageuser, messagetext, added}
        this.id++
    }
    getMessages(){
        return Object.values(this.storage)
    }
    getMessage(id){
        return this.storage[id]
    }
    deleteMessage(id){
        delete this.storage[id]
    }
}

module.exports = new messageStorage()

/*
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
*/