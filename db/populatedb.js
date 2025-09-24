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
    const client = new Client({
      connectionString: "postgresql://petrudemian:<role_password>@localhost:5432/messageapp",
    });
  //const client = new Client({
  //    connectionString: "postgresql://petru:ZAkk8d0zUdEusUDuHRKvEiPVcg44cwxq@dpg-d2urvdvdiees739af9ag-a/messageapp_15hh",
 //   });
  await client.connect();
  await client.query(SQL);
  await client.end();
}

main();

