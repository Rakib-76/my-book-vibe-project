import React from 'react';
import {
    createBrowserRouter,
} from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import BookDetails from '../Pages/Details/BookDetails';


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
            index: true,
            loader:()=>fetch('../../public/data/booksData.json'),
            path: "/",
            Component: Home
        },
        {
            path:"/about",
            Component:About,
        },

        // the below path is dynamic path where i visit dynamically different page
        // here i use semicolon(:) for dynamically data load
        {
            path:"/bookDetails/:id",
            Component:BookDetails,
        }
    ]
    },
   
]);
