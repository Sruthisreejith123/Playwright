class Person{
    
    id=24398594
    get location(){

        return "area"
    }
    constructor(firstname,lastname){
        this.firstname=firstname
        this.lastname=lastname
    }
fullname(){
    console.log(this.firstname+ " "+ this.lastname)
}
}
let person1=new Person("Sruthi", "SD")
person1.fullname()
console.log(person1.id)
console.log(person1.location)