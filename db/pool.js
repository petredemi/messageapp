const {Pool} = require("pg")

//module.exports = new Pool({
//  host: "localhost", // or wherever the db is hosted
//  user: "petrudemian",
//  database: "messageapp",
//  password: "<role_password>",
//  port: 5432 // The default port
//});
module.exports = new Pool({
  ///host: "ep-small-tree-a2ggbkb8.eu-central-1.pg.koyeb.app", // or wherever the db is hosted
  host:"postgres:koyeb-adm:npg_sh71MuqPNTin@ep-small-tree-a2ggbkb8.eu-central-1.pg.koyeb.app/koyebdb",
  user: "koyeb-adm",
  database: "koyebdb",
  password: "npg_sh71MuqPNTin",
  port: 8000 // The default port
});




