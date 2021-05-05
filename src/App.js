import {Route, Switch} from 'react-router-dom'

import {Component} from 'react'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import NotFound from './components/NotFound'

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />

        <div className="body-section">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
