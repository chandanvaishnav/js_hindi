function saymyname() {
    console.log("c")
    console.log("h")
    console.log("a")
    console.log("n")
    console.log("d")
    console.log("a")
    console.log("n")
}
//saymyname //refrence
//saymyname()//method

/*function addtwonumbers(number1, number2) {  //parameters
    console.log(number1 + number2)
}*/
//addtwonumbers()
//addtwonumbers(3, 4)
//addtwonumbers(3, "4")
//addtwonumbers(3, "a")
//addtwonumbers(3, null)  //arguuments


/*function addtwonumbers(number1, number2) {  //parameters
    let result = number1 + number2
    console.log("chandan")    //it is print every time when function is call
    return result
    console.log("chandan")   //it is not print beacause rerurn chya nantar kahich print nahi hot
}*/

function addtwonumbers(number1, number2) {  //parameters
    return number1 + number2
    console.log("chandan")    //it is print every time when function is call
    console.log("chandan")
}
const result = addtwonumbers(3, 4)
//console.log("result", result)


/*function loginusermassage(username) {
    return `${username} just logged in `
}*/
//loginusermassage("chadan")  // he call zal and function perfrom task but you not see print so they not print so we write
//console.log("result", result)

//console.log(loginusermassage("chadan"))  // atta he print zal
//console.log(loginusermassage(""))
//console.log(loginusermassage())


/*function loginusermassage(username) {
    if (username === undefined) // if(!username)  answer is same 
    {
        console.log("beta tum jis raste par ja rahe ho ekdin buri tara fasoge  ass na ho isiliye username dalo bacha")
        return
    }
    return `${username} just logged in `
}*/


function loginusermassage(username = "nanaji")//in this case apn kadhi undifine la janae nahi karan tyachi value hi nehami user ji deil tich nahi tar user ni value nahi dili tar defalut value nanaaji yeil 
{
    if (username === undefined) // if(!username)  answer is same 
    {
        console.log("beta tum jis raste par ja rahe ho ekdin buri tara fasoge  ass na ho isiliye username dalo bacha")
        return
    }
    return `${username} just logged in `
}

//console.log(loginusermassage())
//console.log(loginusermassage("vaishhnav"))


/*function calculatecartprice(num) {
    //console.log(num)
    return num

}

calculatecartprice(8)
console.log(calculatecartprice(8,5,7,9,3,4))*/

//in this fakt pahili shankya print hot ahe yat jar konala 200 value print karayvhya asel tar kay karave
//yashathi ... rest opertor vaprave tyal amule apn kiti arguement pass karu shakto ha aplya la sagle value array t deil


/*function calculatecartprice(...num) {
    //console.log(num)
    return num

}
calculatecartprice(8)
console.log(calculatecartprice(8, 5, 7, 9, 3, 4))*/

function calculatecartprice(value1, value2, ...num) {
    //console.log(num)
    return num

}
calculatecartprice(8)
//console.log(calculatecartprice(8, 5, 7, 9, 3, 4))
// yat nemki zala ass ki 8 ha value1 gheun gela and 5 value2 la geli mag baki urlelya rast la gelli ...


const user = {
    name: "chandan vaishnav",
    price: 9283
}
function handleobj(anyobject) {
    //console.log(`username is ${anyobject.name} and their corresponding price is ${anyobject.price}`)
}
handleobj(user)
handleobj({
    name: "vaishnav chandan",
    price: 0
})



const aray = [20388494, 26457267, 47474378387, 56666666666666666666666666666666666]
//yat nehmi aplya function madhe konta array apn lihu to ch dharyacha tyachya ar adharit code karne 
function returnseccondvalue(getaray) {
    return getaray[3]
}
console.log(returnseccondvalue(aray))
console.log(returnseccondvalue([5635632563656523467234, 674674747, 6468466464684764676, 73]))