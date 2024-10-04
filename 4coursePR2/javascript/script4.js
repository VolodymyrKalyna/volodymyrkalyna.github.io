let books = [
    {
        title: "1984",
        author: "Джордж Орвелл",
        year: 2018,
        rating: 3,
        isRead: true
    },
    {
        title: "Майстер і Маргарита",
        author: "Михайло Булгаков",
        year: 2016,
        rating: 5,
        isRead: false
    },
    {
        title: "Тіні забутих предків",
        author: "Михайло Коцюбинський",
        year: 2012,
        rating: 4,
        isRead: false
    }
]

function getUnreadBooks(books) {
    return books.reduce((acc, curr) => {
        
        if (curr.isRead == false)
            acc.push(curr)
        return acc
    }, [])
}

let unreadBooks = getUnreadBooks(books)
console.log(unreadBooks)

function getBooksByAuthor(books, author) {
    let booksT = books.reduce((acc, curr) => {
        if(curr.author == author)
            acc.push(curr)
        return acc
    }, [])
    return booksT.sort((a, b) => a.year - b.year)

}

let booksByAuthor = getBooksByAuthor(books, "Михайло Коцюбинський")
console.log(booksByAuthor)

function getTopRatedBooks(books) {
    let highRatedBooks = books.reduce((acc, curr) => {
        if(curr.rating >= 4)
            acc.push(curr)
        return acc
    }, [])
    return highRatedBooks.sort((a, b) => b.rating - a.rating)
}

highRatedBooks = getTopRatedBooks(books)
console.log(highRatedBooks)