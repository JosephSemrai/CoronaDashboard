import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import notificationsReducer from './notificationsReducer';

const rootReducer = combineReducers({
  notifications: notificationsReducer,
  form: formReducer
});

export default rootReducer;
