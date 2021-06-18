import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/appSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { selectUser, applyJob, wishlistJob, clearWishlist, toggleShowAppliedJobs, fetchAppliedJobs } from '../features/appSlice';
import { combineReducers } from 'redux';


// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['selectUser', 'applyJob', 'wishlistJob', 'clearWishlist', 'toggleShowAppliedJobs', 'fetchAppliedJobs']
// };


// const persistedReducer = persistReducer(persistConfig, appReducer);

// const store = configureStore({
//   reducer: persistedReducer
// })

// const persistor = persistStore(store);


// export { store, persistor };


export default configureStore({
  reducer: {
    app: appReducer,
  },
});

