import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import bookDef from '../assets/data'

const BookPage = () => {
    let params = useParams();
    let bookId = params.id;
    
    let [book, setBook] = useState(bookDef)

    useEffect(() => {
        getBook()
    }, [bookId])

    let getBook = async () => {
        let response = await fetch(`http://localhost:8000/book/${bookId}`)
        let data = await response.json()
        setBook(data)
    }

    let updateComment = async () => {
        await fetch(`http://localhost:8000/book/${bookId}`, {
            method: 'PUT',
            header: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book)
        })
    }

    let handleSubmit = () => {
        updateComment()
    }

    return (
        <div className="Box-Text">
            <h3>{book.title} &nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp; {book.ID}</h3>
            <h7>{book.publication}</h7>
            <h5>{book.author}</h5>

            <textarea onChange={(e)=> {setBook({...book, 'comment':e.target.value})}} value={book?.comment}>
            
            </textarea>
            <button onClick={handleSubmit} className="UpdateBtn">
                &#10002;
            </button>
            
        </div>
    )
}

export default BookPage
