import React from 'react'
import Layout from '../Layout'
import Profile from './Profile'
import './Profile.css'

const Index = () => {
    return (
        <Layout isHeader={true} isFooter={true}>
            <Profile />
        </Layout>
    )
}

export default Index