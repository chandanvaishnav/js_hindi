// for loop

/*for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}*/

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is the number")
        //break;
        // continue
    }
    //console.log(i)
}

for (let i = 0; i <= 10; i++) {
    //console.log(`outer loop value ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop value ${j}and innerloop ${i}`)

    }


}



// multi plication table
for (let i = 1; i <= 10; i++) {
    //console.log(`outer loop value ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(i + "*" + j + "j" + i * j);

    }
}

let myArray = ["flash", "batman", "supperman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index]
    //console.log(index)
    //console.log(element)
}

//break and continue

/*for (let index = 1; index < 20; index++) {
    if (index == 5) {
        console.log("detect is 5")
        break
    }
    console.log(`value of index is ${index}`)
}*/

/*for (let index = 1; index < 20; index++) {
    if (index == 5) {
        console.log("detect is 5")
        continue
    }
    console.log(`value of index is ${index}`)
}*/