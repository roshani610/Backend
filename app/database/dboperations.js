var  config = require('../config/dbconfig');
const  sql = require('mssql');

async function getProducts() {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request().query('SELECT * FROM Products');
    return result.recordset;
  } catch (err) {
    console.error('SQL error', err);
  }
}

module.exports = {
  getProducts
};
