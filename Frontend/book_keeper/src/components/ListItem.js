import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

const ListItem = ({book}) => {
    return (
        <NavLink to={`/book/${book.ID}`} className="book-list-item" style={{ textDecoration: 'none', color: 'inherit'}} >
        {book.title}
        </NavLink>
    )
}


export default ListItem