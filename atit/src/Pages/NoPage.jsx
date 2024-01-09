import React from 'react'
import '../css/nopage.css' 
import { Link } from 'react-router-dom'

export default function NoPage() {
    return (
        <div className='nopage'>
            <>
                <h1>404 Error</h1>
                <p className="zoom-area">
                    <b> The page you're searching for may have moved or doesn't exist. Let's guide you back!</b>{" "}
                </p>
                <section className="error-container">
                    <span className="four">
                        <span className="screen-reader-text">4</span>
                    </span>
                    <span className="zero">
                        <span className="screen-reader-text">0</span>
                    </span>
                    <span className="four">
                        <span className="screen-reader-text">4</span>
                    </span>
                </section>
                <div className="link-container">
                    <Link to="/"
                        className="more-link"
                    >
                        Go to Home Page
                    </Link>
                </div>
            </>

        </div>
    )
}
