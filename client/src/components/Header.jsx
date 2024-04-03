import React from 'react'
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Header.css"

const Header = () => {

    const [activeTab, setAcriveTAb] = useState("Home")

    return (
        <>
            <div className="header">
                <p className="logo">
                    User Managment System
                </p>
                <div className="header-right">
                    <Link to="/">
                        <p className={`${activeTab === "Home" ? "active" : ""}`}
                            onClick={() => setAcriveTAb("Home")}>Home</p>
                    </Link>
                    <Link to="/add">
                        <p className={`${activeTab === "AddUser" ? "active" : ""}`}
                            onClick={() => setAcriveTAb("AddUser")}>Add User</p>
                    </Link>
                    {/* <Link to="/About">
                        <p className={`${activeTab === "About" ? "active" : ""}`}
                            onClick={() => setAcriveTAb("About")}>About</p>
                    </Link> */}
                </div>
            </div>
        </>
    )
}

export default Header
