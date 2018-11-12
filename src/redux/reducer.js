import moment from 'moment/moment'

export const REQUEST_ACCESS_TOKEN_REQUESTED = 'REQUEST_ACCESS_TOKEN_REQUESTED'
export const REQUEST_ACCESS_TOKEN_SUCCESS = 'REQUEST_ACCESS_TOKEN_SUCCESS'
export const REQUEST_ACCESS_TOKEN_FAILED = 'REQUEST_ACCESS_TOKEN_FAILED'

export const REQUEST_AVAILABLE_TIME_REQUESTED = 'REQUEST_AVAILABLE_TIME_REQUESTED'
export const REQUEST_AVAILABLE_TIME_SUCCESS = 'REQUEST_AVAILABLE_TIME_SUCCESS'
export const REQUEST_AVAILABLE_TIME_FAILED = 'REQUEST_AVAILABLE_TIME_FAILED'

export const REQUEST_SUBMIT_CONTACT_FORM_REQUESTED = 'REQUEST_SUBMIT_CONTACT_FORM_REQUESTED'
export const REQUEST_SUBMIT_CONTACT_FORM_SUCCESS = 'REQUEST_SUBMIT_CONTACT_FORM_SUCCESS'
export const REQUEST_SUBMIT_CONTACT_FORM_FAILED = 'REQUEST_SUBMIT_CONTACT_FORM_FAILED'

export const REQUEST_SUBMIT_MEETUS_FORM_REQUESTED = 'REQUEST_SUBMIT_MEETUS_FORM_REQUESTED'
export const REQUEST_SUBMIT_MEETUS_FORM_SUCCESS = 'REQUEST_SUBMIT_MEETUS_FORM_SUCCESS'
export const REQUEST_SUBMIT_MEETUS_FORM_FAILED = 'REQUEST_SUBMIT_MEETUS_FORM_FAILED'

export const SET_CONSULTATION_DATE = 'SET_CONSULTATION_DATE'

export const UPDATE_SCREEN_DIMENTIONS = 'UPDATE_SCREEN_DIMENTIONS'

export const CLEAR_FORM_STATE = 'CLEAR_FORM_STATE'

const TODAY = moment().format('DD.MM.YYYY')

export const getAccessToken = () => ({
  type: REQUEST_ACCESS_TOKEN_REQUESTED
})

export const setAccessToken = result => ({
  type: REQUEST_ACCESS_TOKEN_SUCCESS,
  payload: result
})

export const getAccessTokenFailed = error => ({
  type: REQUEST_ACCESS_TOKEN_FAILED,
  payload: error
})

export const getAvailableTime = (from, count) => ({
  type: REQUEST_AVAILABLE_TIME_REQUESTED,
  payload: {
    from,
    count
  }
})

export const setAvailableTime = result => ({
  type: REQUEST_AVAILABLE_TIME_SUCCESS,
  payload: result
})

export const getAvailableTimeFailed = error => ({
  type: REQUEST_AVAILABLE_TIME_FAILED,
  payload: error
})

export const submitContactRequest = payload => ({
  type: REQUEST_SUBMIT_CONTACT_FORM_REQUESTED,
  payload
})

export const submitContactSuccess = result => ({
  type: REQUEST_SUBMIT_CONTACT_FORM_SUCCESS,
  payload: result
})

export const submitContactFailed = error => ({
  type: REQUEST_SUBMIT_CONTACT_FORM_FAILED,
  payload: error
})

export const submitMeetUsRequest = payload => ({
  type: REQUEST_SUBMIT_MEETUS_FORM_REQUESTED,
  payload
})

export const submitMeetUsSuccess = result => ({
  type: REQUEST_SUBMIT_MEETUS_FORM_SUCCESS,
  payload: result
})

export const submitMeetUsFailed = error => ({
  type: REQUEST_SUBMIT_MEETUS_FORM_FAILED,
  payload: error
})

