const movies = [
  {
    title: "The Matrix",
    director: "Wachowski Brothers",
    year: 1999,
    rating: 8.7,
  },
  {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8,
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    rating: 8.6,
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    rating: 9.2,
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    rating: 9.0,
  },
  { title: "Fight Club", director: "David Fincher", year: 1999, rating: 8.8 },
]

let movie2000 = movies.find((movie) => {
  return movie.year > 2000
})
console.log(movie2000.title)

let rating9 = movies.find((movie) => {
  return movie.rating > 9
})

console.log(rating9)

let Christopher = movies.filter((movie) => {
  return movie.director === "Christopher Nolan"
})

console.log(Christopher)

let movies2010 = movies.filter((movie) => {
  return movie.year < 2010
})

console.log(movies2010)

let titleMovies = movies.map((movie) => {
  return movie.title
})

console.log(titleMovies)

let avgMovies =
  movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length
console.log(avgMovies)

let sortyear = movies.sort((a, b) => {
  return a.year - b.year
})
console.log(sortyear)

let sortRating = movies.sort((a, b) => {
  return b.rating - a.rating
})
console.log(sortRating)

let allReating8 = movies.every((movie) => {
  return movie.rating === 8
})

console.log(allReating8)

let movies1999 = movies.some((movie) => {
  return movie.year === 1999
})

console.log(movies1999)

let allDirector = movies.every((movie) => {
  return movie.director === "Christopher Nolan"
})

console.log(allDirector)

let oneRating = movies.some((movie) => {
  return movie.rating < 8.5
})

console.log(oneRating)
