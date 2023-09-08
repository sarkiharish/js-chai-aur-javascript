const marvelHeroes = ['Thor', 'Ironman', 'Spiderman']
const dcHeroes = ['Superman', 'Flash', 'Batman']

// marvelHeroes.push(dcHeroes)

// console.log(marvelHeroes)
// console.log(marvelHeroes[3][1])

const allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes)

const allNewHeros = [...marvelHeroes, ...dcHeroes]
// console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]] ]
const flatArray = anotherArray.flat(2)

// console.log(flatArray)

console.log(Array.isArray("Harish"))
console.log(Array.from("Harish"));
console.log(Array.from({name: "Harish"})); //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))