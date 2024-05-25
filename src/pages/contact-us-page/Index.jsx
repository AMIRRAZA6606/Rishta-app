import React from 'react'
import Layout from '../Layout'
import ContactUs from './ContactUs'
import "./contactUs.css"

const Index = () => {
    return (
        <Layout isHeader={true} isFooter={true}>
            <ContactUs />
        </Layout>)
}

export default Index