export const setConsultationDate = payload => ({
  type: SET_CONSULTATION_DATE,
  payload
})

export const updateScreenDimentions = payload => ({
  type: UPDATE_SCREEN_DIMENTIONS,
  payload
})

export const resetForms = () => ({
  type: CLEAR_FORM_STATE
})

const setCountForSchedules = (width) => {
  if (width > 768) return 5
  if (width <= 768 && width > 376) return 4
  return 1
}

const initialState = {
  screenSize: {
    width: 0,
    height: 0
  },
  credentials: {},
  loginError: null,
  error: null,
  daySelected: {},
  loading: false,
  consultations: {
    count: setCountForSchedules(window.innerWidth),
    lastDate: TODAY,
    availableTime: {},
    fetching: false,
    success: false,
    error: null
  },
  contactForm: {
    fetching: false,
    send: false,
    submitFailed: false,
    error: null
  },
  meetusForm: {
    fetching: false,
    send: false,
    submitFailed: false,
    error: null
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_ACCESS_TOKEN_REQUESTED:
      return { ...state, loading: true }
    case REQUEST_ACCESS_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        credentials: { ...action.payload }
      }
    case REQUEST_ACCESS_TOKEN_FAILED:
      return {
        ...state,
        loading: false,
        loginError: action.payload
      }
    case REQUEST_AVAILABLE_TIME_REQUESTED:
      return {
        ...state,
        consultations: {
          ...state.consultations,
          fetching: true,
          success: false
        }
      }
    case REQUEST_AVAILABLE_TIME_SUCCESS:
      return {
        ...state,
        consultations: {
          ...state.consultations,
          fetching: false,
          availableTime: Object.assign({}, state.consultations.availableTime, action.payload),
          lastDate: [...Object.keys(action.payload)].slice(-1).join(),
          error: null,
          success: true
        }
      }
    case REQUEST_AVAILABLE_TIME_FAILED:
      return {
        ...state,
        consultations: {
          ...state.consultations,
          fetching: false,
          success: false,
          error: action.payload
        }
      }
    case REQUEST_SUBMIT_CONTACT_FORM_REQUESTED:
      return {
        ...state,
        contactForm: {
          fetching: true, send: false, submitFailed: false, error: null
        }
      }
    case REQUEST_SUBMIT_CONTACT_FORM_SUCCESS:
      return {
        ...state,
        contactForm: {
          fetching: false, send: true, submitFailed: false, error: null
        }
      }
    case REQUEST_SUBMIT_CONTACT_FORM_FAILED:
      return {
        ...state,
        contactForm: {
          fetching: false, send: true, submitFailed: true, error: action.payload
        }
      }
    case REQUEST_SUBMIT_MEETUS_FORM_REQUESTED:
      return {
        ...state,
        meetusForm: {
          fetching: true, send: false, submitFailed: false, error: null
        }
      }
    case REQUEST_SUBMIT_MEETUS_FORM_SUCCESS:
      return {
        ...state,
        meetusForm: {
          fetching: false, send: true, submitFailed: false, error: null
        }
      }
    case REQUEST_SUBMIT_MEETUS_FORM_FAILED:
      return {
        ...state,
        meetusForm: {
          fetching: false, send: true, submitFailed: true, error: action.payload
        }
      }
    case SET_CONSULTATION_DATE:
      return {
        ...state,
        daySelected: action.payload
      }
    case UPDATE_SCREEN_DIMENTIONS:
      return {
        ...state,
        screenSize: { ...action.payload },
        consultations: {
          ...state.consultations,
          count: setCountForSchedules(action.payload.width)
        }
      }
    case CLEAR_FORM_STATE:
      return {
        ...state,
        screenSize: { ...action.payload },
        meetusForm: {
          ...state.meetusForm, fetching: false, send: false, submitFailed: false, error: false
        },
        contactForm: {
          ...state.contactForm, fetching: false, send: false, submitFailed: false, error: false
        }
      }
    default:
      return state
  }
}

export default reducer
