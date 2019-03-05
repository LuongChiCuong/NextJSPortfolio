import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
import BannerLanding from '../components/BannerLanding'

export default () => (
    <Layout>
        <Head>
            <title>About Cuong Luong</title>
            <meta name="description" content="Cuong Luong | Product Owner information" />
        </Head>

        <div>
            <BannerLanding bannerContent='About Cuong Luong'/>

            <div id="main">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h2>My Journey</h2>
                        </header>
                        <p>
                          I started studying information technology at University of Science HCM.
                          I learned a lot of general knowledge about IT industry. Sometimes I feel crazy about backend programming languages such as C#, VB.NET,...
                          whereas I feel very excited to learn HTML/CSS and Javascript.
                          <br/><br/>
                          After studying here, I realized I liked the beauty of the websites created by famous Front End programmers on <a href="https://www.awwwards.com">Awwwards.com</a>.
                          Since then I have researched and developed the Front End Developer path. It is an interesting way for those who like to build the UI of the website and passionate about the movements on the web.
                          <br/> <br/>
                          My journey begins here ...
                        </p>
                    </div>
                </section>
                <section id="two" className="spotlights">
                    <section>
                        <Link href="/generic">
                            <a className="image"><img src="/static/images/pic08.jpg" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Journey to FrontEnd Developer.</h3>
                                </header>
                                <p>
                                  What to learn to do Front End developers?
                                  <br/>
                                  That's a question I often see on Quora. To do this you must first have passion, passion to create interactive interfaces with end users.
                                  <br/><br/>
                                  Your job will usually be to discuss with UI designers to create eye-catching, impressive interfaces for users. Work with the UX designer to update the UI to be user-friendly.
                                  <br/><br/>
                                  It is possible that many people feel that it is not complicated, but its difficult is how to combine HTML / CSS / Javascript technologies to create perfect UI.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="/generic">
                            <a className="image"><img src="/static/images/pic09.jpg" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Journey to Product Owner.</h3>
                                </header>
                                <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Education</h3>
                                </header>
                                <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            </div>
                        </div>
                    </section>
                </section>
            </div>

        </div>
    </Layout>
)
