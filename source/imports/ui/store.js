import { createStore } from 'redux'
import bankers from './reducers/bankers'

export default createStore(bankers);