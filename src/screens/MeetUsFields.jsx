import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { withRouter, Redirect } from 'react-router-dom'
import { FEATURES, OFFERS } from '../content/meetusContent'
import MeetUsForm from '../components/MeetUsForm'
import { formatEventTime } from '../utils/dateFormat'
import Loader from '../components/Loader'

const SectionWrapper = styled.div`
  font-family: 'Roboto-Regular', sans-serif;
  margin: 40px 40px 195px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  @media (max-width: 1000px) {
    margin: 0 40px 160px;
  }
  @media (max-width: 560px) {
    flex-direction: column;
    margin: 18px 0 140px;
  }
  @media (max-width: 376px) {
    flex-direction: column;
    margin: 18px 0 160px;
  }
`

const LoaderWrapper = styled.div`
  position: fixed;
  top: 50%;
  z-index: 100;
`

const SummaryCardWrapper = styled.div`
  min-width: 327px;
  max-width: 24.313%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;
  padding: 0;
  margin: 0 9.192% 0 0;
  
  >div {
    width: 100%;
  }

  @media (max-width: 1000px) {
     min-width: 216px;
     max-width: 31.5%;
     width: auto;
     margin: 0;
  }
  @media (max-width: 560px) {
     max-width: 100%;
     width: 100%;
     padding: 0 50px 56px 50px;
  }
  @media (max-width: 376px) {
    padding: 0 13.3% 15.16% 13.3%;
  }
`

const CardShortInfo = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.small};
  text-align: left;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  @media (max-width: 560px) {
    padding-bottom: 8px;
  }
`

const CardDetails = styled.div`
  margin: 20px 0 0 0;
  @media (max-width: 1000px) {
    margin: 32px 0 0 0;
  }
  @media (max-width: 560px) {
    margin: 28px 0 0 0;
  }
`

const DateTimeWrapper = styled.div`
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
  }
`

const DateTime = styled.div`
  font-family: PatchouliDisplay, sans-serif;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.h4};
  line-height: 1.25;
  text-align: left;
  @media (max-width: 1000px) {
    line-height: 1.27;
    font-size: 22px;
  }
  
  span.pale {
    color: ${({ theme }) => theme.colors.text};
  }
`

const ScheduleSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 0 0 20px 0;

  @media (max-width: 1000px) {
    flex-direction: column;
    margin: 0 0 21px 0;
  }
`

const ScheduleDesk = styled.div`
  color: ${({ theme }) => theme.colors.sky};
  line-height: 1.43;
  font-size: ${({ theme }) => theme.fontSize.medium};
  
  @media (max-width: 1000px) {
     display: none;
  }
`

const Schedule = styled.div`
  color: ${({ theme }) => theme.colors.sky};
  line-height: 1.43;
  font-size: ${({ theme }) => theme.fontSize.medium};
  @media (min-width: 1001px) {
     display: none;
  }
  @media (max-width: 1000px) {
    >div:first-child {
      margin: 35px 0 10px 0;
    }
  }
`

const ScheduleLine = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  cursor: pointer;

  @media (max-width: 1000px) {
    width: 144px;
    height: 40px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.sky};
    align-items: center;
    flex-direction: row-reverse;
  }
  @media (max-width: 560px) {
    width: 100%;
    height: 48px;
    max-width: 220px;
    justify-content: center;
  }
`

const IconWrapper = styled.div`
  height: 100%;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 2px 6px;

  img {
    width: 13px;
    height: 13px;
  }
  @media (max-width: 1000px) {
    width: 36px;
    &#apple img {
      width: 13px;
      height: 15px;
    }
    &#google img {
     width: 14px;
     height: 13px;
    }
  }
  @media (max-width: 560px) {
  width: 24px;
    &#apple {
      padding: 0 7px 4px 0;
    }
    &#google {
     padding: 0;
    }
  }
`

const CardDetailedInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  text-align: left;
  margin: 0 0 25px 0;
  padding: 0;
  @media (max-width: 768px) {
    margin: 0 0 21px 0;
  }
  @media (max-width: 560px) {
    margin: 0 0 25px 0;
  }
`

const CardDetailsBlockHeader = styled.div`
  line-height: 1;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.medium};
  margin: 0 0 10px 0;
  @media (max-width: 768px) {
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.palegrey};
    margin: 0;
  }
`

const CardDetailsBlockTitle = styled.h5`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.h5};
  margin: 0;
  padding: 0;
  line-height: 1.11;
  font-weight: normal;
   @media (max-width: 768px) {
     font-size: ${({ theme }) => theme.fontSize.medium};
     line-height: 1.5;
  }
`

const CardDetailsBlockDescription = styled.h6`
  line-height: 20px;
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: ${({ theme }) => theme.fontSize.medium};
  margin: 0;
  padding: 0;
  text-align: left;
  max-width: 250px;
  font-weight: normal;
  @media (min-width: 768px) {
     font-size: ${({ theme }) => theme.fontSize.medium};
     line-height: 1.5;
  }
`

