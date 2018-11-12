import React from 'react'
import styled from 'styled-components'
import connect from 'react-redux/es/connect/connect'
import PropTypes from 'prop-types'
import SectionTitle from '../components/SectionTitle'
import ContactForm from '../components/ContactForm'
import Map from '../components/Map'
import { FORM } from '../content/contactContent'
import ScrollAnimation from '../components/ScrollAnimation'
import Loader from '../components/Loader'
import IMAGES from '../utils/ImagesProvider'
import * as mapContactStyles from '../theme/mapContactStyles'
import HeadMeta from '../components/HeadMeta'

const SectionWrapper = styled.div`
  margin: 37px 40px 84px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto-Regular', sans-serif;
  @media (max-width: 768px) {
    margin: 0 40px 60px;
  }
  @media (max-width: 620px) {
    margin: 0 40px 0;
  }
  @media (max-width: 376px) {
    margin: 18px 0 -68px;
  }
`

const LoaderWrapper = styled.div`
  position: fixed;
  top: 50%;
  z-index: 100;
`

const ContentWrapper = styled.div`
  width: 892px;
  max-width: 100%;
  @media (max-width: 376px) {
    padding: 0 50px;
  }
`

const HeaderWrapper = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
`

const Header = styled.div`
  height: 25px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  text-align: left;
  width: 100%;
  animation-name: fadeInTop;
  animation-duration: 800ms;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;

  @media (max-width: 768px) {
   width: 422px;
   padding-bottom: 10px;
  }
  @media (max-width: 620px) {
    width: 100%;
    min-width: 100%;
  }
  @media (max-width: 560px) {
   height: 22px;
   padding-bottom: 8px;
   max-width: 100%;
  }
`

const SectionTitleWrapper = styled.div`
  color: ${({ theme }) => theme.colors.grey};
  display: flex;
  justify-content: flex-start;
  animation-name: fadeInLeft;
  animation-duration: 800ms;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;

    h3 {
      font-size: ${({ theme }) => theme.fontSize.h4};
      line-height: 1.25;
      text-align: left;
      max-width: 561px;
      margin: 22px 0 13px;
      
        @media (max-width: 768px) {
          max-width: 422px;
          font-size: 22px;
          line-height: 1.27;
          margin: 32px 0 7px;
        }
        @media (max-width: 620px) {
          width: 100%;
          min-width: 100%;
        }
        @media (max-width: 376px) {
          margin: 27px 0 11px;
        }
    }
`

const SectionContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 36px;
  color: #afafaf;
  
  @media (max-width: 768px) {
     margin-bottom: 42px;
  }
  @media (max-width: 620px) {
     margin-bottom: 32px;
  }
`

const SectionContent = styled.p`
  font-size: ${({ theme }) => theme.fontSize.base};
  line-height: 1.5;
  text-align: center;
  margin: 0;
  padding: 0;
  animation-name: fadeInLeft;
  animation-duration: 800ms;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  
   @media (max-width: 768px) {
     font-size: ${({ theme }) => theme.fontSize.medium};
     text-align: left;
     max-width: 422px;
   }
   @media (max-width: 620px) {
     width: 100%;
     min-width: 100%;
   }
`

const Card = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  width: 892px;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.08), 0 2px 4px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  overflow: hidden;
  z-index: 9;
  
  @media (max-width: 620px) {
    flex-direction: column;
    box-shadow: none;
    border-radius: 0;
  }
`

const CardForm = styled.div`
  display: flex;
  width: 100%;
  background: ${({ theme }) => theme.colors.snow};
  padding: 64px 42px 43px 45px;
  position: relative;
  z-index: 11;
    
   @media (max-width: 768px) {
     padding: 64px 7.269% 43px;
   }
   @media (max-width: 620px) {
    width: calc(100% - 15%);
    margin: 0 7.5%;
    background: ${({ theme }) => theme.colors.snow};
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.08), 0 2px 4px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
    top: -68px;
  }
   @media (max-width: 376px) {
    width: calc(100% - 40px);
    margin: 0 20px;
    top: -109px;
    padding: 50px 20px 20px;
  }
