let employee={
    firstname:"Sruthi", //key value pair
    lastname:"D",
    id:"12948",
    fullname:function(){
        return this.firstname + " " + this.lastname
    }
}
console.log(employee.firstname)
console.log(employee.lastname)
console.log(employee.fullname()) // function call using dot notation
console.log(employee["firstname"])//Bracket notation

//Adding new property to an object
employee.gender ="Female",
console.log(employee.gender)

//To delete a object's property
delete employee.gender
console.log(employee.gender)

//Using 'for' in loop
for(const key in employee){
    if(typeof employee [key]==="function"){
        console.log(key+":",employee[key]())
    
    }
    else{
        console.log(key+":",employee[key])
    }

}

