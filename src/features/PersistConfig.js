import { persistStore, persistReducer } from 'readux-persist';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './appSlice';
import storage from 'redux-persist/lib/storage';

export const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistReducer,
    applyMiddleware()
)

const persistor = persistStore(store);

export { store, persistor };