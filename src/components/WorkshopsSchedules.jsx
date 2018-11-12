import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import connect from 'react-redux/es/connect/connect'
import Slider from 'react-id-swiper'
import SectionHeader from './SectionHeader'
import SectionTitle from './SectionTitle'
import ScrollAnimation from './ScrollAnimation'
import { SCHEDULES } from '../content/workshopsContent'
import * as WORKSHOPS from '../content/workshops'
import { media } from '../theme/AppStyles'
import { dateFormat } from '../utils/dateFormat'

const ScheduleWrapper = styled.div`
  font-family: 'Roboto-Regular', sans-serif;
  height: 100%;
  position: relative;
  background: ${({ theme }) => theme.colors.grey};
  margin: 0;
`

const SectionTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  
  h3 {
    max-width: 280px;
    line-height: 1;
    margin: 26px 0 28px 0;
    ${media.tablet`width: 44%;`};
    ${media.tablet`line-height: 1.17;`};
    ${media.tablet`margin: 22px 5% 15px;`};
    ${media.tablet`max-width: 340px;`};
    ${media.phone`width: 100%;`};
    ${media.phone`line-height: 1.27;`};
    ${media.phone`margin: 22px 10% 15px;`};
    ${media.phone`font-size: calc(18px + (22 - 18) * ((100vw - 200px) / (320 - 200)));`};
  }
