import{test,expect} from '@playwright/test'
test('get request to fetch users in Playwright',async({request})=>{
    const response=await request.get("https://jsonplaceholder.typicode.com/users")//sending request to API endpoints
    expect(response.ok()).toBeTruthy()//requested response stored in response variable and check if the status is 200 or not 
    const data=await response.json()//response converted to json format and stored in the data variable in key-value pair
    console.log(data)
    expect(data.length).toBeGreaterThan(0)//to chek the data is greater than 0 or not
})
test('post request to create user in Playwright',async({request})=>{
    const response=await request.post("https://jsonplaceholder.typicode.com/users",{
        data:{
            name:"Sruthi",
            email:"sruthi@gmailcom",
            phoneno:"9611228617"
        }
    })
    expect(response.status()).toBe(201)
    const data=await response.json()
    console.log(data)
    expect(data.name).toBe("Sruthi")
   
})
test('put request to update user',async({request})=>{
    const response=await request.put("https://jsonplaceholder.typicode.com/users/10",{
        data:{
            
    "id": 10,
    "name": "Sruthi",
    "username": "srnair",
    "email": "sruthi@gmail.com",
    "address": {
      "street": "Kerala",
      "suite": "Bovikanam",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
        }
    }}

    })
    expect(response.status()).toBe(200)
    const data=await response.json()
    console.log(data)

 })
 test('patch request to update user',async({request})=>{
    const response=await request.patch("https://jsonplaceholder.typicode.com/users/10",{
        data:{

            name:"Sreejith",
        }
    })
    expect(response.status()).toBe(200)
    
    const data=await response.json()
    console.log(data)
    expect(data.name).toBe("Sreejith")

    
})

 test.only('delete request to delete an user',async({request})=>{
    const response=await request.delete("https://jsonplaceholder.typicode.com/users/4",{
    
    })
    expect(response.status()).toBe(200)
    const data=await response.json()
    console.log(data)
})

    
