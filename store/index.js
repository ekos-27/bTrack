import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';

import reducers from '../reducers';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel1,
  blacklist: ['training'],
 };
 
 const pReducer = persistReducer(persistConfig, reducers);
 
 export const store = createStore(pReducer);
 export const persistor = persistStore(store);
