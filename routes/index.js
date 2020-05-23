var express = require('express');
var router = express.Router();


var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'lmc724513073',
  database: 'node_complete'
});

// connection.connect();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('express server');
});


router.get('/getuser',(req,res)=>{
  const sql = 'select * from users';
  connection.query(sql, function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
    res.send(results);
  });
})


module.exports = router;
