const { computeHeadingLevel } = require('@testing-library/react');
const config               = require('./dbConfig'),
      sql                  = require('mssql');

const getEmployees = async(firstname) => {
  try {
    console.log(firstname);
    let pool = await sql.connect(config);
    let employees = await pool.request().query(`Select * From judges WHERE JUDGE = '${firstname}'`)
    return employees;
  }
  catch(error){
  }
}

const getROOM = async(Room) => {
  try {
    console.log(Room);
    let pool = await sql.connect(config);
    let employees = await pool.request().query(`Select * From judges WHERE ROOM = '${Room}'`)
    return Room;
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
  }
}



module.exports = {
  createEmployee,
  getEmployees,
  getROOM,
}