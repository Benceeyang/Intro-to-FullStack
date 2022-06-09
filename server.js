const express       = require('express'),
      Employee      = require('./dbFiles/employee'),
      dbOperation   = require('./dbFiles/dbOperation'),
    	cors          = require('cors');

// const API_PORT = process.env.PORT || 5000;
// const app = express();


// app.use(cors());

// app.get('/api', function(req,res) {
// 	console.log('Called');
// 	res.send({result: 'Hello World'})
// })

// app.get('/quit', function(req,res) {
// 	console.log('Called quit');
// 	res.send({result: 'Good Bye'})
// })


let Pam = new Employee(1002, 'Pam', 'Beezley', 29, 'Female');

// console.log(Pam);
dbOperation.getEmployees().then(res => {
  console.log(res.recordset);
})

// app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));

dbOperation.createEmployee(Pam);