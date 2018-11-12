import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import ScrollAnimation from './ScrollAnimation'
import { PACK } from '../content/ourPackContent'

const SectionWrapper = styled.div`
 margin: 48px 40px 0;

  @media (max-width: 768px) {
    margin: 0 0 0 40px;
  }

  @media (max-width: 560px) {
    margin: 18px 0 0 0;
  }
`

const HeaderWrapper = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.text};
  width: 100%;

  @media (max-width: 560px) {
   padding: 0 50px;
  }
`

const Header = styled.div`
  height: 25px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  text-align: left;
  width: 553px;
  max-width: 50%;
  animation-name: fadeInTop;
  animation-duration: 800ms;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;

  @media (max-width: 768px) {
   padding-bottom: 10px;
  }
  @media (max-width: 560px) {
   height: 22px;
   padding-bottom: 8px;
   max-width: 100%;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 560px) {
   flex-direction: column;
  }
`

const Content = styled.div`
  padding: 24px 0 0 0;
  text-align: left;
  flex: 1;
  max-width: 50%;

  @media (max-width: 768px) {
   max-width: 72%;
   padding: 30px 0 0 0;
  }
  @media (max-width: 560px) {
   padding: 26px 50px 0;
   max-width: 100%;
  }
  
  .profile-card_desktop {
    animation-name: fadeInBottom;
    animation-duration: 800ms;
    animation-delay: 400ms;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
  }
`

const TitleSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding-right: 34px;
  }
  @media (max-width: 560px) {
    padding-right: 0;
  }
`

const TitleWrapper = styled.div`
  width: 90%;
  min-width: 400px;
  animation-name: fadeInLeft;
  animation-duration: 1000ms;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;

  @media (max-width: 768px) {
    width: 100%;
    min-width: auto;
  }
`

const Title = styled.div`
  font-family: 'PatchouliDisplay', sans-serif;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.h4};
  line-height: 1.25;
  letter-spacing: normal;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    margin: 0 0 10px 0;
  }
  @media (max-width: 560px) {
    font-size: 22px;
    line-height: 1.27;
    margin: 0 0 5px 0;
  }
`

const Text = styled.div`
  padding-right: 28px;

  @media (max-width: 768px) {
    padding-right: 0;
  }

  p {
    font-family: 'Roboto-Regular', sans-serif;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.base};
    line-height: 1.5;
    margin: 0 0 25px 0;
    
     @media (max-width: 768px) {
      margin: 0 0 22px 0;
      font-size: ${({ theme }) => theme.fontSize.medium};
    }
  }
`

const AboutSectionWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

const ProfileCard = styled.div`
  width: 65%;
  position: relative;
  z-index: 11;
  min-width: 313px;
  
   @media (max-width: 768px) {
      width: 100%;
      min-width: auto;
      padding: 0 7.19% 0 14.376%;
   }

  @media (max-width: 560px) {
    width: calc(100% - 40px);
    margin: 0 20px;
    background: ${({ theme }) => theme.colors.snow};
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.08), 0 2px 4px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
    top: -68px;
    padding: 57px 7.19% 95px;
    text-align: left;
  }
`

const GroupPersonTitle = styled.div`
  font-family: 'PatchouliDisplay', sans-serif;
  font-size: 44px;
  line-height: 0.91;
  color: ${({ theme }) => theme.colors.grey};

   @media (max-width: 768px) {
     font-size: 32px;
   }
`

const GroupPersonLegend = styled.div`
  padding-top: 5px;

  @media (max-width: 768px) {
    padding-top: 10px;
  }
  
  p {
    line-height: 1.43;
    margin: 0;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.medium};
    @media (max-width: 768px) {
      line-height: 1.5;
    }
  }
`

const GroupPersonText = styled.div`
  margin: 40px 0 0 0;

  @media (max-width: 768px) {
    margin: 26px 0 0 0;
  }
  @media (max-width: 560px) {
    margin: 30px 0 20px;
  }
  
  p {
    line-height: 24px;
    margin: 0 0 25px 0;
    color: ${({ theme }) => theme.colors.text_dark};
    font-size: ${({ theme }) => theme.fontSize.h5};

    @media (max-width: 768px) {
      line-height: 1.5;
      font-size: ${({ theme }) => theme.fontSize.medium};
      margin: 0 0 22px 0;
    }
    @media (max-width: 560px) {
     margin: 0 0 20px 0;
    }
  }
`

const GroupPersonFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

   div {
    align-items: center;
    display: flex;
  }
