/*let a=20
const b=30
var c=40

console.log(a)
console.log(b)
console.log(c)*/

let a = 3000  ////global scpe


if (true) //block scpe
{
    let a = 20
    const b = 30
    //var c = 40
    ///console.log("inner loop", a)
}
//console.log(a)
//console.log(b)
//console.log(c)

//the scope is diffrent in node js (means this slw)and google inspect console both are diffreant


function one() {
    const username = "chandan v"

    function two() // he function jacha parta ahe tyache veriable acces karu shakta 
    {
        const website = "youtube"
        console.log(username)
    }
    ///console.log(website)//website caha scope fakt function purta maryadit ahe ani function zala mag apn lihil mhanuna error ala
    two()
}

one()

if (true) {
    const username = "vaishnav"
    if (username === "vaishnav") {
        const website = "youtube"
        console.log(username + website)
    }
    //console.log(website);
}
//console.log(username)


//*********************************intresting********************************

console.log((5))

function addone(num) {
    return num + 1
}
//console.log((5))


//addtwo(5)
const addtwo = function (num) {
    return num + 2
}
addtwo(5)