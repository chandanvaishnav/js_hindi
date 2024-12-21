/*const useremail = "bhaga"
if (useremail) {
    console.log("got user email");
} else {
    console.log("do not have email")
}*/


//falsy value
// false,0,-0,BigInt 0n,"",null,undefined,NaN


//truthy value
//true,"0","false"," ",[],{},funnction(){}

/*const useremail = []
if (useremail.length === 0) {
    console.log("array is empty")
}*/

/*const useremail = {}
if (Object.keys(useremail).length===0) {
    console.log("array is empty")
}*/

//Nullish coalescing opretor(??):null undefined

let val;
val = 5 ?? 10
val = null ?? 10
val = undefined ?? 15
val = null ?? 10 ?? 20
console.log(val)

//tarnary opretor
//condition ? true:false

const iceteaprice=100
iceteaprice<=80 ?console.log("less than 80 "): console.log("more than 80")