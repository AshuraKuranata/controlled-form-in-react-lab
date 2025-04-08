import { useState } from 'react'

const Bookshelf = () => {
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({ title: '', author: '', copyright: '', pgCount: ''});

    const handleInputChange = (event) => {
        setNewBook({...newBook, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setBooks([ ...books, newBook ])
        setNewBook({ title: '', author: '', copyright: '', pgCount: ''})
    }

    return  (
        <div className='bookshelfDiv'>
            <h3>Add a Book</h3>
            <div className='formDiv'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='title'>Title: </label>
                        <input
                        id='title'
                        name='title'
                        type='text'
                        value={newBook.title}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='author'>Author: </label>
                        <input
                        id='author'
                        name='author'
                        type='text'
                        value={newBook.author}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='copyright'>Copyright Year: </label>
                        <input
                        id='copyright'
                        name='copyright'
                        type='number'
                        value={newBook.copyright}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='pgCount'>Page Count: </label>
                        <input
                        id='pgCount'
                        name='pgCount'
                        type='number'
                        value={newBook.pgCount}
                        onChange={handleInputChange}
                        />
                    </div>
                    <button type='submit'>Add Book</button>
                </form>
            </div>
            {books.map((book, index) => (
                <div key={index} className='bookCardsDiv'>
                    <h3>{book.title}</h3>
                    <p>Author: {book.author}<br/>Page Count: {book.pgCount} pgs<br/>Copyright: {book.copyright}©</p>
                </div>
            ))}
        </div>
    )
}

export default Bookshelf