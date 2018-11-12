export default {
  getAccessToken: () => ({
    ok: true,
    data: require('../mock_data/credentials')
  }),
  getAvailableTimeSlots: (from, count, token) => ({
    ok: true,
    data: require('../mock_data/consultationTimes')
  }),
  submitContactForm: token => ({
    ok: true,
    data: require('../mock_data/submitContactForm')
  }),
  bookConsultation: token => ({
    ok: true,
    data: require('../mock_data/bookConsultation')
  })
}
