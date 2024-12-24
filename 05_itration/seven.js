const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newnums = mynum.map((num) => num + 10)
//const newnums = mynum.map((num) => {num + 10})
//const newnums = mynum.map((num) => { return num + 10})

const newnums =
    mynum.map((num) => num * 10)//rerturn
        .map((num) => num + 1)//return
        .filter((num) => num > 40)//true fasle

console.log(newnums)