class Animal{
    constructor (name){
        this.name=name
         //this-reffering variables of current class 
    }

sound(){
    console.log(this.name+" "+"dog is barking")
}
}
//dog clss inherits properties from Animal class
class Dog extends  Animal{
       constructor(name1, breed){
        super(name1)//Constructor inside the Animal class
        this.breed=breed
        
       }
       breedtype(){
        console.log(this.name+" "+ this.breed)
       }
       
}
let animals=new Dog("Tippu","pug")
animals.breedtype()
animals.sound()




