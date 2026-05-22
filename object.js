const student={
    name:"Sruthi",
    rollno:1,
    details:function(){// instaed of function( we can use arrow function)like detalis:()=>
        console.log("hello")
    }
}
console.log(student.name+ " " +student.rollno)
student.details()

const addition={// parameterised function calling using arrow fn and anonymous fn
    num:(a,b)=>{
        console.log(a+b)
    }
}
addition.num(3,7)

//After ES6 version, we can use shorthand method. ie not mandatory to create key value pair for function
const employee={  //employee is an object name
    sample:"Hello",
    test1(){
        console.log("first test"+" "+this.sample)
    }
}
employee.test1()

//object literal= we can store only one object
//constructor-we can add more than one object 
//uses of constructor-Code re usability
//handles large application
//possible to create multiple objects
