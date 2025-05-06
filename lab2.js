const characters = [
  {
    name: "Luke Skywalker",
    height: 177,
    gender: "male",
    mass: 77,
    eye_color: "brown",
  },
  {
    name: "Leia Organa",
    height: 160,
    gender: "female",
    mass: 56,
    eye_color: "blue",
  },
  {
    name: "Han Solo",
    height: 180,
    gender: "male",
    mass: 80,
    eye_color: "brown",
  },
  {
    name: "Chewie",
    height: 222,
    gender: "male",
    mass: 190,
    eye_color: "black",
  },
  {
    name: "Kevin",
    height: 106,
    gender: "male",
    mass: 32.2,
    eye_color: "red",
  },
]

let mass75 = characters.find((character) => {
  return character.mass
})

console.log(mass75)

let eyeShort = characters.find((character) => character.height < 180)

console.log(eyeShort.eye_color)

let heightChar = characters.filter((character) => {
  return character.height > 150 && character.height < 210
})
console.log(heightChar)

let females = characters.filter((character) => {
  return character.gender === "female"
})

console.log(females)

let eye = characters.map((character) => {
  return character.eye_color
})
console.log(eye)

let masses = characters.map((character) => {
  return character.mass
})
console.log(masses)

let sortnames = characters.sort((a, b) => {
  return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
})

console.log(sortnames)

let sortHeight = characters.sort((a, b) => {
  return a.height - b.height
})
console.log(sortHeight)

let everyHeight180 = characters.every((character) => {
  return character.height > 180
})

console.log(everyHeight180)

let everyHeight200 = characters.every((character) => {
  return character.height < 200
})
console.log(everyHeight200)

let blackEye = characters.some((character) => {
  return character.eye_color === "black"
})

console.log(blackEye)

let height177 = characters.some((character) => {
  return character.height === 177
})

console.log(height177)
