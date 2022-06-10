const config               = require('./dbConfig'),
      sql                  = require('mssql');

const getEmployees = async(firstname) => {
  try {
    let pool = await sql.connect(config);
    let employees = await pool.request().query(`Select * From Employeedemographics where firstname = '${firstname}'`)
    return employees;
  }
  catch(error){
  }
}

const createEmployee = async(Employee) => {
  try {
    let pool = await sql.connect(config);
    let employees = pool.request()
    .query(`Insert into Employeedemographics values
    (${Employee.EmployeeID}, '${Employee.firstname}', '${Employee.lastname}', '${Employee.Age}', '${Employee.Gender}')
    `)
    return employees;
  }
  catch(error){
  }
}



module.exports = {
  createEmployee,
  getEmployees
}