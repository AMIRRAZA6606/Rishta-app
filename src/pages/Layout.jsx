import React from 'react'
import Header from "../pages/Header"
import Footer from "../pages/Footer"
import "./Layout.css"

const Layout = ({ children, isHeader, isFooter, bgColor }) => {
    return (
        <>
          {isHeader && <Header bgColor={bgColor} />}
            {children}
            {isFooter && <Footer />}
        </>
    )
}

export default Layout