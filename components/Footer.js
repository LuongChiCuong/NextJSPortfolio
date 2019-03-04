import Link from 'next/link'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <div class="footer-logo">
              <Link href="/">
                  <a className="logo"><strong>Cuong</strong> <span>Luong</span></a>
              </Link>
            </div>
            <ul className="icons">
                <li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon alt fa-quora"><span className="label">Quora</span></a></li>
                <li><a href="#" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
                <li><a href="mailto:luongchicuong93@gmail.com?Subject=Hello%20Awesome%20Guy" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; Made with love by CuongLuong</li>
                <li>Design by: <a href="https://html5up.net">HTML5 UP</a></li>
            </ul>
        </div>
    </footer>
)

export default Footer
