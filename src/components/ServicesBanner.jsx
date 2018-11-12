import React from 'react'
import styled from 'styled-components'
import { BANNER } from '../content/servicesContent'
import IMAGES from '../utils/ImagesProvider'
import ServicesFeaturesList from './ServicesFeaturesList'
import { media } from '../theme/AppStyles'

const Wrapper = styled.div`
  font-family: 'Roboto-Regular', sans-serif;
  padding: 40px 40px 51px;
  position: relative;
  ${media.tablet`padding: 0 40px 51px;`};
  ${media.phone`padding: 0;`};
`

const BannerWrapper = styled.div`
  background-image: linear-gradient(to right, #000000, #3b3b3b, #777777, #b9b9b9, #ffffff);
  border-radius: 10px;
  height: 540px;
  ${media.tablet`height: 410px;`};
  ${media.phone`height: 600px;`};
  border-radius: 10px;
  position: relative;
  width: 100%;
  ${media.phone`border-radius: 0;`};
`

const Banner = styled.div`
  height: 540px;
  border-radius: 10px;
  position: relative;
  width: 100%;
  animation-name: fadeIn80;
  animation-duration: 800ms;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  background: url(${IMAGES.services_banner_lg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  ${media.tablet`height: 410px;`};
  ${media.tablet`margin: 0;`};
  ${media.tablet`background: url(${IMAGES.services_banner_md});`};
  ${media.tablet`background-repeat: no-repeat;`};
  ${media.tablet`background-position: center center;`};
  ${media.tablet`background-size: cover;`};
  ${media.phone`height: 600px;`};
  ${media.phone`border-radius: 0;`};
  ${media.phone`background: url(${IMAGES.services_banner_sm});`};
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
  padding: 55px 60px;
  ${media.tablet`padding: 27px 30px;`};
  ${media.phone`padding: 46px 50px;`};
`

const BannerContent = styled.div`
  width: 330px;
  max-height: 75%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 100%;
  position: relative;
  z-index: 2;
  ${media.tablet`width: 100%;`};
  ${media.tablet`max-width: 416px;`};

  button {
    width: 214px;
  }
`

const HeaderWrapper = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.snow};
  width: 100%;
`

const SectionHeader = styled.div`
  height: 25px;
  padding-bottom: 12px;
  border-bottom: 1px solid;
  text-align: left;
  width: 100%;
  animation-name: fadeInTop;
  animation-duration: 800ms;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  ${media.phone`height: 22px;`};
  ${media.tablet`padding-bottom: 10px;`};
  ${media.phone`padding-bottom: 8px;`};
`

const BannerTitle = styled.h4`
  font-family: PatchouliDisplay, sans-serif;
  font-size: ${({ theme }) => theme.fontSize.h4};
  text-align: left;
  line-height: 1;
  animation-name: fadeInLeft;
  animation-duration: 800ms;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  color: ${({ theme }) => theme.colors.snow};
  letter-spacing: 0.2px;
  margin: 26px 0 19px 0;
  ${media.tablet`font-size: 22px;`};
  ${media.tablet`margin: 26px 0 15px 0;`};
  ${media.phone`margin: 29px 0 13px 0;`};
`

const BannerContentText = styled.div`
  text-align: left;
  margin: 0 0 22px 0;
  animation-name: fadeInLeft;
  animation-duration: 800ms;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  ${media.tablet`padding: 0 12% 0 0;`};

  p {
    font-size: ${({ theme }) => theme.fontSize.base};
    color: ${({ theme }) => theme.colors.snow};
    line-height: 1.5;
    margin: 0;
    ${media.tablet`font-size: ${({ theme }) => theme.fontSize.medium};`};
    ${media.phone`opacity: 0.9;`};
  }
`

export default function ServicesBanner () {
  return (
    <Wrapper>
      <BannerWrapper>
        <Banner />
        <BannerContentWrapper>
          <BannerContent>
            <HeaderWrapper>
              <SectionHeader>
                Services
              </SectionHeader>
            </HeaderWrapper>
            <BannerTitle>
              {BANNER.title}
            </BannerTitle>
            <BannerContentText>
              <p>
                {BANNER.content}
              </p>
            </BannerContentText>
          </BannerContent>
        </BannerContentWrapper>
      </BannerWrapper>
      <ServicesFeaturesList />
    </Wrapper>
  )
}
