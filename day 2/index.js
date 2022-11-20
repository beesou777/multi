// // oop in javascript
// const person = {
//     name: "beesou",
//     age:18,
//     schoolings:{
//         first_school:"shristi gyan sceondary school",
//         second_school:"nepal don bosco school"
//     }
// }

// console.log(person?.schoolings["first_school"])
// console.log(person?.schoolings["second_school"])
// adding another oop outside 
// console.log("hello")

// person.phone_number = 9862531293;

// console.log(person["phone_number"])

// console.log(person)

// const info = (name,age,schoolings,phone_number)=>{
//     const data = {
//         name:name,
//         age:age,
//         schoolings:schoolings,
//         phone_number:phone_number
//     }

//        const intro=  `Greetings everyone my name is ${data.name} . I am ${data.age} years old. 
//         I did my first schoolings in ${data?.schoolings} and you can contact me in ${data.phone_number}`

//         return intro
// }

// console.log(info('beesou',17,'shristi gyan',98761234567))






// const myData = ()=>{
//     const data = {
//         name:'beesou',
//         profession:'developer',
//         asset:10000,
//         liabiaties:2000,
        // netWorth: ()=>{
//             return  data.asset - data.liabiaties;
//         }
        
//     }
//     const info = `hi my name is ${data.name} . Professionally i am a ${data.profession} and my networth is ${data.netWorth()} .`
//     return info
    
// }
// console.log(myData())
    

// map in js
// const value = [1,2,3,4,5,6,7,8,9,10]

// const table = value.map((number)=>number * 2)
// console.log(table)


// filter in js

// const filter = (values,greaterThan)=>{
//     const result= []
//     for(const value of values){
//         if(value > greaterThan){
//             result.push(value)
//         }
//     }
//     return result
// }

// console.log(filter([1,2,3,4,5,6,7,8,9],3))


// console.log(value.filter(num => num >= 3 || num >= 6))


// const actors = [
//     {name:"beesou", netWorth:200000},
//     {name:"infinity", netWorth:4000},
//     {name:"saman", netWorth:3400},
//     {name:"nabin", netWorth:10000},
// ]

// const result = actors.filter(act => act.netWorth >100 )

// console.log(result)




//promises in js

const order = () => console.log("i want pizza bring me")
console.log("started talking with friend")
setTimeout(order,2000)
console.log("finally")




const promises1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        isReady = [true,false][Math.floor(Math.random()*2)]
        isReady ? resolve("bring me soup") : reject("sorry we are out of it anythings else")
    },1000))
// })

// console.log(promises1
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
//     )


    //fetching the data

// console.log('fetch',
//     fetch('https://dog.ceo/api/breeds/image/random')
//     .then(res => res.json()
//     .then(data => console.log(data))
//     .catch(err => console.log(err.json()))
//     )
// )

// async 

// const getDog = async () =>{
//     const url = 'https://dog.ceo/api/breeds/image/random'
//     const res = await fetch(url)
//    const data = await res.json()
//    console.log(data)
// }
// getDog()



// ?all example 


const getData = async ()=>{
    const data = {tip:0,rating:0,review:0,pay:0}
    data.tip
    data.rating
    data.review
    data.pay
    try {
        const order = await promises1
        console.log(order)
        data.rating = 5
        data.tip = 2
        data.pay = 30
        data.review = 7
        return data
    } catch (error) {
        console.log(error)
        data.rating = 0
        data.tip = 0
        data.pay = 0
        data.review = 0
        return data
    }
}
console.log(await getData())


































