import { combineReducers } from 'redux';
import {reducer as form} from 'redux-form';
import demo from './features/demo/demoReducer';

const rootReducer = combineReducers({
  form,
  demo
});

export default rootReducer;
