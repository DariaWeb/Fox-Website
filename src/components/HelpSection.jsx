import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ResponsiveImg from './ResponsiveImg'
import IMAGES from '../utils/ImagesProvider'
import { media } from '../theme/AppStyles'

const SectionWrapper = styled.div`
  width: 100%;
`

const SectionContent = styled.div`
  background: ${({ theme }) => theme.colors.yellow};
  display: flex;
  justify-content: space-between;
  margin: 0 40px;
  ${media.phone`margin: 0 20px;`};
  position: relative;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  overflow: hidden;
  padding: 80px 113px 53px 112px;
  ${media.tablet`padding: 6% 15% 5.15% 15%;`};
  ${media.phone`padding: 46px 40px 40px;`};
  ${media.phone`align-items: center;`};
  text-align: left;
  font-family: 'Roboto-Regular', sans-serif;
  
  @media only screen and (max-width: 992px) {
    flex-direction: column;
  } 
`

const TextWrapper = styled.div`
  width: 455px;
  margin-right: 24px;
  
  @media only screen and (max-width: 992px) {
    width: auto;
    min-width: auto;
    margin-right: 0;
    text-align: center;
  } 
`

const Title = styled.h3`
  font-family: PatchouliDisplay, sans-serif;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.h3};
  ${media.tablet`font-size: ${({ theme }) => theme.fontSize.h4};`};
  margin: 0;
`

const Content = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.base};
  ${media.tablet`font-size: ${({ theme }) => theme.fontSize.medium};`};
  line-height: 1.5;
  margin-top: 8px;
  letter-spacing: 0.18px;
  opacity: 0.6;
`

const ButtonWrapper = styled.div`
  padding-top: 34px;
  ${media.tablet`padding-top: 20px;`};
  ${media.phone`padding-top: 17px;`};
  ${media.phone`width: 200px;`};
  display: flex;
  justify-content: flex-end;
  
  @media only screen and (max-width: 992px) {
    justify-content: center;
  } 
`

const ButtonRow = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  ${media.phone`flex-direction: column-reverse;`};
  ${media.phone`align-items: center;`};
`

const ContactButton = styled.button`
  width: 214px;
  ${media.tablet`width: 216px;`};
  ${media.phone`width: 200px;`};
  height: 50px;
  ${media.tablet`height: 40px;`};
  ${media.phone`height: 48px;`};
  margin: 0;
  padding: 0;
  background: transparent;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
 
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSize.base};
    ${media.tablet`font-size: ${({ theme }) => theme.fontSize.medium};`};
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.2px;
  }
`

const BookButton = ContactButton.extend`
  background: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.black};
  margin: 0 0 0 12px;
  ${media.tablet`margin: 0 0 0 20px;`};
  ${media.phone`margin: 0 0 10px 0;`};
  
  a {
    color: ${({ theme }) => theme.colors.snow};
  }
`

const LogoWrapper = styled.div`

  img {
    width: 40px;
    height: 43px;
    ${media.tablet`width: 27.9px;`};
    ${media.tablet`height: 30px;`};
    position: absolute;
    top: -43px;
    ${media.tablet`top: -29px;`};
    ${media.tablet`right: 24px;`};
    ${media.phone`right: 16px;`};
    right: 15px;
  }
`

export default function HelpSection () {
  return (
    <SectionWrapper>
      <SectionContent>
        <TextWrapper>
          <Title>
            How we can help?
          </Title>
          <Content>
            Talk to us about start-up consultancy, business planning, business mentoring and growing
            your existing business today.
          </Content>
        </TextWrapper>
        <ButtonWrapper>
          <ButtonRow>
            <LogoWrapper>
              <ResponsiveImg
                small={IMAGES.footer_wolf_icon_sm}
                medium={IMAGES.footer_wolf_icon_md}
                large={IMAGES.footer_wolf_icon_lg}
                alt='Wolf&Fox logo'
              />
            </LogoWrapper>
            <ContactButton>
              <Link to='/contact'>
                Contact us
              </Link>
            </ContactButton>
            <BookButton>
              <Link to='/booking'>
                Book consultation
              </Link>
            </BookButton>
          </ButtonRow>
        </ButtonWrapper>
      </SectionContent>
    </SectionWrapper>
  )
}
