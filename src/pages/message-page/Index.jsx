import React from 'react'
import Layout from '../Layout'
import Message from './Message'
import './message.css'

const Index = () => {
    return (
        <Layout isHeader={true} isFooter={false}>
            <Message />
        </Layout>
    )
}

export default Index