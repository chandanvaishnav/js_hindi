//singleton
//const tinderuser = new Object()

//non singleton object
const tinderuser = {}
tinderuser.id = "123"
tinderuser.name = "chandan"
tinderuser.isLoggedIn = false

//console.log(tinderuser)
//console.log(typeof tinderuser)

const instauser = {
    email: "chandanvaishnav01@gmail.com",
    fullname: {
        instaname: {
            name: "chandan",
            lastname: "vaishnav"
        }
    }
}

//console.log(instauser)
//console.log(instauser.email)
//console.log(instauser.fullname)
//console.log(instauser.instaname)
//console.log(instauser.name)
//console.log(instauser.fullname.instaname)
//console.log(instauser.fullname.instaname.name)
//console.log(instauser.fullname.instaname.lastname)


const obj1 = { "a": 1, "b": 2 }
const obj2 = { "c": 3, "d": 4 }
const obj3 = { obj1, obj2 }
const obj33 = Object.assign(obj1, obj2)
const obj333 = Object.assign({}, obj1, obj2)
const obj3333 = { ...obj1, ...obj2 }
//console.log(obj3)
//console.log(obj33)
//console.log(obj333)
//console.log(obj3333)

const users = [
    {
        id: 1,
        email: "rajpal@gmail.com"
    },
    {
        id: 2,
        email: "rajpal@gmail.com"
    },
    {
        id: 3,
        email: "rajpal@gmail.com"
    }
]

//console.log(users[1].email)
//console.log(users[1].id)

//console.log(Object.keys(tinderuser))
//iki=Object.keys(tinderuser)
//console.log(iki)
//console.log(Object.values(tinderuser))

//console.log(Object.entries(tinderuser))
//console.log(tinderuser.hasownproperty('isloggedIn'))




const course = {
    coursename: "js in hindu",
    price: 295,
    courseinstructor: "chansadnaannsnansansas"
}

//console.log(course.price)

const { courseinstructor: innstuctor } = course

//console.log(courseinstructor)
console.log(innstuctor)

