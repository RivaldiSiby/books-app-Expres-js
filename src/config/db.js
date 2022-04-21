const psql = require("pg")
const { Pool } = psql

const db =  new Pool({
    user:'developer',
    host:"localhost",
    database:"database",
    password:"2022",
    port:5432
});

module.exports = db
