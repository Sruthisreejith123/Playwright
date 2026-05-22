

function message():void{   //void-nothing to return
    console.log("Hello")
}
message()

function nameDetail(username:String):void{
    console.log(username)
}
nameDetail("Sruthi")

function addition(a:number,b:number):number{
    return(a+b)
    }
let result=addition(3,4)
console.log(result)

function throwError(message:string):never{
    throw new Error(message)
}
throwError("This is an error message")

