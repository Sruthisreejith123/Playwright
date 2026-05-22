let top= ()=>
{
    greet =20
    greet=30
    a=8
    console.log("Hello World" +" " +a+" "+greet)
}
top()

//Parameterised anonymous fn
const multiply=(a,b)=>
{
    console.log(a*b)
}
multiply(2,3)

//another way
const newMultiple=(a,b)=>a*b
console.log(newMultiple(3,5))

//Return type parameterised anonymous Function
let Value=(m,n)=>
{
    return m-n
}
console.log(Value(5,3))

//Return type non-parameterised anonymous Function
let Value1=()=>
{
    let x=7
    let y=8
    return x-y
}
console.log(Value1())


