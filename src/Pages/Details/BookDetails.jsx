import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../utility/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const BookDetails = () => {
    const { id } = useParams();
    // here we get data from id in string but we use find loop and condition triple equal its actullay use in number,that's why
    // we converted data to number from string by using parseInt .
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find((book => book.bookId === bookId))
    // console.log(singleBook);
    const { image, bookName } = singleBook;

    const handleMarkAsRead = id =>{
        // store with id 
        // where to store
        // array of collection
        // if book already exist the show a alert 
        // if book not exist then push in  the collection of array
        MySwal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });


        addToStoreDB(id);

    }
    return (
        <div className='flex justify-between max-w-7xl'>
            <div>
                <img className='w-[200px] h-[200px]' src={image} alt="" />
                <h1 className='6xl'>{bookName}</h1>
            </div>
            <div>
                <button onClick={() =>handleMarkAsRead(id) } className='btn btn-secondary'>Mark as Read</button>
                <button className='btn btn-secondary m'>Add to WhichList</button>
            </div>

        </div>
    );
};

export default BookDetails;