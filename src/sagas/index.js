import {
  all, put, call, takeEvery, take, fork
} from 'redux-saga/effects'
import { Api, FixtureApi } from '../services'
import { setToken } from '../utils/tokens'
import debugConfig from '../config/debugConfig'
import {
  setAccessToken, getAccessTokenFailed, setAvailableTime, getAvailableTimeFailed,
  submitContactSuccess, submitContactFailed, submitMeetUsSuccess, submitMeetUsFailed
} from '../redux/reducer'

const api = debugConfig.useFixtures ? FixtureApi : Api.create()

/* eslint-disable no-shadow */
function * getAccessToken (api) {
  const checkToken = JSON.parse(localStorage.getItem('authToken'))
  let credentials
  try {
    if (checkToken && checkToken.access_token) {
      credentials = checkToken
    } else {
      const result = yield call(api.getAccessToken)
      setToken(result.data)
      credentials = result.data
    }
    yield put(setAccessToken(credentials))
  } catch (error) {
    yield put(getAccessTokenFailed(error))
  }
}

function * getConsultationTime (api, action) {
  const checkToken = JSON.parse(localStorage.getItem('authToken'))
  let credentials
  if (checkToken && checkToken.access_token) {
    credentials = checkToken
  } else {
    const { payload } = yield take('REQUEST_ACCESS_TOKEN_SUCCESS')
    credentials = payload
  }
  const tokenHeader = `${credentials.token_type} ${credentials.access_token}`
  const { from, count } = action.payload
  try {
    const result = yield call(api.getAvailableTimeSlots, from, count, tokenHeader)
    yield put(setAvailableTime(result.data))
  } catch (error) {
    yield put(getAvailableTimeFailed(error))
  }
}

function * submitContactForm (api, action) {
  const checkToken = JSON.parse(localStorage.getItem('authToken'))
  let credentials
  if (checkToken && checkToken.access_token) {
    credentials = checkToken
  } else {
    const { payload } = yield take('REQUEST_ACCESS_TOKEN_SUCCESS')
    credentials = payload
  }
  const tokenHeader = `${credentials.token_type} ${credentials.access_token}`
  try {
    const result = yield call(api.submitContactForm, action.payload, tokenHeader)
    yield put(submitContactSuccess(result.data))
  } catch (error) {
    yield put(submitContactFailed(error))
  }
}

function * submitMeetUsForm (api, action) {
  const checkToken = JSON.parse(localStorage.getItem('authToken'))
  let credentials
  if (checkToken && checkToken.access_token) {
    credentials = checkToken
  } else {
    const { payload } = yield take('REQUEST_ACCESS_TOKEN_SUCCESS')
    credentials = payload
  }
  const tokenHeader = `${credentials.token_type} ${credentials.access_token}`
  try {
    const result = yield call(api.bookConsultation, action.payload, tokenHeader)
    yield put(submitMeetUsSuccess(result.data))
  } catch (error) {
    yield put(submitMeetUsFailed(error))
  }
}

export default function * rootSaga () {
  yield all([
    yield fork(getAccessToken, api),
    yield takeEvery('REQUEST_AVAILABLE_TIME_REQUESTED', getConsultationTime, api),
    yield takeEvery('REQUEST_SUBMIT_CONTACT_FORM_REQUESTED', submitContactForm, api),
    yield takeEvery('REQUEST_SUBMIT_MEETUS_FORM_REQUESTED', submitMeetUsForm, api)
  ])
}

/* eslint-enable */
