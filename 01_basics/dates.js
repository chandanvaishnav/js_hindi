//***********************date*********************
const mydate = new Date()
//console.log(mydate.toString())
//console.log(mydate.getMonth())
//console.log(mydate.toDateString())
//console.log(mydate.toLocaleString())
//console.log(typeof mydate)

let mycreateddate = new Date(2024, 11, 14)
//console.log(mycreateddate.toDateString())

mycreateddate = new Date(2005, 6, 27)
//console.log(mycreateddate.toDateString())

mycreateddate = new Date(2025, 0, 14, 5, 9, 6)
//console.log(mycreateddate.toLocaleString())


let mycreate = new Date("01-14-2023")
//console.log(mycreate.toLocaleString())

let mytimestam = Date.now()
///console.log(mytimestam)
//console.log(mycreate.getTime())

//console.log(Math.floor(Date.now() / 1000))


let newdate = new Date()
console.log(newdate)
console.log(newdate.getDate())
console.log(newdate.getDay())
console.log(newdate.getFullYear())
console.log(newdate.getHours())
console.log(newdate.getMilliseconds())
console.log(newdate.getSeconds())

