import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import connect from 'react-redux/es/connect/connect'
import ButtonLink from '../components/ButtonLink'
import HelpSection from '../components/HelpSection'
import IMAGES from '../utils/ImagesProvider'
import { resetForms } from '../redux/reducer'

const SectionWrapper = styled.div`
  font-family: 'Roboto-Regular', sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 94px 0 82px;
  animation-name: fadeIn;
  animation-duration: 800ms;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  @media (max-width: 768px) {
    margin: 70px 0 64px;
  }
  @media (max-width: 376px) {
    margin: 40px 50px 60px;
  }
`

const ContentWrapper = styled.div`
  width: 350px;
`

const ContentHeader = styled.div`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 20px;
  line-height: 24px;
  margin: 10px 0 11px;

  @media (max-width: 768px) {
    line-height: 1.33;
    font-size: ${({ theme }) => theme.fontSize.h5};
  }
  @media (max-width: 376px) {
    margin: 20px 0 11px;
  }
`

const Img = styled.img`
  width: 48px;
  height: 52px;
  object-fit: contain;
`

const MeetUsText = styled.p`
  padding: 0;
  margin: 0;
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.base};
  
   @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  } 
`

const BtnWrapper = styled.div`
  margin-top: 23px;

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

class ContactThankYou extends Component {
  static propTypes = {
    resetForm: PropTypes.func
  }

  componentDidMount () {
    const { resetForm } = this.props
    resetForm()
  }

  render () {
    return (
      <div>
        <SectionWrapper>
          <ContentWrapper>
            <Img src={IMAGES.icon_message_sent} alt='We will get in touch with you shortly.' />
            <ContentHeader>
              Thank you
            </ContentHeader>
            <div>
              <MeetUsText>
                Thanks for contacting us!
              </MeetUsText>
              <MeetUsText>
                We will get in touch with you shortly.
              </MeetUsText>
            </div>
            <BtnWrapper>
              <ButtonLink link='/services' width={200}>
                Check our services
              </ButtonLink>
            </BtnWrapper>
          </ContentWrapper>
        </SectionWrapper>
        <HelpSection />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  resetForm: () => dispatch(resetForms())
})

export default connect(null, mapDispatchToProps)(ContactThankYou)
