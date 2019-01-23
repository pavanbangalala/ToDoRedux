import { createStore } from 'redux';
import rootreducer from '../reducers';

export default (store = createStore(rootreducer));
