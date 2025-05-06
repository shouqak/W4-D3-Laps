let book = {
  title: "الاب الغني و الاب الفقير",
  author: "روبرت ",
  year: 1997,
  isAvailable: true,

  borrow: function () {
    if (this.isAvailable === true) {
      console.log(" الكتاب غير الوجود")
    } else {
      console.log("الكتاب موجود")
    }
  },
}

let publisher = {
  name: "جرير",
  location: { country: "السعودية", city: "الرياض" },
}

console.log(book)

console.log(book.title)

let changeYear = function (newYear) {
  return (book.year = newYear)
}
changeYear(2025)
console.log(book)

delete book.author

console.log(book)

console.log(book)

console.log(publisher)

console.log(publisher.location.city)
