// import React, { use } from 'react';
import React from 'react';
import { FaStarHalfStroke } from "react-icons/fa6";
import { Link } from 'react-router';


// const Book = ({bookPromise}) => {
const Book = ({ singleBook }) => {
    console.log(singleBook);
    const { bookName, bookId ,author, image, rating, category ,tags} = singleBook;
    // const data = use(bookPromise);


    // here total div is wrapped by link ,Link is a react router 
    // hete to is not use static it use dynamically thats why i use second bracket and template string
    // and dolar sign for getting dynamically id 

    return (
      <Link to={`/bookDetails/${bookId}`}><div className="card bg-base-100 w-96 shadow-sm border border-gray-800">
      <figure className="px-10 pt-10 bg-gray-100">
          <img
              src={image}
              alt="Book"
              className="rounded-4xl h-[300px] p-3" />
      </figure>
      <div className="p-4 mb-3">
          <h2 className="card-title">{bookName}</h2>
          <p>Author:{author}</p>
      </div>
      <div className='border-1 border-dashed'></div>
          <div className='flex justify-between mx-4'>
              <h1>{category}</h1>
              <div className='flex gap-1 items-center'>
                  <FaStarHalfStroke />
                  <h1>{rating}</h1>
              </div>
          </div>
         
         
      <div className="card-actions mt-4 mb-4 flex flex-row-reverse mr-2 justify-between ">
          <button className="btn btn-primary">Buy Now</button>
          <div className='ml-2 space-x-2'>
          {
              tags.map((tag =><button className='btn'>{tag}</button>))
          }
          </div>
      </div>
  </div></Link>
    );
};

export default Book;