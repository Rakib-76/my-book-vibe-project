// import React, { Suspense, useEffect, useState } from 'react';
import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {

    // const [allBooks, setAllBooks] = useState([]);


    // here the one way to fetch json data

    // useEffect(() =>{
    //     fetch ('/public/data/booksData.json')
    //     .then(res=>res.json())
    //     .then(data => {
    //         setAllBooks(data)
    //     })
    // })


    // *****
    // here the another way to fetch data
    // const bookPromise = fetch('../../../public/data/booksData.json').then(res => res.json())

    // *****

    return (
        <div>
            <h1 className='text-3xl text-center mt-4 p-6'>Books</h1>
            <Suspense fallback={<span>loading.....</span>}>
                {/* <Book bookPromise={bookPromise} ></Book> */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 border border-gray-800'>
                    {
                        data.map((singleBook) => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                    }
                </div>
            </Suspense>

        </div>
    );
};

export default Books;