import React from 'react'
import styled from 'styled-components'
import IMAGES from '../utils/ImagesProvider'
import { BANNER } from '../content/workshopsContent'
import { media } from '../theme/AppStyles'

const Wrapper = styled.div`
  font-family: 'Roboto-Regular', sans-serif;
  padding: 40px 40px 49px;
  position: relative;
  ${media.tablet`padding: 0 40px 39px;`};
  ${media.phone`padding: 0;`};
`

const BannerWrapper = styled.div`
  background-image: linear-gradient(to right, #000000, #3b3b3b, #777777, #b9b9b9, #ffffff);
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
  background: url(${IMAGES.workshops_banner_bg_lg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  ${media.tablet`height: 410px;`};
  ${media.tablet`margin: 0;`};
  ${media.tablet`background: url(${IMAGES.workshops_banner_bg_md});`};
  ${media.tablet`background-repeat: no-repeat;`};
  ${media.tablet`background-position: center center;`};
  ${media.tablet`background-size: cover;`};
  ${media.phone`height: 600px;`};
  ${media.phone`background: url(${IMAGES.workshops_banner_bg_sm});`};
  ${media.phone`background-repeat: no-repeat;`};
  ${media.phone`background-position: center center;`};
  ${media.phone`background-size: cover;`};
  ${media.phone`border-radius: 0;`};
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

const BannerContent = styled.div`
  width: 493px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 100%;
  ${media.tablet`width: 100%;`};
  ${media.tablet`max-width: 416px;`};
`

const ThemeBlockHeaderWrapper = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.snow};
  width: 100%;
`

const ThemeBlockHeader = styled.div`
  height: 25px;
  border-bottom: 1px solid;
  text-align: left;
  width: 100%;
  animation-name: fadeInTop;
  animation-duration: 800ms;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  padding-bottom: 12px;
  ${media.tablet`padding-bottom: 10px;`};
  ${media.phone`padding-bottom: 8px;`};
  ${media.phone`height: 22px;`};
`

const BannerTitle = styled.h4`
  font-family: PatchouliDisplay, sans-serif;
  font-size: ${({ theme }) => theme.fontSize.h4};
  color: ${({ theme }) => theme.colors.snow};
  letter-spacing: 0.2px;
  margin: 26px 0 10px 0;
  text-align: left;
  line-height: 1;
  animation-name: fadeInLeft;
  animation-duration: 800ms;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  ${media.tablet`font-size: 22px;`};
  ${media.tablet`margin: 26px 0 15px 0;`};
  ${media.phone`margin: 29px 0 13px 0;`};
`

const BannerContentText = styled.div`
  text-align: left;
  margin: 0 0 25px 0;
  animation-name: fadeInLeft;
  animation-duration: 800ms;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;

  p {
    font-size: ${({ theme }) => theme.fontSize.base};
    color: ${({ theme }) => theme.colors.snow};
    line-height: 1.5;
    margin: 0;
    ${media.tablet`font-size: ${({ theme }) => theme.fontSize.medium};`};
    ${media.phone`opacity: 0.9;`};
  }
`

const ButtonWrapper = styled.div`
  animation-name: fadeInBottom;
  animation-duration: 800ms;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  ${media.phone`position: absolute;`};
  ${media.phone`bottom: 38px;`};
  
  button {
    width: 214px;
    ${media.phone`width: 140px;`};
    ${media.phone`height: 48px;`};
      a {
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 40px;
        font-size: ${({ theme }) => theme.fontSize.medium};
        color: ${({ theme }) => theme.colors.grey};
      }
    
      &:active {
        a {
          background-color: rgba(0, 0, 0, 0.05);
        }
      }

      &:focus {
        a {
         background-color: rgba(0, 0, 0, 0.05);
       }
      }
  }
`

const ButtonFill = styled.button`
  color: ${({ theme }) => theme.colors.grey};
  background: ${({ theme }) => theme.colors.yellow};
  font-size: ${({ theme }) => theme.fontSize.medium};
  border-radius: 4px;
  border: 0;
  height: 40px;
  min-height: 40px;
  padding: 0;
  margin: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function WorkshopsBanner () {
  const {
    header, title, text, linkName, linkTo
  } = BANNER
  return (
    <Wrapper>
      <BannerWrapper>
        <Banner />
        <BannerContentWrapper>
          <BannerContent>
            <ThemeBlockHeaderWrapper>
              <ThemeBlockHeader>
                {header}
              </ThemeBlockHeader>
            </ThemeBlockHeaderWrapper>
            <BannerTitle>
              {title}
            </BannerTitle>
            <BannerContentText>
              {text.map((p, i) => (<p key={i}>{p}</p>))}
            </BannerContentText>
            <ButtonWrapper>
              <ButtonFill>
                <a
                  href={linkTo}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {linkName}
                </a>
              </ButtonFill>
            </ButtonWrapper>
          </BannerContent>
        </BannerContentWrapper>
      </BannerWrapper>
    </Wrapper>
  )
}
