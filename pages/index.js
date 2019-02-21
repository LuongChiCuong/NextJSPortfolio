import Link from 'next/link'

import Layout from '../components/Layout'
import Banner from '../components/Banner'

export default () => (
    <Layout>
        <div>
            <Banner />

            <div id="main">
                <section id="one" className="tiles">
                    <article style={{backgroundImage: `url('/static/images/pic01.jpg')`}}>
                        <header className="major">
                          <h3>McAfee</h3>
                          <p>McAfee Mobile Payment Version</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic02.jpg')`}}>
                        <header className="major">
                            <h3>WWE</h3>
                            <p>WWE Mobile Payment Version</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic03.jpg')`}}>
                        <header className="major">
                            <h3>Hopster</h3>
                            <p>Hopster Mobile Payment Version</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic04.jpg')`}}>
                        <header className="major">
                            <h3>Floware</h3>
                            <p>All In One Management Product</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic05.jpg')`}}>
                        <header className="major">
                            <h3>Vanguard Cardfight</h3>
                            <p>Vanguard Animae Mobile Payment Version</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic06.jpg')`}}>
                        <header className="major">
                            <h3>The Nailsuperstore</h3>
                            <p>The biggest ecommerce in nail supply market.</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                </section>
                <section id="two">
                    <div className="inner">
                        <header className="major">
                            <h2>Something about me</h2>
                        </header>
                        <p>
                          I started my career with FrontEnd developer.
                          It is an interesting way for programmers who like immersive and interative on Web Platform.
                          Along with being passionate about managing and developing products,
                          I started with a different way that is Product Owner.
                          It is a great movement to show your managerment, creative skills and product enthusiasm through each Sprint in the Scrum framework.
                        </p>
                        <ul className="actions">
                            <li><Link href="/about"><a className="button next">Explore Me</a></Link></li>
                        </ul>
                    </div>
                </section>
            </div>

        </div>
    </Layout>
)
