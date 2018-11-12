import React from 'react'
import styled from 'styled-components'
import IMAGES from '../utils/ImagesProvider'
import { BANNER } from '../content/homeContent'
import ButtonLink from './ButtonLink'
import { media } from '../theme/AppStyles'

const Wrapper = styled.div`
  margin: 40px 40px 0 40px;
  position: relative;
  ${media.tablet`margin: 0 40px 0 40px;`};
  ${media.phone`margin: 0;`};
`

const BannerWrapper = styled.div`
  background: #000000;
  border-radius: 10px;
  height: 420px;
  animation-name: fadeIn;
  animation-duration: 1.2s;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  ${media.tablet`height: 410px;`};
  ${media.phone`height: 600px;`};
  ${media.phone`border-radius: 0;`};
`

const Banner = styled.div`
  background: url(${IMAGES.home_banner_lg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  border-radius: 10px;
  height: 420px;
  opacity: 0.3;
  ${media.tablet`background: url(${IMAGES.home_banner_md});`};
  ${media.tablet`height: 410px;`};
  ${media.tablet`background-repeat: no-repeat;`};
  ${media.tablet`background-position: center center;`};
  ${media.tablet`background-size: cover;`};
  ${media.phone`background: url(${IMAGES.home_banner_sm});`};
  ${media.phone`height: 600px;`};
  ${media.phone`background-repeat: no-repeat;`};
  ${media.phone`background-position: center center;`};
  ${media.phone`background-size: cover;`};
  ${media.phone`border-radius: 0;`};
`

const BannerContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  padding: 53px 60px;
  ${media.tablet`padding: 3.925% 4.362%;`};
  ${media.phone`padding: 14.375% 15.625%;`};
`

const BannerTextWrapper = styled.div`
  font-family: 'Roboto-Regular', sans-serif;
  width: 569px;
  color: ${({ theme }) => theme.colors.snow};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  line-height: 1;
  transform: translate(-50%);
  padding-top: 115px;
  ${media.tablet`width: 450px;`};
  ${media.tablet`max-width: 100%;`};
  ${media.tablet`padding-top: calc(17% - 10px);`};
  ${media.phone`padding: 33.5% 14.5% 0;`};
  ${media.phone`max-width: 100%;`};
  
  h1 {
    animation-name: fadeInTop;
    animation-duration: 800ms;
    animation-delay: 400ms;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
  }
  p {
    animation-name: fadeInTop;
    animation-duration: 800ms;
    animation-delay: 600ms;
    animation-fill-mode: forwards;
    animation-timing-function: ease);
    opacity: 0;
  }
  button {
    animation-name: fadeInBottom;
    animation-duration: 800ms;
    animation-delay: 500ms;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
  }
`

const ContentWrapper = styled.div`
  padding: 0 16px;
  ${media.phone`padding: 0;`};
`

const BannerTitle = styled.h1`
  font-family: PatchouliDisplay, sans-serif;
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSize.h1};
  line-height: 1;
  margin: 0;
  ${media.tablet`font-size: 2em;`};
`

const BannerContentText = styled.p`
  opacity: 0.75;
  line-height: 1.5;
  letter-spacing: 0.1px;
  padding: 0 12px;
  margin: 14px 0;
  font-size: ${({ theme }) => theme.fontSize.base};
  ${media.tablet`font-size: ${({ theme }) => theme.fontSize.medium}`};
  ${media.phone`padding: 17px 0px;`};
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  flex: 1;
  ${media.tablet`margin-top: 22px;`};
  ${media.phone`margin-top: 28px;`};

  button {
    ${media.phone`width: 220px;`};
    ${media.phone`height: 48px;`};
  }
`

export default function HomeBanner () {
  const { title, content } = BANNER
  return (
    <Wrapper>
      <BannerWrapper>
        <Banner />
        <BannerContentWrapper>
          <BannerTextWrapper>
            <ContentWrapper>
              <BannerTitle>
                {title}
              </BannerTitle>
              <BannerContentText>
                {content}
              </BannerContentText>
            </ContentWrapper>
            <ButtonWrapper>
              <ButtonLink
                link='/booking'
                filled
              >
                Book a free consultation
              </ButtonLink>
            </ButtonWrapper>
          </BannerTextWrapper>
        </BannerContentWrapper>
      </BannerWrapper>
    </Wrapper>
  )
}
