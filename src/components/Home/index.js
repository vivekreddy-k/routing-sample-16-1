// Write your JS code here
import './index.css'
import {Component} from 'react'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-blog-img.png"
          alt="home"
          className="home-img"
        />
        <h1 className="home-heading">Home</h1>
      </div>
    )
  }
}

export default Home