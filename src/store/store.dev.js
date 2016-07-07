import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../rootReducer';

const store = createStore(
  rootReducer,
  window.devToolsExtension ? window.devToolsExtension() : f => f,
  applyMiddleware(thunk)
);

// Enable Webpack hot module replacement for reducers
module.hot.accept('../rootReducer', () => {
  const nextReducer = require('../rootReducer').default;
  store.replaceReducer(nextReducer);
});

export default store;
