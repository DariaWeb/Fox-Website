import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import IMAGES from '../utils/ImagesProvider'
import { MEET_US } from '../content/meetusContent'
import Loader from '../components/Loader'
import { media } from '../theme/AppStyles'
import { formatEventTime } from '../utils/dateFormat'
import { getAvailableTime, setConsultationDate } from '../redux/reducer'
import HeadMeta from '../components/HeadMeta'

const SectionWrapper = styled.div`
  font-family: 'Roboto-Regular', sans-serif;
  margin: 45px 40px 113px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0 40px 120px;
  }
  @media (max-width: 376px) {
    margin: 19px 50px 25px;
  }
`

const SummaryCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;
  width: 62.5%;
  max-width: 327px;
  margin: 0 40px 0 0;
  @media (max-width: 768px) {
    max-width: unset;
    margin: 0;
  }
  @media (max-width: 376px) {
    width: 100%;
  }
`

const CardShortInfo = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.small};
  text-align: left;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  letter-spacing: 0.2px;
  animation-name: fadeInTop;
  animation-duration: 800ms;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;

  @media (max-width: 376px) {
    padding-bottom: 8px;
  }
`

const SectionTitle = styled.h4`
  font-family: PatchouliDisplay, sans-serif;
  font-size: ${({ theme }) => theme.fontSize.h4};
  font-weight: normal;
  color: ${({ theme }) => theme.colors.grey};
  letter-spacing: 0.2px;
  margin: 26px 0 14px 0;
  text-align: left;
  line-height: 1.27;
  animation-name: fadeInLeft;
  animation-duration: 800ms;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  ${media.tablet`font-size: 22px;`};
  ${media.tablet`margin: 33px 0 13px 0;`};

   @media (max-width: 600px) {
    margin: 29px 0 8px 0;
  }

  ${media.phone`margin: 27px 0 0 0;`};
`

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 891px;
  max-width: 65%;
  min-height: 456px;
  color: ${({ theme }) => theme.colors.grey};
  animation-name: fadeIn;
  animation-duration: 800ms;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  position: relative;
  @media (max-width: 768px) {
    max-width: 100%;
    margin: 60px 0 0 0;
    min-height: auto;
  }
  @media (max-width: 376px) {
    margin: 47px 0 0 0;
  }
`

const ControlsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: -12px 0 15px;
  padding-bottom: 16px;
  border-bottom: 1px solid  rgba(74, 74, 74, 0.3);
  position: relative;
  font-family: PatchouliDisplay, sans-serif;
  font-size: ${({ theme }) => theme.fontSize.base};

  @media (max-width: 376px) {
    margin: 0 0 10px 0;
    padding-bottom: 9px;
    font-size: ${({ theme }) => theme.fontSize.h5};
    height: 30px;
    line-height: 1;
  }
`

const CalendarBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 440px;
`

const Col = styled.div`
  flex: 1;
  width: 150px;
  max-width: 17.79%;
  @media (max-width: 768px) {
    max-width: 21.804%;
  }
  @media (max-width: 376px) {
    max-width: 100%;
  }
`

const ColHeader = styled.div`
  font-family: PatchouliDisplay, sans-serif;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 37px;
  border-bottom: solid 1px ${({ theme }) => theme.colors.grey};
  
  @media (max-width: 768px) {
    font-size: calc(16px + (18 - 16) * ((100vw - 376px) / (786 - 376)));
  }
`

const Date = styled.span`
  margin-right: 8px;
`

const WeekDay = styled.span`
  font-size: ${({ theme }) => theme.fontSize.base};
  opacity: 0.5;
`

const TileWrapper = styled.div`
  a {
        text-decoration: none;
        width: 100%;
        height: 100%;
        color: ${({ theme }) => theme.colors.grey};
      }
`

const Tile = styled.div`
  border-left: 3px solid ${({ theme }) => theme.colors.orange};
  display: flex;
  align-items: center;
  margin: 10px 0;
  position: relative;
  background: rgba(247, 214, 102, 0.2);
  padding-right: 12px;
  cursor: pointer;
`

const TileContent = styled.div`
  padding: 10px 10px 9px;
  flex: 1;
  text-align: left;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: 1.43;
`

const TileArrow = styled.img`
  width: 6.4px;
  height: 11.3px;
  opacity: 0.3;
`

const CalendarHeaderArrow = styled.img`
  width: 10px;
  height: 17.9px;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;

  &.arrow-left {
    transform: rotate(180deg);
    left: 0;
  }

  &.inactive {
    opacity: 0.3;
  }
