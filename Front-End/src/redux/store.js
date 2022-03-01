import { createStore } from  'redux';
import LoginReducer from './login/LoginReducer';
import MemberReducer from './member/MemberReducer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const memberPersistConfig = {
    key: 'member',
    storage,
};


const store = createStore
(
    persistReducer(memberPersistConfig,MemberReducer),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
const persistor = persistStore(store);
export {store,persistor};