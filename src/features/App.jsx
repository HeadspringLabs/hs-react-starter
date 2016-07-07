import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const App = ({children}) => (
  <div className="container">
    <h1>Example</h1>
    <Link to="/demo" className="btn btn-link">Demo</Link>
    {' | '}
    <Link to="/about" className="btn btn-link">About</Link>
    <br/>
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.element
};

export default App;
