//singleton
//Object.create

//object literals

const mysym = Symbol("key1")

const jsuser = {
    name: "chandan",
    "fullname": "chandan hariprasad vaishnav",
    [mysym]: "mykey1",
    age: 19,
    location: "nashik",
    email: "chandangoogle.com",
    isloggedin: false,
    lastloggedindays: ["monday", "saturday"]
}

//console.log(jsuser.email)
//console.log(jsuser["email"])
//console.log(jsuser["fullname"])// yala apan .deun print nahi karu shakat yala asasch print karu shakto
//console.log(typeof jsuser.mysym)
//console.log(typeof jsuser[mysym])
//console.log(jsuser)
jsuser.isloggedin = true
//console.log(jsuser)
//Object.freeze(jsuser)
jsuser.isloggedin = false
//console.log(jsuser)

jsuser.greeting = function () {
    console.log("helo js user")
};

jsuser.greetingtwo = function () {
    console.log(`helo js user,${this.name}`);
};
console.log(jsuser.greeting())
console.log(jsuser.greetingtwo())