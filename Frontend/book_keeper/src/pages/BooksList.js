import React, {useEffect, useState} from 'react'
import ListItem from '../components/ListItem'

const BooksList = () => {

    let [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks();
    }, [])

    let getBooks = async () => {
        let response = await fetch('http://localhost:8000/book/')
        let data = await response.json()
        setBooks(data)
    }

    return(
        <nav>
        <ul className="the-list">
            {books.map((book, index) => (
                <li className="book-list-item"><ListItem key={index} book={book} className="book-list-item" /></li>
            ))}
        </ul>
        </nav>
    )
}

export default BooksList;