// stack --->>>> primitive data type
// heap----->>>> non premitive data types

let name = "chandan"
let sname= name
 sname = "vaishnav"
//sname = "bairagi"

console.log(name)
console.log(sname)

let schoolone={
    year:100,
    teacher:"vaibhavnikam"
}
console.log(schoolone.year)

let schooltwo=schoolone

schooltwo.year=50
console.log(schoolone.year)
console.log(schooltwo.year)