import Link from 'next/link'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <div className="footer-logo">
              <Link href="/">
                  <a className="logo"><strong>Cuong</strong> <span>Luong</span></a>
              </Link>
            </div>
            <ul className="icons">
                <li><a href="https://www.facebook.com/andrysheva2506" target="_blank" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="https://www.quora.com/profile/Cuong-Luong-6" target="_blank" className="icon alt fa-quora"><span className="label">Quora</span></a></li>
                <li><a href="https://www.linkedin.com/in/luongchicuong93" target="_blank" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
                <li><a href="mailto:luongchicuong93@gmail.com?Subject=Hello%20Awesome%20Guy" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; Made with love by CuongLuong</li>
                <li>NextJS Template by: <a href="https://html5up.net">HTML5 UP</a></li>
            </ul>
        </div>
    </footer>
)

export default Footer
