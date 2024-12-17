const marvel_heroes = ["thor", "ironman", "spidermaan"]
const dc_heroes = ["superman", "flash", "batman"]
//marvel_heroes.push(dc_heroes)

//console.log(marvel_heroes)
//console.log(marvel_heroes[3])
//console.log(marvel_heroes[3][2])

//const mixheroes = marvel_heroes.concat(dc_heroes)
//console.log(mixheroes)

const new_all_heroes = [...marvel_heroes, ...dc_heroes,]// many array we can marge it 
//console.log(new_all_heroes)

const cricket = ["virat", "rohit", "klrahul", ["hardik", "jadeja", "ashwin"], "jasprit", ["shami", "bhuvi"], ["sachin", "murlidharan"]]
//console.log(cricket)
const sport = cricket.flat(Infinity)
//console.log(sport)

console.log(Array.isArray("chandanvaishnav"))
console.log(Array.from("chadancaishnavs"))
console.log(Array.from(1))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))