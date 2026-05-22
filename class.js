class Student{
    constructor(name,id){
        this.name=name
        this.id=id
    }
    details(){
       console.log("name is"+this.name)
       console.log("id is"+this.id)
    }
}
const student1 =new Student("Sruthi", 12847)
student1.details()
const student2=new Student("Swathi", 4755)
student2.details()
