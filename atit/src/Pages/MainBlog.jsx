import { React, useState, useEffect } from 'react'
import { Outlet } from 'react-router'
import Rocket from '../Components/Rocket';
import LeftBar from '../Components/LeftBar';
import ContactForm from '../Components/ContactForm';
import Navbar from '../Components/Navbar';

export default function MainBlog() {
//     const [blogWidth, setBlogWidth] = useState(0);

// useEffect(() => {
//     const updateBlogWidth = () => {
//         const width = document.querySelector('.left-blog')?.offsetWidth || 0;
//         setBlogWidth(width);

//         if (window.innerWidth > 991) {
//             const flexColumnElement = document.querySelector('.left-blog .flex-column');
//             const right = document.querySelector('.right-blog');

//             // Check if the element exists before accessing its style property
//             if (flexColumnElement) {
//                 flexColumnElement.style.width = width + 0 + 'px';
//                 right.style.marginLeft = width + 'px';
//             }
//         }
//     };

//     updateBlogWidth(); // Initial width setup

//     window.addEventListener('resize', updateBlogWidth);

//     return () => {
//         window.removeEventListener('resize', updateBlogWidth);
//     };
// }, [blogWidth]);
const hasIndividualBlogsClass = document.body.classList.contains("individualBlogs");
console.log("hasIndividualBlogsClass",hasIndividualBlogsClass)
useEffect(() => {
    console.log("Body class:", document.body.classList);
  }, []);
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