`

const PersonLink = styled.div`
  a {
    font-family: 'Roboto-Regular', sans-serif;
    color: ${({ theme }) => theme.colors.sky};
    font-size: ${({ theme }) => theme.fontSize.base};
    line-height: 1.5;
    text-decoration: none;
    letter-spacing: 0.4px;
    cursor: pointer;
     @media (max-width: 768px) {
      font-size: ${({ theme }) => theme.fontSize.medium};
     }
    
    &:active {
      filter: brightness(95%);
    }

    &:focus {
      filter: brightness(95%);
    }
  }
`

const PersonSignatureImgWrapper = styled.div`
  width: 100%;
  max-width: 212px;

  img {
    width: 100%;
  }

  @media (max-width: 768px) {
    max-width: 140px;
    position: absolute;
    right: 0;
    bottom: -50%;
  }

  @media (max-width: 660px) {
    top: 10%;
    bottom: auto;
  }

  @media (max-width: 560px) {
    top: 150%;
    bottom: auto;
  }
`

const ProfileSectionWrapper = styled.div`
  width: 52%;
  display: flex;
  justify-content: flex-end;
  animation-name: fadeIn;
  animation-duration: 1200ms;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  
   @media (max-width: 768px) {
    width: 38%;
    padding-top: 70px;
  }
  @media (max-width: 560px) {
    width: 100%;
    padding-top: 13px;
  }
`

const ImgWrapper = styled.div`
  height: 904px;
  width: 81.325%;
  border-radius: 10px;
  background: url(${({ large }) => large});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  @media (max-width: 768px) {
   height: 708px;
   width: 100%;
   border-top-right-radius: 0;
   border-bottom-right-radius: 0;
   background: url(${({ medium }) => medium});
   background-repeat: no-repeat;
   background-position: center center;
   background-size: cover;
  }
  @media (max-width: 560px) {
   border-radius: 0;
   height: 512px;
   background: url(${({ medium }) => medium});
   background-repeat: no-repeat;
   background-position: center center;
   background-size: cover;
  }
  @media (max-width: 376px) {
   background: url(${({ small }) => small});
   background-repeat: no-repeat;
   background-position: center center;
   background-size: cover;
  }
`

OurPackAbout.propTypes = {
  width: PropTypes.number
}

function OurPackAbout (props) {
  const {
    header, title, text, profile
  } = PACK
  const { width } = props
  const MOBILE_VIEW = width <= 560
  const PROFILE_CARD = (
    <ProfileCard>
      <GroupPersonTitle>
        {profile.name}
      </GroupPersonTitle>
      <div>
        <GroupPersonLegend>
          {profile.info.map((p, i) => (<p key={i}>{p}</p>))}
        </GroupPersonLegend>
        <GroupPersonText>
          {profile.text.map((p, i) => (<p key={i}>{p}</p>))}
        </GroupPersonText>
        <GroupPersonFooter>
          <PersonLink>
            <a href={profile.linkTo} target='_blank' rel='noopener noreferrer'>
              {profile.linkName}
            </a>
          </PersonLink>
          <PersonSignatureImgWrapper>
            <img
              src={profile.profileSignatureImg.sm}
              alt='Toss signature'
            />
          </PersonSignatureImgWrapper>
        </GroupPersonFooter>
      </div>
    </ProfileCard>
  )
  return (
    <SectionWrapper>
      <HeaderWrapper>
        <Header>
          {header}
        </Header>
      </HeaderWrapper>
      <ContentWrapper>
        <Content>
          <TitleSection>
            <TitleWrapper>
              <Title>
                {title}
              </Title>
              <Text>
                {text.map((p, i) => (<p key={i}>{p}</p>))}
              </Text>
            </TitleWrapper>
            <div className='profile-card_desktop'>
              <AboutSectionWrapper>
                {!MOBILE_VIEW ? PROFILE_CARD : null}
              </AboutSectionWrapper>
            </div>
          </TitleSection>
        </Content>
        <ProfileSectionWrapper>
          <ImgWrapper
            small={profile.profileImg.sm}
            medium={profile.profileImg.md}
            large={profile.profileImg.lg}
            alt='Toss profile photo'
          />
        </ProfileSectionWrapper>
        <ScrollAnimation name='fadeInBottom' duration={800}>
          {MOBILE_VIEW ? PROFILE_CARD : null}
        </ScrollAnimation>
      </ContentWrapper>
    </SectionWrapper>
  )
}

const mapStateToProps = state => ({
  width: state.screenSize.width
})

export default connect(mapStateToProps, null)(OurPackAbout)
