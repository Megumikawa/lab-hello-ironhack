import React from 'react'
import ReactDOM from 'react-dom'
import '../public/style.css'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
      
        <div className="top-container">
          <div className="top-nav">
            <img src="/images/ironhack-logo.svg"></img>
            <img src="/images/menu-top.svg"></img>
          </div>
          <div className="top-inner">
            <h1>Say Hello to ReactJs</h1>
            <p>You will learn how to use the most popularrontend library, and become a super Ninja developer.</p>
            <a>Awesome!</a>
          </div>
          </div>
        <div className="list-container">
          <ul className="list-inner">
            <li>
              <img src="/images/icon1.png"></img>
              <h2>Declarative</h2>
              <p>React makes it painless to create interactive UIs.</p>
            </li>
            <li>
              <img src="/images/icon2.png"></img>
              <h2>Components</h2>
              <p>Build encapsulated components that manage their state.</p>
            </li>
            <li>
              <img src="/images/icon3.png"></img>
              <h2>Single-Way</h2>
              <p>A set of immutable values are passed to the component's.</p>
            </li>
            <li>
              <img src="/images/icon4.png"></img>
              <h2>JSX</h2>
              <p>Statically-typed, designed to run on modern browsers.</p>
            </li>
          </ul>
        </div>
      </React.Fragment>
    )
  }
}

ReactDOM.render( <App />, document.querySelector('#myApp'))

