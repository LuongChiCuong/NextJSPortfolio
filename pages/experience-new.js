import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
import BannerLanding from '../components/BannerLanding'

export default () => (
    <Layout>
        <Head>
            <title>Work Experiences</title>
            <meta name="description" content="Elements Page" />
        </Head>

        <div id="main" className="alt">

            <div>Header</div>
            <div>Content</div>
            <div>Footer</div>

        </div>
    </Layout>
)
