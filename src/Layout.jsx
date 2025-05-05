import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
// outlet uses the layout as a base and keeps the components added same - header, footer etc
// Place where Outlet is written changes and rest remains same 

export function Layout(props) {
    return (
        <>
        {/* <h1 className='text-3xl font-bold underline'>hello</h1> */}
        <Header/>
        <Outlet/>
        <Footer/>
        </> //fragment <></>
    )
}

//we must specify in index file that we are using an outlet/layout
