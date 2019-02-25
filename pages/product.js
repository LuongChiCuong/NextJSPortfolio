import Head from "next/head"

import Layout from '../components/Layout'

export default () => (
    <Layout>
        <Head>
            <title>Products Achievement</title>
            <meta name="description" content="The products was contributed by Cuong Luong | Product Owner" />
        </Head>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Products Achievement</h1>
                    </header>
                    <ul className="products">
                      <li>
                        <span className="image main"><img src="/static/images/mcafee-pc.png" alt="McAfee Security" /></span>
                        <h2>McAfee Security - Mobile Payment Platform</h2>
                        <p><b>URL:</b> <a href="http://mcafeemena.com/"> http://mcafeemena.com/</a></p>
                        <p><b>Goal:</b> McAfee cooperates with Mobiclix to build McAfeeSecurity product on mobile payment services, aiming to expand the market to developing countries.
                        Support users to access products more quickly.</p>
                        <p><b>Market:</b> Egypt, Oman, Pakistan</p>
                        <p><b>Role:</b> Product Owner</p>
                      </li>
                      <li>
                        <span className="image main"><img src="/static/images/wwe-pc.png" alt="WWE" /></span>
                        <h2>WWE - Mobile Payment Platform</h2>
                        <p><b>URL:</b> <a href="http://wwesea.com/"> http://wwesea.com/</a></p>
                        <p><b>Goal:</b> WWE cooperates with Mobiclix to build WWE Entertainment product on mobile payment services, aiming to expand the market to developing countries.
                        Support users to access products more quickly.</p>
                        <p><b>Market:</b> Malaysia, Thailand, Egypt</p>
                        <p><b>Role:</b> Product Owner</p>
                      </li>
                      <li>
                        <span className="image main"><img src="/static/images/hopster-pc.png" alt="Hopster TV" /></span>
                        <h2>Hopster - Mobile Payment Platform</h2>
                        <p><b>URL:</b> <a href="http://wwesea.com/"> http://wwesea.com/</a></p>
                        <p><b>Goal:</b> Hopster cooperates with Mobiclix to build Hopster TV product on mobile payment services, aiming to expand the market to developing countries.
                        Support users to access products more quickly.</p>
                        <p><b>Market:</b> United Kingdom, Poland, Oman</p>
                        <p><b>Role:</b> Product Owner</p>
                      </li>
                      <li>
                        <span className="image main"><img src="/static/images/vanguard-pc.png" alt="Vanguard Cardfight" /></span>
                        <h2>Vanguard - Mobile Payment Platform</h2>
                        <p><b>URL:</b> <a href="http://www.vanguard-cardfight.com/"> http://www.vanguard-cardfight.com/</a></p>
                        <p><b>Goal:</b> Busiroads cooperates with Mobiclix to build Vanguard Anime product on mobile payment services, aiming to expand the market to developing countries.
                        Support users to access products more quickly.</p>
                        <p><b>Market:</b> United Kingdom, France</p>
                        <p><b>Role:</b> Product Owner</p>
                      </li>
                      <li>
                        <span className="image main"><img src="/static/images/floware-pc.png" alt="Floware" /></span>
                        <h2>Floware - All in One managerment app.</h2>
                        <p><b>URL:</b> <a href="https://www.floware.com/"> https://www.floware.com/</a></p>
                        <p><b>Goal:</b> Floware.</p>
                        <p><b>Market:</b> USA</p>
                        <p><b>Role:</b> Front End Developer</p>
                      </li>
                      <li>
                        <span className="image main"><img src="/static/images/nailsuperstore-pc.png" alt="McAfee Security" /></span>
                        <h2>The Nailsuperstore - Top ecommerce websites in USA</h2>
                        <p><b>URL:</b> <a href="https://www.nailsuperstore.com/"> http://www.nailsuperstore.com/</a></p>
                        <p><b>Goal:</b> Nailsuperstore.</p>
                        <p><b>Market:</b> USA</p>
                        <p><b>Role:</b> Front End Developer</p>
                      </li>
                    </ul>

                </div>
            </section>
        </div>
    </Layout>
)
