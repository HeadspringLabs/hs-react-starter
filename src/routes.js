import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './features/App.jsx';
import NotFoundPage from './features/shared/NotFoundPage.jsx';
import DemoFormContainer from './features/demo/DemoFormContainer.jsx';
import AboutPage from './features/about/AboutPage.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={DemoFormContainer}/>
    <Route path="demo" component={DemoFormContainer}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
