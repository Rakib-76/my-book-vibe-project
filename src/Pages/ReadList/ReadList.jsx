import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import Book from '../Book/Book';


const ReadList = () => {
    const [sort, setSort] = useState("");
    const [readList, setReadList] = useState([]);
    const data = useLoaderData();
    // console.log(data);


    useEffect(() => {
        const storedBookData = getStoredBook();
        const ConvertedStoredBookData = storedBookData.map(id => parseInt(id));
        //   console.log(ConvertedStoredBookData);
        const myReadList = data.filter(book => ConvertedStoredBookData.includes(book.bookId));
        setReadList(myReadList);

    }, [])

    // sort is arrange the book lisht smaller to grater or grater to smaller on total pages or rating which i want,as a result reader can understand easily which book is small or low rating 
    const handleSort = (type) => {
        setSort(type);
        if(type==="pages"){
            const sortByPage= [...readList].sort((a,b) => a.totalPages - b.totalPages);
            setReadList(sortByPage);
            console.log(sortByPage);
        }
        if(type==="rating"){
            const sortByRating= [...readList].sort((a,b) => a.rating - b.rating);
            setReadList(sortByRating);
            // console.log(sortByRating);
        }
    }

    return (


        <div>
            <details className="dropdown">
                <summary className="btn m-1">Sort By:{sort?sort :""}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={()=>handleSort("pages")}>Pages</a></li>
                    <li><a onClick={()=>handleSort("rating")}>Rating</a></li>
                </ul>
            </details>
            <Tabs>
                <TabList>
                    <Tab>Book list</Tab>
                    <Tab>My wish list</Tab>
                </TabList>

                <TabPanel>
                    <h2>I read this book {readList.length}</h2>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1'>
                        {
                            readList.map(b => <Book key={b.bookId} singleBook={b}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>I wish this book</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;