import React from 'react'
import Header from "../pages/Header"
import Footer from "../pages/Footer"
import "./Layout.css"

const Layout = ({ children, isHeader, isFooter }) => {
    return (
        <>
            {isHeader && <Header />}
            {children}
            {isFooter && <Footer />}
        </>
    )
}

export default Layout