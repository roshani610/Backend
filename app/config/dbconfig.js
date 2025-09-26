const  dbConfig = {
  user:  'roshanio', // sql user
  password:  'Roshani@123', //sql user password
  server:  '127.0.0.1', // if it does not work try- localhost
  database:  'DemoDB',
  options: {
    trustedconnection:  true,
    enableArithAbort:  true,
    instancename:  'SQLEXPRESS',  // SQL Server instance name
    encrypt : false
  },
  port:  55892
}

module.exports = dbConfig;