//   for of

//   [" "," "," "," "]

//   [ { } ,{ },{ },{ } ]

const arr = [1, 2, 3, 4, 5, 6]
for (const num of arr) {
    //console.log(num);
}

const grretings = "hello world"
for (const grret of grretings) {
    //console.log(`each charector ${grret}`)
}

// yat aplyala space nahi pahije mg apn continew kiva break vapru shakto 

//   maps

const map = new Map()
map.set('in', "india")  ///  only conatian unique value
map.set('usa', "united states of america")
map.set('fr', "farnce")
map.set('in', "india")

//console.log(map)

for (const key of map) {
    //console.log(key)
}

for (const [key, value] of map) {
    //console.log(key, ':->', value)
}

const myobj = {
    'game1': 'sybyasafer',
    'game2': 'carpark'
}

/*for (const [key, value] of myobj) {
    console.log(key, ":->", value)
}*/

// not working foe  object 