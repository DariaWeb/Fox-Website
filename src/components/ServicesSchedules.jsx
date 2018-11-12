import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Slider from 'react-id-swiper'
import SectionHeader from './SectionHeader'
import SectionTitle from './SectionTitle'
import ScrollAnimation from './ScrollAnimation'
import { SCHEDULE } from '../content/servicesContent'
import IMAGES from '../utils/ImagesProvider'
import { media } from '../theme/AppStyles'
import { formatEventTime } from '../utils/dateFormat'
import { getAvailableTime, setConsultationDate } from '../redux/reducer'

const ScheduleWrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.grey};
  font-family: 'Roboto-Regular', sans-serif;
  height: 556px;
  margin-top: 80px;
  .card-link {
    text-decoration: none;
    width: 100%;
    height: 100%;
    padding: 21px;
    display: flex;
    flex-direction: column;
    ${media.tablet`padding: 23px 3.847%;`};
    ${media.phone`padding: 7.058% 3.847%;`};
  }
  
  ${media.tablet`height: 544px;`};
  ${media.tablet`margin-top: 0;`};
  ${media.phone`height: 662px;`};
  ${media.phone`margin-top: 25px;`};
`

const Bg = styled.div`
  position: relative;
  height: 556px;
  opacity: 0.5;
  background: url(${SCHEDULE.bgImage.lg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  ${media.tablet`background: url(${SCHEDULE.bgImage.md});`};
  ${media.tablet`background-repeat: no-repeat;`};
  ${media.tablet`background-position: center center;`};
  ${media.tablet`background-size: cover;`};
  ${media.tablet`height: 544px;`};
  ${media.phone`background: url(${SCHEDULE.bgImage.sm});`};
  ${media.phone`background-repeat: no-repeat;`};
  ${media.phone`background-position: center center;`};
  ${media.phone`background-size: cover;`};
  ${media.phone`height: 662px;`};
`

const SectionTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  
  h3 {
    max-width: 845px;
    line-height: 1.14;
    margin: 37px 0 28px 0;  
    ${media.tablet`line-height: 1.17;`};
    ${media.tablet`margin: 20px 5% 3.622%;`};
    ${media.tablet`${({ theme }) => theme.fontSize.h4};`};
    ${media.phone`line-height: 1.14;`};
    ${media.phone`margin: 21px 16% 0;`};
    ${media.phone`line-height: 1.17;`};
  }
`

const ScheduleContentWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  color: ${({ theme }) => theme.colors.snow};
`

const ScheduleDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 53px;
  margin-bottom: 6px;
  ${media.tablet`margin-top: 7.55%;`};
  ${media.phone`margin-top: 60px;`};
  ${media.phone`margin-bottom: 33px;`};
`

const ScheduleDescription = styled.div`
  display: flex;
  flex-direction: column;
`

const ScheduleListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 40px;
  min-height: 190px;
  ${media.tablet`margin-bottom: 34px;`};
  ${media.tablet`height: 200px;`};
  ${media.phone`margin-bottom: 22px;`};
  
  .schedules-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: normal;
    ${media.tablet`flex-wrap: nowrap;`};
    ${media.tablet`height: 218px;`};

      >div:first-child {
        margin-left: 0;
      }
    
      >div:last-child {
        margin-right: 0;
      }
  }
  .schedules-card {
    width: 214px;
    height: 194px;
    border-radius: 2px;
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    background-color: rgba(0, 0, 0, 0.7);
    margin: 0 6px;
    ${media.tablet`width: 216px;`};
    ${media.tablet`min-width: 216px;`};
    ${media.tablet`margin: 0 10px;`};
    ${media.phone`width: 214px;`};
  }
`

const Weekday = styled.div`
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.snow};
  opacity: 0.5;
  line-height: normal;
`

const DayTimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 13px;
`

const Date = styled.div`
  font-size: calc(16px + (18 - 16) * ((100vw - 786px) / (1440 - 768)));
  color: ${({ theme }) => theme.colors.snow};
  justify-content: center;
  line-height: normal;
  ${media.tablet`font-size: ${({ theme }) => theme.fontSize.base};`};
`

const Time = styled.div`
  font-size: calc(28px + (32 - 28) * ((100vw - 786px) / (1440 - 768)));
  color: ${({ theme }) => theme.colors.yellow};
  line-height: normal;
  margin-top: 11px;
  ${media.tablet`font-size: ${({ theme }) => theme.fontSize.h3};`};
  ${media.tablet`line-height: 1.33;`};
  ${media.tablet`margin-top: 14px;`};
  ${media.phone`margin-top: 17px;`};
`

const Separator = styled.div`
  background: #ffffff;
  width: 110px;
  height: 2px;
  opacity: 0.5;
  margin-top: 10px;
  ${media.tablet`margin-top: 12px;`};
  ${media.phone`margin-top: 10px;`};
`

const ArrowWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  justify-content: center;
  flex: 1;

  img {
    height: 18px;
    ${media.phone`height: 22px;`};
  }
`

const Button = styled.button`
  width: 214px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  background: ${({ theme }) => theme.colors.snow};
  cursor: pointer;
  margin: 0;
  padding: 0;
  ${media.phone`width: 220px;`};
  ${media.phone`height: 48px;`};

  &:active {
    background: rgba(255, 255, 255, 0.95);
  }
  
  &:focus {
    background: rgba(255, 255, 255, 0.95);
  }

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.colors.grey};
  }
`

const ConditionalWrap = ({ condition, wrap, children }) => (condition ? wrap(children) : children)

class ServicesSchedules extends Component {
  static propTypes = {
    availableConsultationTime: PropTypes.arrayOf(PropTypes.shape),
    requestAvailableConsultations: PropTypes.func,
    selectDate: PropTypes.func,
    width: PropTypes.number,
    credentials: PropTypes.shape({}),
    consultations: PropTypes.shape({
      count: PropTypes.number,
      lastDate: PropTypes.string
    })
  }

  componentDidMount () {
    const { credentials, consultations, requestAvailableConsultations } = this.props
    const { lastDate, availableTime } = consultations
    credentials && Object.keys(availableTime).length < 5 && requestAvailableConsultations(lastDate, 5)
  }

  handleTimeSelect = (time) => {
    const { selectDate } = this.props
    selectDate(time)
  }

  render () {
    const { consultations, width } = this.props
    const { availableTime } = consultations
    const consultationsToShow = availableTime && [...Object.values(availableTime)].slice(0, 5)
    const {
      header, title, linkName, linkTo
    } = SCHEDULE
    const SCROLL_VIEW = width <= 1115

    const swiperParams = {
      centeredSlides: true,
      slidesPerView: 'auto',
      initialSlide: 2,
      touchRatio: 0.2
    }

    const Slides = ({ scrollView }) => (
      <ConditionalWrap
        condition={scrollView}
        wrap={children => <Slider {...swiperParams}>{children}</Slider>}
      >
        {consultationsToShow && consultationsToShow.map((day, i) => {
          const time = { ...Object.values(day)[0] }
          const showFirstAvailableTime = time.start.date
          const date = formatEventTime(showFirstAvailableTime)
          return (
            <div
              className='schedules-card'
              role='button'
              tabIndex={0}
              onKeyDown={() => this.handleTimeSelect(time)}
              onClick={() => this.handleTimeSelect(time)}
              key={i}
            >
              <Link
                to={{
                  pathname: '/booking/book-consultation',
                  state: { dateSet: time }
                }}
                className='card-link'
              >
                <DayTimeWrapper>
                  <Weekday>{date.weekday}</Weekday>
                  <Time>{date.time}</Time>
                  <Separator />
                </DayTimeWrapper>
                <Date>{date.fullDate}</Date>
                <ArrowWrapper>
                  <img src={IMAGES.icon_arrow_white} alt='arrow' />
                </ArrowWrapper>
              </Link>
            </div>
          )
        })}
      </ConditionalWrap>
    )

    return (
      <ScheduleWrapper>
        <Bg />
        <ScheduleContentWrapper>
          <ScheduleDescriptionWrapper>
            <ScheduleDescription>
              <SectionHeader>
                {header}
              </SectionHeader>
              <ScrollAnimation name='fadeIn' offset={-10}>
                <SectionTitleWrapper>
                  <SectionTitle>
                    {title}
                  </SectionTitle>
                </SectionTitleWrapper>
              </ScrollAnimation>
            </ScheduleDescription>
          </ScheduleDescriptionWrapper>
          <ScrollAnimation name='fadeInTop' offset={-10}>
            {consultationsToShow &&
            (
              <ScheduleListWrapper>
                <div className='schedules-wrapper'>
                  <Slides scrollView={SCROLL_VIEW} />
                </div>
              </ScheduleListWrapper>)}
          </ScrollAnimation>
          <div>
            <ScrollAnimation name='fadeIn' offset={100}>
              <Button>
                <Link to={linkTo}>
                  {linkName}
                </Link>
              </Button>
            </ScrollAnimation>
          </div>
        </ScheduleContentWrapper>
      </ScheduleWrapper>
    )
  }
}

const mapStateToProps = state => ({
  consultations: state.consultations,
  credentials: state.credentials,
  width: state.screenSize.width
})

const mapDispatchToProps = dispatch => ({
  requestAvailableConsultations: (from, count) => dispatch(getAvailableTime(from, count)),
  selectDate: date => dispatch(setConsultationDate(date))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ServicesSchedules))
