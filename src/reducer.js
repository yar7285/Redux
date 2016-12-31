/**
 * Created by Yaroslav on 13.12.2016.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { HomeReducer } from './pages/home/index';

export default combineReducers({
   routing: routerReducer,
    ...HomeReducer
});
