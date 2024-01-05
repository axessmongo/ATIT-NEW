import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'

export default function MainCourse({ coursePage }) {
    return (
        <div>
            <div className={`${coursePage && "d-none"}`}>
                <Navbar coursePage = {coursePage}/>
            </div>
            <Outlet />
        </div>
    )
}
