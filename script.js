//constant are read only - you have to declare and initiaize on a cnstant
// escape character \\ or use back ticks/template literals ``

let a = 45
let description = "wise"

a = 35
console.log(a)

console.log(`this is a ${a} year old man`)
console.log(`this is a ${description} old man`)



//Array literals 
const numbers = [1, 2, 3, 4, 5, 5, 6]
numbers[2] = 11 //mutating the array. this is not reasigning the array that is why we can do it on a const defined array
console.log(numbers[4])
    // ARRAY methods 
    //pop() shift() push(item)
    // we can have items of different types of data in an array, strings , numbers, arrays , boolean, null


// Object literals

const person = {
    firstName: "John",
    secondName: "Smith",
    age: 30,
    pets: ["dogs", "cats"],
    address: {
        street: "123 Street",
        city: "Johanesburg",
        State: "Kitale"
    }
}

person.email = "johnsmith@email.com"

console.log(person.firstName)
console.log(person['secondName'])
console.log(person.address.State)
console.log(person)


// const - let then var as last thought case



//// *******STRICT EQUALITY****

console.log("%cInterger and string", "color:green")
console.log("1" == 1) //true
console.log("1" === 1) //false

console.log("%cZero and space", "color:green")
console.log(0 == "") //true
console.log(0 === "") //false

console.log("%cZero and boolean")
console.log(0 == false) //true
console.log(0 === false) //false
console.log(1 == true) //true
console.log(1 === true) //false


console.log("%cUse case for double oppperator: on null and undefined", "color:red ; font-size:20px")

console.log(null == undefined) //true
console.log(null === undefined) //false

console.log("%c != works the same as ==", "color:green ; font-size:20px")
console.log("%c !== works the same as ===", "color:green ; font-size:20px")