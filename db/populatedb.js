#! /usr/bin/env node
const pool = require("./pool");
const { Client } = require("pg");


const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    messageuser VARCHAR(255),
    messagetext VARCHAR(255),
    added VARCHAR(255)

);
INSERT INTO messages (messageuser, messagetext, added) 
VALUES ('Zoia', 'bine', 'today');
`;


async function main() {
  //console.log("seeding...");
  //const client = new Client({
  //    connectionString: "postgresql://petrudemian:<role_password>@localhost:5432/messageapp",
  //});
  const client = new Client({
      connectionString: "postgres://koyeb-adm:npg_sh71MuqPNTin@ep-small-tree-a2ggbkb8.eu-central-1.pg.koyeb.app/koyebdb",
    });
  };

  await client.connect();
  await client.query(SQL);
  await client.end();
  const { rows} = await pool.query("SELECT * FROM messages");
  //const { personn } = await pool.query("SELECT * FROM messages") ;
  console.log(rows);
  rows.forEach((aaa) => console.log(aaa))
  console.log("done");
  //console.log(rows[0])


main();

