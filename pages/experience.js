import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
import BannerLanding from '../components/BannerLanding'

export default () => (
    <Layout>
        <Head>
            <title>Working Experience</title>
            <meta name="description" content="Cuong Luong | The working experience of Cuong Luong" />
        </Head>

        <div>
            <BannerLanding bannerContent='Working Experiences'/>
            <div id="main">
              <div className="exp-nav">
                <a href="#">Product Management</a>
                <a href="#">Technical Development</a>
              </div>
              <div>
              <ul className="exp-list inner">
                <li className="exp-list-item">
                  <p className="exp-item-time"><i>AUGUST, 2018 - PRESENT</i></p>
                  <p className="exp-item-role">Product Owner | FPT IS</p>
                  <p className="exp-item-products">Products: <b>Smart Transportation, Face Recognition</b></p>
                  Responsibilities:
                  <ul>
                    <li>Designed strategic plan for component development practices to support future projects.</li>
                    <li>Oversaw product deployments, product market-fit into pre-production and the roll out into production.</li>
                    <li>Focused on building critical features up front in order to identify constraints and technical challenges.</li>
                    <li>Wireframe and write requirements/ specification for all new product features.</li>
                    <li>Allocated and approved team resource usage.</li>
                    <li>Build Scrum framework for product team and development team.</li>
                    <li>Work closely with Vietnamese government client and global partner (Axis, Bosch, FLIR,...)</li>
                  </ul>
                </li>
                <li className="exp-list-item">
                  <p className="exp-item-time"><i>MAY 2017, AUGUST, 2018</i></p>
                  <p className="exp-item-role">Product Owner | Mobiclix Pte (Singapore company)</p>
                  <p className="exp-item-products">Products: <b>Mobile Payment Gateway, WWEsea, Hopster, Mcafee, Mocoplay</b></p>
                  Responsibilities:
                  <ul>
                    <li>Owned and prioritized product backlog.</li>
                    <li>Develop new products and enhance existing products.</li>
                    <li>Assist with priorition decision making during sprint planning.</li>
                    <li>Manage the product lifecycle from market requirements.</li>
                    <li>Build Scrum team and process from scratch.</li>
                    <li>Wireframe and write user story for all new product features.</li>
                    <li>Engage closely with the engineering team to help determine the best technical implementation methods as well as reasonable implementation schedule.</li>
                  </ul>
                </li>
                <li className="exp-list-item">
                  <p className="exp-item-time"><i>APRIL, 2016 - MAY, 2017</i></p>
                  <p className="exp-item-role">Front End Developer | Floware (USA company)</p>
                  <p className="exp-item-products">Products: <b>Floware application</b></p>
                  Responsibilities:
                  <ul>
                    <li>Build web application product based on AngularJS 1.</li>
                    <li>Develop feature drag and drop.</li>
                    <li>Build Ruby on Rails API.</li>
                    <li>Developed designs to meet specific requirements such as quick-loading sites with particular layouts.</li>
                  </ul>
                </li>
                <li className="exp-list-item">
                  <p className="exp-item-time"><i>MARCH, 2015 - APRIL, 2016</i></p>
                  <p className="exp-item-role">Front End Developer | The Nailsuperstore (USA company)</p>
                  <p className="exp-item-products">Products: <b>E-commerce website Nailsuperstore.com</b></p>
                  Responsibilities:
                  <ul>
                    <li>Developed brand strategy and statistics systems.</li>
                    <li>Implement Email marketing.</li>
                    <li>Research and develop new web technogoly.</li>
                    <li>Convert PSD to HTML/CSS</li>
                    <li>Implement responsive website.</li>
                  </ul>
                </li>
              </ul>
              </div>

            </div>

        </div>
    </Layout>
)
