import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import bookDef from '../assets/data'


const Header = () => {
    const navigate = useNavigate();

    let editPage = () => {
        let bookId = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
        navigate(`/edit/${bookId}/`);
    }

    let data = bookDef
    let deleteBook = async () => {
        let bookId = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
        await fetch(`http://localhost:8000/book/${bookId}`, {
            method: 'DELETE',
            header: {
                'Content-Type': 'application/json',
            }
        })
        window.location.reload();
    }

    let addBook = async () => {
        let response = await fetch(`http://localhost:8000/book/`, {
            method: 'POST',
            header: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookDef)
        })
        data = await response.json()
        window.location.reload();
    }

    return(
        <ul className='UL-List'>
            <div onClick={editPage} className="HeadItem" id="HeadItem-R">
            Edit
            </div>
            <NavLink to='/' onClick={deleteBook} className="HeadItem" id="HeadItem-Del">
            Delete
            </NavLink>
            <NavLink to={'/'} onClick={addBook} className="HeadItem" id="HeadItem-L">
            Add
            </NavLink>
        </ul>
        
    )
}

export default Header;