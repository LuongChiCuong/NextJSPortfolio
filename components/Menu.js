import PropTypes from 'prop-types'
import Link from 'next/link'

class Menu extends React.Component {
  constructor(props) {
      super(props);
      this.state = {isCTAToggleOn: true};
      this.handleCTAClick = this.handleCTAClick.bind(this);
  }

  handleCTAClick() {
    this.setState(prevState => ({
      isCTAToggleOn: !prevState.isCTAToggleOn
    }));
  }

  render () {
    return (
      <nav id="menu">
          <div className="inner">
              <ul className="links">
                  <li><Link href="/"><a><span onClick={this.props.onToggleMenu}>Home</span></a></Link></li>
                  <li><Link href="/experience"><a><span onClick={this.props.onToggleMenu}>Working Experience</span></a></Link></li>
                  <li><Link href="/product"><a><span onClick={this.props.onToggleMenu}>Products Achievement</span></a></Link></li>
                  <li><Link href="/about"><a><span onClick={this.props.onToggleMenu}>My Info</span></a></Link></li>
              </ul>
              <ul className="actions vertical">
                  <li><a href="javascript:;" className="button special fit"
                      onClick={this.handleCTAClick}>{this.state.isCTAToggleOn ? 'GET IN TOUCH' : '+84 937 422 456'}</a></li>
                  <li><a href="https://drive.google.com/file/d/1fOM47U48ztiMGTjWny5TafDgxr_oHOk5/view?usp=sharing" target="_blank" className="button fit">Download My Resume</a></li>
              </ul>
          </div>
          <a className="close" onClick={this.props.onToggleMenu} href="javascript:;">Close</a>
      </nav>``
    )
  }
}

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
