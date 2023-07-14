import { createStore } from 'redux';
import rootReducer from '../component/reducers';

const store = createStore(rootReducer);

export default store;
