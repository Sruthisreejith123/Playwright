let num=[1,2,3,4,5] //Array literal form
console.log(num)

//Using Array constructor
let num1=Array(1,2,3,4,5)
console.log(num1)

//using new keyword
let num2=new Array(2,4,6,8,10)
console.log(num2)

let num3=Array()
num3[0]=5
num3[1]=7
num3[2]=9
num3[3]=8
console.log(num3)

//push method
num3.push(20)
console.log(num3)

//String in an array using literal type
let flowers=["Rose","hibiscus","jasmine","lotus"]
console.log(flowers)

//filter function in an array
let number=[1,3,5,7,9,11]
let filterno=number.filter(n=> n>3)
console.log(filterno)

//Sorting in Array
let sortNumber=[5,6,3,9,7,1,2,0]
sortNumber.sort((a,b)=> a-b) // if result is negetive, a comes before b.If result is positive, b comes before a
console.log(sortNumber)
let numArray2=[8,9,4,0,1,6,4]
numArray2.sort((a,b)=>b-a)
console.log(numArray2)

let stringArray=["Orange","Apple","Kiwi"]
stringArray.sort()
console.log(stringArray)

stringArray.reverse()
console.log(stringArray)
