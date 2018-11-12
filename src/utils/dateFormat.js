import moment from 'moment'

export function dateFormat (year, month, day) {
  const date = `${year}-${month}-${day}`
  const fullDate = moment(date, 'YYYY-MM-DD').format('D MMMM YYYY')
  const shortWeekday = moment(date, 'YYYY-MM-DD').format('ddd')
  const shortMonth = moment(date, 'YYYY-MM-DD').format('MMM')
  const weekday = moment(date, 'YYYY-MM-DD').format('dddd')
  const dayNum = moment(date, 'YYYY-MM-DD').format('D')
  return {
    fullDate,
    shortWeekday,
    weekday,
    shortMonth,
    dayNum
  }
}

export function formatEventTime (date) {
  const fullDate = moment(date, 'YYYY-MM-DD HH').format('D MMMM YYYY')
  const dayMonth = moment(date, 'YYYY-MM-DD HH').format('DD MMMM')
  const dayShortMonth = moment(date, 'YYYY-MM-DD HH').format('DD MMM')
  const weekday = moment(date, 'YYYY-MM-DD HH').format('dddd')
  const shortWeekday = moment(date, 'YYYY-MM-DD HH').format('ddd')
  const time = moment(date, 'YYYY-MM-DD HH:mm').format('h:mm a')
  return {
    fullDate,
    weekday,
    shortWeekday,
    dayMonth,
    dayShortMonth,
    time
  }
}

