import React from 'react'
import Layout from '../Layout'
import Home from './Home'

const Index = () => {
    return (
        <Layout isHeader={true} isFooter={true} bgColor={"#fce7e8"}>
            <Home />
        </Layout>)
}

export default Index