import React from 'react';
import bookimage from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className='bg-gray-200 min-h-screen flex justify-between items-center pl-4'>
            <div className='space-y-3'>
            <h1 className='text-4xl'>Books to freshen up your bookshelf</h1>
            <button className='btn btn-primary'>View the List</button>
            </div>
            <div>
                <img src= {bookimage} alt="image"  className=''/>
            </div>
        </div>
    );
};

export default Banner;