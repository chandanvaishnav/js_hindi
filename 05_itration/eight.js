const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const mytotal=mynum.reduce(function (acc,currval) {
//  console.log(`acc: ${acc} and curval: ${currval}`)
//return acc+currval
//},0)

const mytotal = mynum.reduce((acc, currval) => (acc + currval), 0)
console.log(mytotal)

const shoppingcart = [
    {
        itemname: "js",
        price: 294
    },
    {
        itemname: "py",
        price: 4
    },
    {
        itemname: "mogdb",
        price: 74
    },
    {
        itemname: "datascience",
        price: 2555563
    }
]

const pricetipay = shoppingcart.reduce((acc, item) => (acc + item.price), 0)
console.log(pricetipay)