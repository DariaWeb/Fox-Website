import React, { Component } from 'react'
import styled from 'styled-components'
import ButtonLink from './ButtonLink'
import ScrollAnimation from './ScrollAnimation'
import { WORKSHOPS } from '../content/homeContent'
import * as workshopsData from '../content/workshops'
import { media } from '../theme/AppStyles'
import { dateFormat } from '../utils/dateFormat'

const SectionWrapper = styled.div`
  font-family: 'Roboto-Regular', sans-serif;
  display: flex;
  justify-content: center;
  margin: 95px 40px 40px;
  ${media.tablet`margin: 60px 40px 44px;`};
  ${media.phone`margin: 0 0 30px 0;`};
`

const WorkshopsWrapper = styled.div`
  position: relative;
  height: 644px;
  max-width: 892px;
  width: 100%;
  background: url(${WORKSHOPS.bgImage.lg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  border-radius: 10px;
  padding: 55px 60px;
  ${media.tablet`url(${WORKSHOPS.bgImage.md})`};
  ${media.tablet`height: 542px;`};
  ${media.tablet`background-repeat: no-repeat;`};
  ${media.tablet`background-position: center;`};
  ${media.tablet`background-size: cover;`};
  ${media.phone`url(${WORKSHOPS.bgImage.sm})`};
  ${media.phone`height: 642px;`};
  ${media.phone`background-repeat: no-repeat;`};
  ${media.phone`background-position: center;`};
  ${media.phone`background-size: cover;`};
  ${media.phone`border-radius: 0;`};
`

const WorkshopsHeader = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  padding: 40px 0 22px;
  ${media.tablet`padding: 25px 0 16px;`};
  ${media.phone`padding: 28px 0 23px;`};
`

const WorkshopsContentWrapper = styled.div`
  max-width: 400px;
  width: 80%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  left: 50%;
  padding: 46px 50px 50px;
  top: 50%;
  box-sizing: border-box;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors.snow};
  display: flex;
  flex-direction: column;
  ${media.tablet`max-width: 334px;`};
  ${media.tablet`padding: 4% 5.5% 7%;`};
  ${media.phone`padding: 31px;`};
  ${media.phone`height: calc(100% - 40px);`};
  ${media.phone`width: calc(100% - 40px);`};
`

const ContentTitle = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.base};
  line-height: 1.5;
  letter-spacing: 0.2px;
  text-align: right;
  ${media.tablet`font-size: ${({ theme }) => theme.fontSize.medium};`};
  ${media.tablet`line-height: 1.5;`};
  ${media.phone`line-height: 1.71;`};
`

const WorkshopName = styled.h4`
  font-family: PatchouliDisplay, sans-serif;
  text-align: left;
  margin: 0;
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.snow};
  font-size: ${({ theme }) => theme.fontSize.h4};
  ${media.tablet`font-size: 20px;`};
  ${media.phone`font-size: 22px;`};
  ${media.tablet`line-height: 1.2;`};
  ${media.phone`line-height: 1.27;`};
`

const WorkshopDate = WorkshopName.extend`
  color: ${({ theme }) => theme.colors.yellow};
`

const WorkshopDescriptionWrapper = styled.div`
  margin: 24px 0 10px;
  ${media.tablet`margin: 10px 0;`};
  ${media.phone`margin: 20px 0;`};
  ${media.tablet`min-height: 182px;`};
`

const WorkshopDescription = styled.h4`
  color: rgba(255, 255, 255, 0.7);
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: normal;
  margin: 0;
  line-height: 1.5;
  text-align: justify;
  ${media.tablet`font-size: ${({ theme }) => theme.fontSize.medium};`};
`

const WorkshopCalendar = styled.div`
  margin-bottom: 30px;
  ${media.tablet`margin-bottom: 35px;`};
`

const WorkshopCalendarRow = styled.div`
  color: ${({ theme }) => theme.colors.snow};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: normal;
  text-align: left;
  line-height: 1.8;
  margin: 0;
  ${media.tablet`line-height: 1.5;`};
`

const WorkshopLocation = WorkshopCalendarRow.extend`
  color: ${({ theme }) => theme.colors.yellow};
  line-height: 1.71;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  button {
    border: solid 1px ${({ theme }) => theme.colors.snow};
    align-self: flex-start;
    ${media.tablet`width: 160px;`};
    ${media.phone`width: 100%;`};
  }

  a {
    color: ${({ theme }) => theme.colors.snow};
  }
`

export default class HomeWorkshops extends Component {
  state = {
    closestWorkshop: {}
  }

  componentDidMount () {
    this.setState({ closestWorkshop: workshopsData[0][0] })
  }

  render () {
    const { header, text } = WORKSHOPS
    const { closestWorkshop } = this.state
    const {
      eventTitle, address, schedules, dateTime
    } = closestWorkshop
    const date = dateTime && dateFormat(dateTime[0].year, dateTime[0].month, dateTime[0].day)
    return (
      <ScrollAnimation name='fadeIn' offset={100}>
        <SectionWrapper>
          <WorkshopsWrapper>
            <WorkshopsContentWrapper>
              <ContentTitle>
                {header}
              </ContentTitle>
              <WorkshopsHeader>
                <WorkshopDate>
                  {date && date.fullDate}
                </WorkshopDate>
                <WorkshopName>
                  {eventTitle}
                </WorkshopName>
              </WorkshopsHeader>
              <WorkshopDescriptionWrapper>
                {text.map((p, i) => <WorkshopDescription key={i}>{p}</WorkshopDescription>)}
              </WorkshopDescriptionWrapper>
              <WorkshopLocation>
                {address}
              </WorkshopLocation>
              <WorkshopCalendar>
                {schedules && schedules.map(({ name, from, to }, index) => (
                  <WorkshopCalendarRow key={index}>
                    <span>{`${from} - ${to}`}</span>
                    <span>&nbsp;-&nbsp;</span>
                    <span>{name}</span>
                  </WorkshopCalendarRow>
                ))}
              </WorkshopCalendar>
              <ScrollAnimation name='fadeInBottom' offset={100}>
                <ButtonWrapper>
                  <ButtonLink link='/workshops'>
                    View all workshops
                  </ButtonLink>
                </ButtonWrapper>
              </ScrollAnimation>
            </WorkshopsContentWrapper>
          </WorkshopsWrapper>
        </SectionWrapper>
      </ScrollAnimation>
    )
  }
}
