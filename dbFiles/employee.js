class Employee{
    constructor(EmployeeID, firstname, lastname, Age, Gender){
        this.EmployeeID = EmployeeID;
        this.firstname = firstname;
        this.lastname = lastname;
        this.Age = Age;
        this.Gender = Gender;
    }
}

module.exports = Employee;

const Pam = {
    EmployeeID: 1002,
    firstname: 'Pam',
    lastname: 'Beezley',
    Age: 29,
    Gender: 'Female'
}