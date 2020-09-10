import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'



const ABoutPage = () => {
    return (
        <div>
            <Layout>
            <h1>About Me</h1>
            <p>I'm an awesome human being!<Link to="/contact">Reach out!</Link></p>
            </Layout>
        </div>
    )
}

export default ABoutPage