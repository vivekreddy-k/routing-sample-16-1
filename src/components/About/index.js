// Write your JS code here
import './index.css'
import {Component} from 'react'

class About extends Component {
  render() {
    return (
      <div className="about-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-blog-img.png"
          alt="about"
          className="about-img"
        />
        <h1 className="about-heading">About</h1>
        <p className="about-paragraph">
          I love to create! I am a frontend web developer
        </p>
      </div>
    )
  }
}

export default About
