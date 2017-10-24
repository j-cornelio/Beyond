import React from 'react';
import {Link} from 'react-router';

const App = (props) => {
	return (
		<div className="container">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Youtube Videos</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      {/* load components like composition */}
      {props.children} 
    </div>
	)
}

export default App;