import React from 'react';
import {Link} from 'react-router';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => (
  <div>
    <h2>About</h2>
    <p>{`This is an example of a base application built on React and Redux.`}</p>
    <p>
      <Link to="/badlink">Click this bad link</Link> to see the 404 page.
    </p>
  </div>
);

export default AboutPage;
