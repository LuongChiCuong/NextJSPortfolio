import PropTypes from 'prop-types'

const BannerLanding = (props) => (
    <section id="banner">
        <div className="inner">
            <header className="major">
                <h1>{props.bannerContent}</h1>
            </header>
            <div className="content">
                <p>
                Creative - Immersive - Difference.</p>
            </div>
        </div>
    </section>
)

BannerLanding.propTypes = {
  bannerContent: PropTypes.string
}

export default BannerLanding
