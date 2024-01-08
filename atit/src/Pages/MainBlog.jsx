import React from 'react'
import { Outlet } from 'react-router'
import Rocket from '../Components/Rocket';
import LeftBar from '../Components/LeftBar';
import ContactForm from '../Components/ContactForm';

export default function MainBlog() {
    return (
        <div className='overflow-x-hidden'>       
            <Outlet />
            <Rocket/>
            <LeftBar blogPage = "true"/>
            <ContactForm/>
        </div>
    )
}
