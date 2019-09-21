const pgp = require('pg-promise')({
    /* initialization options */
    capSQL: true // capitalize all generated SQL
});
require('dotenv').config();
const connectionURI = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
}
const db = pgp(connectionURI);

module.exports = db;