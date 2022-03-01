// get the client
const mysql = require('mysql2')

// create the connection to database
module.exports = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'FT-task',
  // If you're using mac then comment out bellow property
  // socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
})
