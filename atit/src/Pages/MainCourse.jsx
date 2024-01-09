import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'
import Rocket from '../Components/Rocket';
import LeftBar from '../Components/LeftBar';
import ContactForm from '../Components/ContactForm';

export default function MainCourse() {
    let coursePage = true;
    return ( 
        <div className='overflow-x-hidden'>
            <div className={``}>
                <Navbar coursePage = {coursePage}/>
            </div>
            <Outlet />
            <Rocket/>
            <LeftBar coursePage={coursePage}/>
            <ContactForm/>
        </div>
    )
}
 