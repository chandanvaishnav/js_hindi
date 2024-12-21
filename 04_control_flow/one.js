//conditional opretor
//   < , >,==,===,>=,<=,!=,!==

// if

if (true) {
    //all code is run beccause of true
}

if (false) {
    // code is not run because of false

}

if (2 != 5) {
    //console.log("is correct")
}

const tempreture = 41

if (tempreture < 50) {
    //console.log("executed")
}
//console.log("tempreture is greter than 50")
// in above both ar e pirnt but not understand who is write so use else


if (tempreture === 50) {
    //console.log("tempretture less tthan 50")
} else {
    //console.log("tempreture is greter than 50")
}
//console.log("programe is run not error is present")

const score = 200

if (score > 100) {
    const power = "fly"//in we use var then is wrong becaue they not have scope so value is change or print every where
    //console.log(`the power is: ${power}`);
}

//console.log(`the power is: ${power}`);
// error becaue scope of power is only {}betwwen this not baher

const balance = 1000
//if (balance > 500) console.log("test")//only for one line not use many lines of code
//if (balance > 500) console.log("test"),console.log("test2")//it is bad practise

if (balance < 500) {
    ////console.log("less than 500");
} else if (balance < 750) {
    //console.log("less than 750");
} else if (balance < 900) {
    //console.log("balce less than ;900")
} else {
    //console.log("less than 1200");
}

const userloggedin = true
const debitcard = true
const loggedinfromgoogle = false
const logeedinfromemol = true

//  &&=>both are true then ourput print

if (userloggedin && debitcard) {
    console.log("allow to by couse");
}

// ||=>only one is true from both thrn output print

if (loggedinfromgoogle || logeedinfromemol) {
    console.log("user logged in")
}