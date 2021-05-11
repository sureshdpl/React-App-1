import rootReducer from './index';
import { createStore } from 'redux';

const appStore = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default appStore;