const user = {
    username: "chandan",
    price: 100,

    welcomemessage: function () {
        console.log(`${this.username},welcome to website`)
        console.log(this)
    }
}
//console.log(user.welcomemessage())
//user.welcomemessage()
//user.username = "Niranjan"
//user.welcomemessage()
//console.log(this)

/*function chai() {
    letchainame  = "harry"
    //console.log(this)
    console.log(this.chainame)//he fakt apn object madhe karu shakto function la nahi
}
chai()*/


/*const chai = function () {
    chhainame = "chhandan"
    let chaainame = "hitesh"
    const cchainame = "jay"
    chainame = "hitesh"
    console.log(this.chhainame)
    console.log(this.chaainame)
    console.log(this.cchainame)
    console.log(this.chainame)
}*/

const chai = () => {
    let username = "vaishnav"
    console.log(this)
}

//chai()

//()=>{}         
// //syntax of arraawww function and in this when {}its us present then return keyword is complasery
// explict arrow functiom becaue return is preseent

/*const addttwonumbers = (num1, num2) => {
    return num1 + num2
}
console.log(addttwonumbers(3, 98))*/

/// implicit  function
/*const addttwonumbers = (num1, num2) => num1 + num2
console.log(addttwonumbers(3, 98))*/


//when ()its is present then return is not compluasary
//implict arow function return is nt psernt


//const addttwonumbers = (num1, num2) => (num1 + num2)

//we write here return keyword so output show nahitar output show nasst zala
/*const addttwonumbers = (num1, num2) => {return  username= "chandan" }
console.log(addttwonumbers(3, 98))*/


// yat return nahi lihine output show nlihil tar output show nahi hot
/*const addttwonumbers = (num1, num2) => (username = "chandan")
console.log(addttwonumbers(3, 98))*/