`

const ScheduleContentWrapper = styled.div`
  background: linear-gradient( rgba(74, 74, 74, 0.5), rgba(74, 74, 74, 0.5) ), url(${SCHEDULES.bgImage.lg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  color: ${({ theme }) => theme.colors.snow};
  ${media.tablet`background: linear-gradient( rgba(74, 74, 74, 0.5), rgba(74, 74, 74, 0.5) ), url(${SCHEDULES.bgImage.md});`};
  ${media.tablet`background-repeat: no-repeat;`};
  ${media.tablet`background-position: center center;`};
  ${media.tablet`background-size: cover;`};
  ${media.tablet`flex-direction: column;`};
  ${media.tablet`justify-content: flex-start;`};
  ${media.tablet`padding: 8% 0 0 0;`};
  ${media.phone`background: linear-gradient( rgba(74, 74, 74, 0.5), rgba(74, 74, 74, 0.5) ), url(${SCHEDULES.bgImage.sm});`};
  ${media.phone`background-repeat: no-repeat;`};
  ${media.phone`background-position: center center;`};
  ${media.phone`background-size: cover;`};
  ${media.phone`padding: 16% 0 0 0;`};
`

const ScheduleDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 10px 0 0;
  padding: 4.5% 0;
  width: 31.5%;
  ${media.tablet`justify-content: unset;`};
  ${media.tablet`width: 100%;`};
  ${media.tablet`padding: 0;`};
`

const ScheduleDescription = styled.div`
  display: flex;
  flex-direction: column;
`

const ScheduleListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 57.6%;
  padding: 4.55% 40px 4.55% 0;

   @media (max-width: 900px) {
    width: 64.6%;
  }

  ${media.tablet`width: 100%;`};
  ${media.tablet`padding: 4.55% 0 5% 0;`};
  ${media.phone`flex-direction: row;`};
  ${media.phone`margin: 0 0 41px;`};
  ${media.phone`height: 320px;`};
  ${media.phone`flex-direction: row;`};
  ${media.phone`padding: 0`};
  
  .schedules-wrapper {
    display: flex;
    flex-direction: column;

    >div:first-child {
      margin-left: 0;
    }

    >div:last-child {
      margin-right: 0;
      margin-bottom: 0;
    }
    
    @media only screen and (max-width: 1024px) {
      align-items: center;
    }
    ${media.phone`width: 100%;`};
    ${media.phone`flex-wrap: nowrap;`};
    ${media.phone`-webkit-overflow-scrolling: touch;`};
    ${media.phone`scroll-behavior: smooth;`};
    ${media.phone`height: 330px;`};
  }
  .schedules-card {
    position: relative;
    max-width: 100%;
    width: 553px;
    display: flex;
    flex-direction: row;
    height: 136px;
    background-color: rgba(0, 0, 0, 0.7);
    align-items: center;
    padding: 0 40px 0 2.818%;
    margin: 0 0 10px 0;
    ${media.tablet`width: 492px;`};
    ${media.tablet`max-width: 96%;`};
    ${media.tablet`min-width: 410px;`};
    ${media.tablet`padding: 0 5.21% 0 22px;`};
    @media (max-width: 500px) {
      padding: 0 5.21% 0 0;
    }
    ${media.phone`width: 240px;`};
    ${media.phone`flex-direction: column;`};
    ${media.phone`height: 320px;`};
    ${media.phone`min-height: 320px;`};
    ${media.phone`min-width: 240px;`};
    ${media.phone`margin: 0 10px;`};
    ${media.phone`padding: 30px 10px 0;`};
  }
`

const ListItemContentWrapper = styled.div`
  padding: 0 0 0 6.2%;
  text-align: left;
  ${media.tablet`padding: 0 0 0 2.865%;`};
  ${media.phone`padding: 0;`};
  ${media.phone`margin: 17px 0 0 0;`};
  ${media.phone`text-align: center;`};
`

const ListItemDatesWrapper = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-width: 104px;
  max-width: 104px;
  padding: 25px 0 28px;
  ${media.tablet`min-width: 95px;`};
  ${media.tablet`max-width: 95px;`};
  ${media.tablet`padding: 0;`};
  ${media.phone`height: auto;`};
  ${media.phone`flex: none;`};
  ${media.phone`margin: 0 0 16px 0;`};
`

const Weekday = styled.div`
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.71;
  ${media.phone`line-height: 2;`};
`

const Date = styled.div`
  font-size: calc(28px + (32 - 28) * ((100vw - 768px) / (1200 - 768)));
  color: ${({ theme }) => theme.colors.yellow};
  padding: 4px 0;
  line-height: 0.66;
  ${media.tablet`line-height: 0.75;`};
  ${media.tablet`font-size: calc(24px + (28 - 24) * ((100vw - 376) / (768 - 376)));`};
  ${media.phone`font-size: 28px`};
`

const Month = styled.div`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.yellow};
  line-height: 1.31;
  letter-spacing: 2px;
  ${media.tablet`line-height: 1.5;`};
  ${media.phone`font-size: ${({ theme }) => theme.fontSize.medium};`};
`

const Title = styled.div`
  font-family: PatchouliDisplay, sans-serif;
  font-size: calc(22px + (24 - 22) * ((100vw - 768px) / (1200 - 768)));
  color: ${({ theme }) => theme.colors.snow};
  line-height: 1.25;
  ${media.tablet`line-height: 1.27;`};
  ${media.tablet`font-size: 22px`};
`

const Location = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.text};
  height: 25px;
  line-height: 1.71;
  margin: 0;
  font-weight: normal;
  ${media.tablet`line-height: 1.29;`};
`

const TimePeriod = styled.div`
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.snow};
  line-height: 1.71;
  ${media.tablet`line-height: 1.29;`};
`

const ButtonWrapper = styled.div`
  position: absolute;
  right: 7.133%;
  ${media.tablet`right: 8.133%;`};

  @media (max-width: 500px) {
    right: 3%;
  }

  ${media.phone`bottom: 33px;`};
  ${media.phone`right: unset;`};
  ${media.phone`display: flex;`};
  ${media.phone`justify-content: center;`};
  ${media.phone`width: 100%;`};
`

const Button = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #959595;
  background: transparent;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.snow};
  ${media.phone`width: 120px;`};
  ${media.phone`height: 48px;`};
  
   a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.snow};
  }
`

const Separator = styled.div`
  width: 1px;
  height: 60.4px;
  background: #979797;
  ${media.phone`height: 1px;`};
  ${media.phone`width: 120px;`};
`

