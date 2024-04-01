// Write your solution in this file!


//An object containing employee details
const employee ={
    name: "Billy" ,
    streetAddress: "16 Streetway"
}

//A function to copy employee details and assign it to another variable
function updateEmployeeWithKeyAndValue(employee,key,value){

        return {
            ...employee,
            [key]:value,      
        }
}

//A function to edit the object
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
        employee[key]=value;
        return employee;
}


//A function to delete the key from an object without changing the original object
function deleteFromEmployeeByKey(employee, key){
    let newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee
}


//A function to delete key from original object
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}