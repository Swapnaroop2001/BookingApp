import React from 'react'
import './Navbar.css'
export default function Navbar() {
    return (
        <div>
            <nav class="navbar">
                <div className="container">
                    <a class="navbar-brand">StayEase</a>
                    <div className="navItems">
                            <button class="btn btn-dark" type="button">Login</button>
                            <span className="button-space" />
                            <button class="btn btn-dark" type="button">Register</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}