const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0;
  margin-bottom: 16px;
  ${media.tablet`padding: 0 28px;`};
  ${media.tablet`margin-bottom: 20px;`};
`

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.snow};
  line-height: 1.5;
  text-align: center;
  margin: 0;
  padding: 0;
  max-width: 65%;
  ${media.tablet`font-size: ${({ theme }) => theme.fontSize.medium};`};

  @media (max-width: 940px) {
    max-width: 85%;
  }

  ${media.phone`max-width: 100%;`};
`

WorkshopsSchedules.propTypes = {
  width: PropTypes.number
}

function WorkshopsSchedules (props) {
  const { width } = props
  const MOBILE_VIEW = width <= 376
  const {
    header, title, text
  } = SCHEDULES

  const swiperParams = {
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2
  }

  const ConditionalWrap = ({ condition, wrap, children }) => (condition ? wrap(children) : children)

  const Slides = ({ scrollView }) => (
    <ConditionalWrap
      condition={scrollView}
      wrap={children => <Slider {...swiperParams}>{children}</Slider>}
    >
      {
        WORKSHOPS.map((item) => {
          const {
            dateTime, eventTitle, location, registrationLink, timeNotes
          } = item
          const dateOne = dateFormat(dateTime[0].year, dateTime[0].month, dateTime[0].day)
          const dateTwo = dateTime[1] && dateFormat(dateTime[1].year, dateTime[1].month, dateTime[1].day)
          return (
            <div className='schedules-card' key={registrationLink}>
              <ListItemDatesWrapper>
                <Weekday>{`${dateOne.shortWeekday}${dateTime[1] ? `- ${dateTwo.shortWeekday}` : ''}`}</Weekday>
                <Date>{`${dateOne.dayNum}${dateTime[1] ? `- ${dateTwo.dayNum}` : ''}`}</Date>
                <Month>{`${dateOne.shortMonth}${dateTime[1] && dateOne.shortMonth !== dateTwo.shortMonth ? `- ${dateTwo.shortMonth}` : ''}`}</Month>
              </ListItemDatesWrapper>
              <Separator />
              <ListItemContentWrapper>
                <Title>{eventTitle}</Title>
                <Location>{location}</Location>
                <TimePeriod>{`${dateTime[0].from}${dateTime[0].to && `- ${dateTime[0].to}`}${timeNotes && `- ${timeNotes}`}`}</TimePeriod>
              </ListItemContentWrapper>
              <ButtonWrapper>
                <Button>
                  <a href={registrationLink} target='_blank' rel='noopener noreferrer'>
                    Register
                  </a>
                </Button>
              </ButtonWrapper>
            </div>
          )
        })
      }
    </ConditionalWrap>
  )

  return (
    <ScheduleWrapper>
      <ScheduleContentWrapper>
        <ScheduleDescriptionWrapper>
          <ScheduleDescription>
            <ScrollAnimation name='fadeInTop' offset={-10}>
              <SectionHeader>
                {header}
              </SectionHeader>
            </ScrollAnimation>
            <ScrollAnimation name='fadeInBottom' offset={100}>
              <SectionTitleWrapper>
                <SectionTitle>
                  {title}
                </SectionTitle>
              </SectionTitleWrapper>
            </ScrollAnimation>
            <ScrollAnimation name='fadeInBottom' offset={-10}>
              {text.map((p, i) => (
                <DescriptionWrapper key={i}>
                  <Description>
                    {p}
                  </Description>
                </DescriptionWrapper>
              ))}
            </ScrollAnimation>
          </ScheduleDescription>
        </ScheduleDescriptionWrapper>
        <ScheduleListWrapper>
          <div className='schedules-wrapper'>
            <Slides scrollView={MOBILE_VIEW} />
          </div>
        </ScheduleListWrapper>
      </ScheduleContentWrapper>
    </ScheduleWrapper>
  )
}

const mapStateToProps = state => ({
  width: state.screenSize.width
})

export default connect(mapStateToProps, null)(WorkshopsSchedules)
