import { call, put, take, takeEvery } from 'redux-saga/effects'
import { incrementCounter, initFetch, stopUpdate, setError } from '../actions/middlewareActions'

function resolvingPromise(returnValue, delayMs = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(returnValue), delayMs)
  });
}

function rejectingPromise(delayMs = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Failure from backend')), delayMs)
  });
}

export function* handler (action) {
  yield put(initFetch())
  const returnValue = 1;
  const returned = yield call(resolvingPromise, returnValue, 1000);
  yield put(stopUpdate())
  yield put(incrementCounter(returned))
}

export function* failingHandler (action) {
  yield put(initFetch())
  try {
    yield call(rejectingPromise, 1000);
  } catch (err) {
    yield put(stopUpdate())
    yield put(setError(err.message))
  }
}

export default function* rootSaga() {
  yield takeEvery("INCREMENT_ASYNC", handler)
  yield takeEvery("INCREMENT_FAILING", failingHandler)
}
