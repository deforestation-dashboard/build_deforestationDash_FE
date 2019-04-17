import { combineReducers } from 'redux';
import { mapReducer } from './mapReducer';
import { countryReducer } from './countryReducer';

export default combineReducers({ mapReducer, countryReducer });
