/*const coding = ["js", "cpp", "react", "java", "hitmlcss"]

const values = coding.forEach((item) => {
    //console.log(item);
    return item
})

console.log(values)

//for each rerurn nahi karat*/

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//const newwnums = mynums.filter((num) => num > 4)
//const newwnums = mynums.filter((num) => {
//num>4
//  return num > 4
//})

//console.log(newwnums)

const newwnums = []
mynums.forEach((num) => {
    if (num > 4) {
        newwnums.push(num)
    }
})

//console.log(newwnums)

