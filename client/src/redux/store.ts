import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';

import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

export type RootState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger as SagaMiddleware);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

const storeObj = { store, persistor };
export default storeObj;
