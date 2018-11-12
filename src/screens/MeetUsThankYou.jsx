import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import connect from 'react-redux/es/connect/connect'
import ButtonLink from '../components/ButtonLink'
import IMAGES from '../utils/ImagesProvider'
import { resetForms } from '../redux/reducer'
import { formatEventTime } from '../utils/dateFormat'

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: 'Roboto-Regular', sans-serif;
`

const ContentWrapper = styled.div`
  width: 350px;
  margin: 87px 0 68px 0;
  @media (max-width: 768px) {
    margin: 40px 0 46px 0;
  }
  @media (max-width: 376px) {
    margin: 40px 50px 60px;
  }
`

const ContentHeader = styled.div`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 20px;
  margin-top: 10px;
  line-height: 1.2;
  @media (max-width: 768px) {
    line-height: 1.33;
    font-size: ${({ theme }) => theme.fontSize.h5};
  }
   @media (max-width: 376px) {
    margin-top: 14px;
  }
`

const MeetUsImg = styled.img`
  width: 57px;
  height: 59px;
`

const MeetUsText = styled.p`
  padding: 0;
  margin: 8px 0 12px 0;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.base};
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.medium};
    margin: 8px 0 24px 0;
  }
  @media (max-width: 368px) {
    margin: 8px 0 22px 0;
  }
`

const BtnWrapper = styled.div`
  margin-top: 28px;

  button {
    border: solid 1px ${({ theme }) => theme.colors.text_darker};
  }
  
  @media (max-width: 368px) {
    margin-top: 26px;
    button {
      width: 220px;
      height: 48px;
    }
  }
`

class MeetUsThankYou extends Component {
  static propTypes = {
    daySelected: PropTypes.shape({}),
    resetForm: PropTypes.func
  }

  componentDidMount () {
    const { resetForm } = this.props
    resetForm()
  }

  render () {
    const { daySelected } = this.props
    const date = daySelected && formatEventTime(daySelected.start.date)
    return (
      <SectionWrapper>
        <ContentWrapper>
          <MeetUsImg src={IMAGES.icon_meet_us} alt='Meet us' />
          <ContentHeader>
            {`${date.dayMonth}, ${date.weekday} ${date.time}`}
          </ContentHeader>
          <div>
            <MeetUsText>
              Meet us for a free no obligation consultation
              to see how we can help your business today.
            </MeetUsText>
            <MeetUsText>
              You’ve successfully reserved the service. Please check your email to see the notification!
            </MeetUsText>
          </div>
          <BtnWrapper>
            <ButtonLink link='/services' width={200}>
              Check our services
            </ButtonLink>
          </BtnWrapper>
        </ContentWrapper>
      </SectionWrapper>
    )
  }
}

const mapStateToProps = state => ({
  daySelected: state.daySelected
})

const mapDispatchToProps = dispatch => ({
  resetForm: () => dispatch(resetForms())
})

export default connect(mapStateToProps, mapDispatchToProps)(MeetUsThankYou)
