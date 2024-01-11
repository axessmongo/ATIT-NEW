import { React, useState, useEffect } from 'react'
import { Outlet } from 'react-router'
import Rocket from '../Components/Rocket';
import LeftBar from '../Components/LeftBar';
import ContactForm from '../Components/ContactForm';
import Navbar from '../Components/Navbar';

export default function MainBlog() {

const [hasIndividualBlogsClass,setHasIndividualBlogsClass]=useState("")
useEffect(() => {
    setHasIndividualBlogsClass( document.querySelector(".individualBlogs") !== null);    
  });
    return (
        <div className='overflow-x-hidden'>
            <div className={``}>
                <Navbar blogPage = {hasIndividualBlogsClass ?"d-lg-none":""}/>
            </div>
            <Outlet />
            <Rocket />
            <LeftBar blogPage="true" />
            <ContactForm />
        </div>
    )
}
 