const BtnWrapper = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 1000px) {
    margin-top: 10px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`

const BackBtn = styled.button`
  width: 160px;
  height: 40px;
  border-radius: 4px;
  border: solid 1px ${({ theme }) => theme.colors.text_darker};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.medium};
  cursor: pointer;
  
  &:active {
    background-color: rgba(0, 0, 0, 0.05);
  }

  &:focus {
    background-color: rgba(0, 0, 0, 0.05);
  }
  @media (max-width: 1000px) {
    width: 144px;
    height: 40px;
    background: transparent;
  }
`

const FormWrapper = styled.div`
   width: 100%;
  @media (max-width: 1000px) {
    padding-top: 22px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding-left: 10%;
  }
  @media (max-width: 560px) {
    margin: 0 50px;
    width: calc(100% - 100px);
    padding: 0;
  }
  @media (max-width: 376px) {
    margin: 0 20px;
    width: calc(100% - 40px);
  }
`

class MeetUsFields extends Component {
  static propTypes = {
    history: PropTypes.shape({}),
    location: PropTypes.shape({}),
    meetusForm: PropTypes.shape({
      fetching: PropTypes.bool
    }),
    width: PropTypes.number
  }

  state = {
    redirectToReferrer: false,
    showAddToFields: false // hide 'add to ical' and 'add to google' for now by setting showAddToFields flag to false
  }

  componentWillMount () {
    const { location } = this.props
    if (!(location.state && location.state.dateSet)) this.setState({ redirectToReferrer: true })
  }

  handleBack = () => {
    const { history } = this.props
    history.goBack()
  }

  render () {
    const { width, location, meetusForm } = this.props
    const { fetching } = meetusForm
    const { redirectToReferrer, showAddToFields } = this.state

    if (redirectToReferrer) {
      return <Redirect to='/booking' />
    }
    const date = location.state.dateSet && formatEventTime(location.state.dateSet.start.date)
    const SetSpecificDateTimeFields = () => (
      <Fragment>
        {width && width > 768 &&
        (
          <DateTimeWrapper>
            <DateTime>{date.dayMonth},</DateTime>
            <DateTime>{date.weekday},</DateTime>
            <DateTime>{date.time}</DateTime>
          </DateTimeWrapper>
        )}
        {width && width <= 768 &&
        (
          <DateTimeWrapper>
            <DateTime>{date.dayMonth} <span className='pale'>{date.weekday}</span></DateTime>
            <DateTime>{date.time}</DateTime>
          </DateTimeWrapper>)}
      </Fragment>
    )

    return (
      <SectionWrapper>
        <SummaryCardWrapper>
          {fetching && (
            <LoaderWrapper>
              <Loader />
            </LoaderWrapper>)}
          <div>
            <CardShortInfo>
              Meet us / {date.dayMonth} {date.time}
            </CardShortInfo>
            <CardDetails>
              <ScheduleSection>
                <SetSpecificDateTimeFields />
                {showAddToFields && (
                  <ScheduleDesk>
                    {FEATURES.map(({
                      title, alt, icon, id
                    }) => (
                      <ScheduleLine key={id}>
                        {title}
                        <IconWrapper id={id}><img src={icon} alt={alt} /></IconWrapper>
                      </ScheduleLine>
                    ))}
                  </ScheduleDesk>)}
              </ScheduleSection>
              {OFFERS.map(({ header, title, text }) => (
                <CardDetailedInfo key={title}>
                  <CardDetailsBlockHeader>{header}</CardDetailsBlockHeader>
                  <CardDetailsBlockTitle>{title}</CardDetailsBlockTitle>
                  <CardDetailsBlockDescription>{text}</CardDetailsBlockDescription>
                </CardDetailedInfo>
              ))}
              {showAddToFields && (
                <Schedule>
                  {FEATURES.map(({
                    title, alt, icon, id
                  }) => (
                    <ScheduleLine key={id}>
                      {title}
                      <IconWrapper id={id}><img src={icon} alt={alt} /></IconWrapper>
                    </ScheduleLine>
                  ))}
                </Schedule>)}
            </CardDetails>
          </div>
          <BtnWrapper>
            <BackBtn onClick={this.handleBack}>
              Back
            </BackBtn>
          </BtnWrapper>
        </SummaryCardWrapper>
        <FormWrapper>
          <MeetUsForm selectedDate={location.state.dateSet} />
        </FormWrapper>
      </SectionWrapper>
    )
  }
}

const mapStateToProps = state => ({
  width: state.screenSize.width,
  meetusForm: state.meetusForm
})

export default withRouter(connect(mapStateToProps, null)(MeetUsFields))
