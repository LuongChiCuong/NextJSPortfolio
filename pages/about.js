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
                        <Link href="/">
                            <a className="image"><img src="/static/images/journey-fe.jpg" alt="" /></a>
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
                                  <br/>
                                  Your job will usually be to discuss with UI designers to create eye-catching, impressive interfaces for users. Work with the UX designer to update the UI to be user-friendly.
                                  <br/>
                                  It is possible that many people feel that it is not complicated, but its difficult is how to combine HTML / CSS / Javascript technologies to create perfect UI.
                                </p>
                                <p><b>&raquo; Knowledge:</b> &nbsp; E-commerce, Responsive Web Design, Wireframe, Fullstack Web Development.</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="/">
                            <a className="image"><img src="/static/images/journey-po.jpg" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Journey to Product Owner.</h3>
                                </header>
                                <p>
                                  Why do I switch to being a product owner?
                                  <br/>
                                  I often encounter this question when I go to interview in many companies.
                                  For me the high level of product development must be work capable of managing and giving product development strategies.
                                  <br/>
                                  I have experience in website development, as well as passion for user interface development.
                                  So my goal is to use the experience gained with the soft skills I learned to advance to a position where I can bring products to new levels.
                                  <br/>
                                  In my opinion, this position requires good soft skills such as operation, communication, team-work and understand Scrum framework work based on Agile Manifesto.
                                </p>
                                <p><b>&raquo; Knowledge:</b>&nbsp; Agile Product Management, Team Management, Scrum framework.</p>
                            </div>
                        </div>
                    </section>
                    <section class="info-certs">
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Certificates</h3>
                                </header>
                                <ul>
                                    <li>Digital Product Management | University of Virginia (USA)</li>
                                    <li>User Experiece Design | Georgia Insitute of Technogology (USA)</li>
                                    <li>Bachelor's degree Information Technology | University of Science (VN)</li>
                                </ul>
                            </div>
                        </div>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Skills</h3>
                                </header>
                                <ul>
                                    <li>Communication.</li>
                                    <li>Critical thinking.</li>
                                    <li>Leadership.</li>
                                    <li>Front-End Development = [HTML5, CSS3, VueJS, NextJS, Angular]</li>
                                    <li>Back-End Development = [NodeJS, MongoDB, Ruby on Rails, MySQL]</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>
            </div>

        </div>
    </Layout>
)