`

class MeetUs extends Component {
  static propTypes = {
    credentials: PropTypes.shape({}),
    consultations: PropTypes.shape({
      count: PropTypes.number,
      lastDate: PropTypes.string,
      availableTime: PropTypes.shape({})
    }),
    width: PropTypes.number,
    requestAvailableConsultations: PropTypes.func,
    selectDate: PropTypes.func
  }

  state = {
    startIndex: 0,
    viewMode: 'desktop'
  }

  componentDidMount () {
    const {
      credentials, consultations, requestAvailableConsultations
    } = this.props
    const { lastDate, count, availableTime } = consultations
    credentials && Object.keys(availableTime).length < count && requestAvailableConsultations(lastDate, count)
  }

  componentDidUpdate (prevProps) {
    const { consultations } = this.props
    const { error } = consultations

    if (error && error !== prevProps.consultations.error) {
      this.showPrevDays()
    }
  }

  showPrevDays = () => {
    const { startIndex } = this.state
    const { consultations } = this.props
    const { count } = consultations
    if ((startIndex - count) >= 0) {
      this.setState({ startIndex: startIndex - count })
    }
  }

  showNextDays = () => {
    const { startIndex } = this.state
    const { consultations, requestAvailableConsultations } = this.props
    const { lastDate, count, availableTime } = consultations
    if ((startIndex + count) < Object.keys(availableTime).length) {
      this.setState({ startIndex: startIndex + count })
    } else {
      requestAvailableConsultations(lastDate, count)
      this.setState({ startIndex: startIndex + count })
    }
  }

  handleDaySelection = (date) => {
    const { selectDate } = this.props
    selectDate(date)
  }

  render () {
    const { header, title } = MEET_US
    const { startIndex, viewMode } = this.state
    const { consultations } = this.props
    const { availableTime, fetching, count } = consultations
    const MOBILE_VIEW = viewMode === 'mobile'
    const DATES = availableTime && [...Object.values(availableTime)]
    const DAYS_TO_SHOW = DATES.slice(startIndex, startIndex + count)
    const Controls = () => {
      const showCurrentDate = DATES[startIndex] &&
        formatEventTime(DATES[startIndex][0].start.date)
      return (
        <ControlsWrapper>
          <CalendarHeaderArrow
            className={`arrow-left ${startIndex === 0 ? 'inactive' : 'active'}`}
            src={IMAGES.icon_arrow_to}
            alt='arrow'
            onClick={this.showPrevDays}
          />
          {MOBILE_VIEW
            ? <div><Date>{showCurrentDate && showCurrentDate.dayShortMonth}</Date><WeekDay>{showCurrentDate && showCurrentDate.shortWeekday}</WeekDay></div>
            : 'Available dates & time'}
          <CalendarHeaderArrow
            src={IMAGES.icon_arrow_to}
            alt='arrow'
            onClick={this.showNextDays}
          />
        </ControlsWrapper>
      )
    }

    const TimeCard = (times) => {
      const date = formatEventTime(times.start.date)
      return (
        <TileWrapper onClick={() => this.handleDaySelection(times)}>
          <Link to={{
            pathname: '/booking/book-consultation',
            state: { dateSet: times }
          }}
          >
            <Tile>
              <TileContent>{date.time}</TileContent>
              <TileArrow src={IMAGES.icon_arrow_to} alt='arrow' />
            </Tile>
          </Link>
        </TileWrapper>)
    }

    const CalendarCol = (day) => {
      const date = formatEventTime(day[0].start.date)
      return (
        <Col>
          {!MOBILE_VIEW && <ColHeader><Date>{date.dayShortMonth}</Date><WeekDay>{date.shortWeekday}</WeekDay></ColHeader>}
          <div>
            {Object.values(day).map((times, index) => <TimeCard key={index} {...times} />)}
          </div>
        </Col>
      )
    }

    return (
      <div>
        <HeadMeta url='meet-us' />
        <SectionWrapper>
          <SummaryCardWrapper>
            <div>
              <CardShortInfo>
                {header}
              </CardShortInfo>
              <SectionTitle>
                {title}
              </SectionTitle>
            </div>
          </SummaryCardWrapper>
          <CalendarWrapper>
            <Controls />
            <CalendarBody>
              {DAYS_TO_SHOW.map((day, index) => <CalendarCol key={index} {...day} />)}
              {fetching && <Loader />}
            </CalendarBody>
          </CalendarWrapper>
        </SectionWrapper>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  credentials: state.credentials,
  consultations: state.consultations,
  width: state.screenSize.width
})

const mapDispatchToProps = dispatch => ({
  requestAvailableConsultations: (from, count) => dispatch(getAvailableTime(from, count)),
  selectDate: date => dispatch(setConsultationDate(date))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MeetUs))
