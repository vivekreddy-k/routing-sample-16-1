// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'
import {Component} from 'react'

class Header extends Component {
  renderLink = () => (
    <div className="navigation-list-container">
      <ul className="navigation-list">
        <li className="nav-item">
          <Link to="/" className="nav-title">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-title">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-title">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )

  render() {
    return (
      <div className="header-container">
        <div className="logo-title-container">
          <img
            className="logo-image"
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
            alt="wave"
          />
          <h1 className="logo-heading">Wave</h1>
        </div>
        {this.renderLink()}
      </div>
    )
  }
}

export default Header
