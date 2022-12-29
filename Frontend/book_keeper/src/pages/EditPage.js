import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import bookDef from '../assets/data'

const EditPage = () => {
    let params = useParams();
    let bookId = params.id;

    let [book, setBook] = useState(bookDef)

    book.ID = bookId
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
        <form className="editForm">
            <ul>
            <li className="editLI">
            <label className="editLabel">id 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" value={book.ID} />
            </label>
            </li>
            <li className="editLI">
            <label className="editLabel">title 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" value={book.title}  onChange={(e)=> {setBook({...book, 'title':e.target.value})}}/>
            </label>
            </li>
            <li className="editLI">
            <label className="editLabel">publication 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" value={book.publication}  onChange={(e)=> {setBook({...book, 'publication':e.target.value})}}/>
            </label>
            </li>
            <li className="editLI">
            <label className="editLabel">author 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" value={book.author}  onChange={(e)=> {setBook({...book, 'author':e.target.value})}}/>
            </label>
            </li>
            </ul>
            <button onClick={handleSubmit} className="UpdateBtn">
                &#10002;
            </button>
        </form>
    )
}

export default EditPage
