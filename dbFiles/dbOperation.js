const config               = require('./dbConfig'),
      sql                  = require('mssql');

const getEmployees = async() => {
  try {
    let pool = await sql.connect(config);
    let employees = pool.request().query("Select * From Employeedemographics")
    console.log(employees);
    return employees;
  }
  catch(error){
    console.log(error);
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
    console.log(error);
  }
}



module.exports = {
  createEmployee,
  getEmployees
}