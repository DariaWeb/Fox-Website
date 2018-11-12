import axios from 'axios'
import * as clientCredentials from '../constants/clientCredentials'

/* eslint quote-props: [2, "consistent"] */
const create = () => {
  const baseURL = 'https://api.wolfandfox.co.nz'
  const api = axios.create({
    baseURL,
    headers: {
      'Accept': 'application/json'
    }
  })
  const getAccessToken = () => api.post('oauth/token', clientCredentials)
  const getAvailableTimeSlots = (from, count, token) => api.get(`api/v1/events?from=${from}&count=${count}`, { headers: { 'Authorization': token } })
  const bookConsultation = (inputData, token) => api.post('api/v1/events', inputData, { headers: { 'Authorization': token } })
  const submitContactForm = (inputData, token) => api.post('api/v1/contacts', inputData, { headers: { 'Authorization': token } })

  return {
    getAccessToken,
    getAvailableTimeSlots,
    bookConsultation,
    submitContactForm
  }
}
/* eslint-enable */
export default {
  create
}
