const pool = require("./pool");
const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
let d = new Date()
let added = d.getHours() + ':' + d.getMinutes() + ' ' + ' ' + d.getDate() + ' ' + month[d.getMonth() - 1] + ' ' + d.getFullYear()

exports.getMessages = async () => {
  const { rows } = await pool.query("SELECT * FROM messages");
  return Object.values(rows)
}
exports.getMessage = async (mId) => {
  const {rows} = await pool.query(`SELECT * FROM messages WHERE id =${mId};`)
//  console.log(rows)
   return rows;
}
exports.newMessage = async (messageuser, messagetext) => {
   pool.query("INSERT INTO messages (messageuser, messagetext, added) VALUES($1, $2, $3)", [messageuser, messagetext, added]);
   }
exports.deleteMessage = async (id) =>{
  await pool.query(`DELETE FROM messages WHERE id = ${id}`)
  //let {persons} =  await pool.query("SELECT * FROM messages");
  //console.log(persons)
}
//async function ww(){
//    let {users} = await pool.query("SELECT * FROM messages");
//    console.log(users)
//   // pool.query("INSERT INTO messages (messageuser, messagetext, added) VALUES($1, $2, $3)", ['fddf', 'frere', added]);
//}
//ww()