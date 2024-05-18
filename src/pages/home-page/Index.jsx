import React from 'react'
import Layout from '../Layout'
import Home from './Home'

const Index = () => {
    return (
        <Layout isHeader={true} isFooter={false}>
            <Home />
        </Layout>)
}

export default Index