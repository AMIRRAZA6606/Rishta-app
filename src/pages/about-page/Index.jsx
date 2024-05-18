import React from 'react'
import Layout from '../Layout'
import About from './About'

const Index = () => {
    return (
        <Layout isHeader={true} isFooter={true}>
            <About />
        </Layout>)
}

export default Index