`

const CardImgWrapper = styled.div`
  width: 478px;
  max-width: 54%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
   @media (max-width: 768px) {
     width: 50%;
   }
   @media (max-width: 620px) {
     min-width: 100%;
   }
`

const MapWrapper = styled.div`
  height: 100%;
  width: 478px;
  @media (max-width: 620px) {
    height: 700px;
    width: 100%;
  }
`

const ContactCardWrapper = styled.div`
  width: 300px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  @media (max-width: 768px) {
    width: 231px;
  }
  @media (max-width: 768px) {
    width: 220px;
  }
`

const ContactCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 46px 26px 10px 26px;
  @media (max-width: 768px) {
    padding: 25px 29px 20px 29px;
  }
`

const IconsRow = styled.div`
  display: flex;
  height: 20px;
  width: 122px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26px;
  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`

const AddressLine = styled.div`
  font-family: PatchouliDisplay, sans-serif;
  font-size: ${({ theme }) => theme.fontSize.h5};
  font-weight: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${({ theme }) => theme.colors.snow};
  line-height: 1;
  margin: 5px 0;

  @media (max-width: 768px) {
    line-height: 1.29;
    font-size: ${({ theme }) => theme.fontSize.medium};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.snow};
  }
`

const AddressItemIcon = styled.img`
  height: 13px;
  width: 13px;
  margin-left: 10px;
  
  &.icon-location {
    width: 10px;
    height: 13.8px;
  }
`

const AddressSeparator = styled.div`
  width: 100%;
  height: 1px;
  opacity: 0.5;
  background: ${({ theme }) => theme.colors.snow}
  margin: 10px 0 12px;
  @media (max-width: 768px) {
    margin: 4px 0;
  }
`

Contact.propTypes = {
  contactForm: PropTypes.shape({
    fetching: PropTypes.bool
  })
}

function Contact (props) {
  const {
    header, title, text, phoneNumber, emailAddress
  } = FORM
  const { contactForm } = props
  const { fetching } = contactForm
  return (
    <div>
      <HeadMeta url='contact' />
      <SectionWrapper>
        <ContentWrapper>
          <HeaderWrapper>
            <Header>
              {header}
            </Header>
          </HeaderWrapper>
          <SectionTitleWrapper>
            <SectionTitle>
              {title}
            </SectionTitle>
          </SectionTitleWrapper>
          <SectionContentWrapper>
            <SectionContent>
              {text}
            </SectionContent>
          </SectionContentWrapper>
        </ContentWrapper>
        {fetching && (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>)}
        <Card>
          <CardImgWrapper>
            <MapWrapper>
              <Map customMapStyle={mapContactStyles} customIcon={IMAGES.icon_map_marker_star_grey} />
            </MapWrapper>
            <ContactCardWrapper>
              <ScrollAnimation name='fadeIn' offset={-10}>
                <ContactCard>
                  <IconsRow>
                    <AddressItemIcon className='icon-location' src={IMAGES.icon_location} />
                    <AddressItemIcon src={IMAGES.icon_email} />
                    <AddressItemIcon src={IMAGES.icon_phone} />
                  </IconsRow>
                  <AddressLine>
                    <a itemProp='telephone' href={`tel:${phoneNumber.replace(/\s/g, '')}`}>
                      {phoneNumber}
                    </a>
                  </AddressLine>
                  <AddressSeparator />
                  <AddressLine>
                    <a itemProp='email' href={`mailto:${emailAddress.replace(/\s/g, '')}`}>
                      {emailAddress}
                    </a>
                  </AddressLine>
                  <AddressSeparator />
                  <AddressLine>
                    7A/17 Albert Street, Auckland, 1010, New Zealand
                  </AddressLine>
                </ContactCard>
              </ScrollAnimation>
            </ContactCardWrapper>
          </CardImgWrapper>
          <CardForm>
            <ContactForm />
          </CardForm>
        </Card>
      </SectionWrapper>
    </div>
  )
}

const mapStateToProps = state => ({
  contactForm: state.contactForm
})

export default connect(mapStateToProps, null)(Contact)
