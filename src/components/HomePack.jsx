import React from 'react'
import styled from 'styled-components'
import ButtonLink from './ButtonLink'
import SectionHeader from './SectionHeader'
import SectionTitle from './SectionTitle'
import ResponsiveImg from './ResponsiveImg'
import ScrollAnimation from './ScrollAnimation'
import { PACK } from '../content/homeContent'
import { media } from '../theme/AppStyles'

const SectionWrapper = styled.div`
  font-family: 'Roboto-Regular', sans-serif;
  margin: 90px 40px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.tablet`margin: 56px 0 40px;`};
  ${media.phone`margin: 47px 0 40px;`};
`

const SectionHeaderWrapper = styled.div`
  color: ${({ theme }) => theme.colors.text};
`

const SectionTitleWrapper = styled.div`
  color: ${({ theme }) => theme.colors.grey};
  display: flex;
  justify-content: center;
    h3 {
      max-width: 712px;
      line-height: 1.25;
      margin: 28px 0;
      ${media.tablet`margin: 15px 0;`};
    }
`

const SectionContentWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0 0 12px 0;
  justify-content: center;
  ${media.tablet`margin: 0 0 12px 0;`};
  ${media.tablet`margin-bottom: 0;`};
  ${media.tablet`padding: 20px 40px 34px`};
  ${media.phone`padding: 20px 40px 76px`};
`

const Content = styled.div`
  display: flex;
  max-width: 100%;
  flex-wrap: nowrap;
  ${media.tablet`flex-wrap: wrap;`};
  ${media.tablet`justify-content: center;`};
`

const ProfileImageWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  height: auto;
  justify-content: center;
  min-width: 280px;
  ${media.tablet`min-width: auto;`};
`

const ProfileImage = styled.div`
  max-width: 400px;
  img {
    object-fit: contain;
    border-radius: 50%;
    ${media.tablet`max-width: 280px;`};
    ${media.tablet`max-height: 280px;`};
  }
`

const ProfileDescriptionWrapper = styled.div`
  margin: 0 0 0 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 34px;
  max-width: 100%;
  min-width: 45%;
  width: 524px;
  position: relative;
  ${media.tablet`margin-left: 34px;`};
  ${media.tablet`flex: 1;`};
  ${media.tablet`padding-top: 9px;`};
  ${media.tablet`max-width: 100%;`};
  ${media.tablet`min-width: 50%;`};
  ${media.tablet`margin-right: 0;`};
  ${media.tablet`align-items: center;`};
  ${media.phone`margin: 0;`};
  ${media.phone`padding: 23px 10px;`};
`

const ProfileName = styled.h4`
  font-family: 'Roboto-Light', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.h4};
  color: ${({ theme }) => theme.colors.grey};
  text-align: left;
  margin: 0;
  font-weight: normal;
  letter-spacing: 0.2px;
  line-height: 1;
  ${media.tablet`font-size: 22px`};
`

const ProfileTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.text};
  text-align: left;
  letter-spacing: 0.2px;
  line-height: 1.5;
  margin: 0;
  ${media.tablet`font-size: ${({ theme }) => theme.fontSize.medium};`};
  ${media.tablet`line-height: 1.71;`};
  ${media.phone`line-height: 1.36;`};
`

const ProfileLink = styled.a`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.sky};
  display: block;
  margin-top: 12px;
  letter-spacing: 0.3px;
  text-align: left;
  cursor: pointer;
  line-height: 1.5;
  text-decoration: none;
  ${media.tablet`font-size: ${({ theme }) => theme.fontSize.medium};`};
  ${media.tablet`margin-top: 10px;`};
  ${media.phone`margin-top: 7px;`};
  ${media.tablet`line-height: 1;`};
 
  &:active {
    filter: brightness(95%);
  }

  &:focus {
    filter: brightness(95%);
  }
`

const ProfileDescription = styled.div`
  margin: 12px 0 0 0;
  max-width: 452px;
  ${media.phone`margin: 22px 0 0 0;`};
`

const ProfileDescriptionText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: normal;
  text-align: left;
  margin: 0 0 23px 0;
  line-height: 1.5;
  ${media.tablet`font-size: 12px;`};
  ${media.tablet`margin: 0 0 19px 0;`};
  ${media.phone`font-size: ${({ theme }) => theme.fontSize.medium};`};
  ${media.phone`margin: 0;`};
  ${media.phone`line-height: 1.29;`};
`

const ProfileSignatureWrapper = styled.div`
  position: absolute;
  bottom: -75px;
  right: 0;
  ${media.tablet`bottom: -41px;`};
  ${media.phone`bottom: -55px;`};

  img {
    width: 210px;
    height: 77px;
    object-fit: contain;
    opacity: 0.7;
    ${media.tablet`width: 147px;`};
    ${media.tablet`height: 54px;`};
  }
`

const ButtonWrapper = styled.div`

  button {
    border: solid 1px ${({ theme }) => theme.colors.text_darker};
    ${media.phone`width: 220px;`};
    ${media.phone`height: 48px;`};
  }
`

export default function HomePack () {
  const {
    title, header, profileImg, signatureImg, content
  } = PACK
  return (
    <SectionWrapper>
      <SectionHeaderWrapper>
        <SectionHeader>
          {header}
        </SectionHeader>
      </SectionHeaderWrapper>
      <ScrollAnimation name='fadeInBottom'>
        <SectionTitleWrapper>
          <SectionTitle>
            {title}
          </SectionTitle>
        </SectionTitleWrapper>
      </ScrollAnimation>
      <SectionContentWrapper>
        <Content>
          <ScrollAnimation name='fadeIn' offset={-100} duration={2000}>
            <ProfileImageWrapper>
              <ProfileImage>
                <ResponsiveImg
                  small={profileImg.sm}
                  medium={profileImg.md}
                  large={profileImg.lg}
                  alt='Profile'
                />
              </ProfileImage>
            </ProfileImageWrapper>
          </ScrollAnimation>
          <ProfileDescriptionWrapper>
            <ScrollAnimation name='fadeInBottom'>
              <div>
                <ProfileName>
                  {content.name}
                </ProfileName>
                <ProfileTitle>
                  {content.title}
                </ProfileTitle>
                <ProfileLink href={content.linkTo} target='_blank' rel='noopener noreferrer'>
                  {content.linkName}
                </ProfileLink>
                <ProfileDescription>
                  {content.text.map((p, i) => <ProfileDescriptionText key={i}>{p}</ProfileDescriptionText>)}
                </ProfileDescription>
                <ProfileSignatureWrapper>
                  <ResponsiveImg
                    small={signatureImg.sm}
                    medium={signatureImg.md}
                    large={signatureImg.lg}
                    alt='Toss&apos;s Signature'
                  />
                </ProfileSignatureWrapper>
              </div>
            </ScrollAnimation>
          </ProfileDescriptionWrapper>
        </Content>
      </SectionContentWrapper>
      <ScrollAnimation name='fadeInBottom'>
        <ButtonWrapper>
          <ButtonLink link='/our-pack'>
            Read more about our partners
          </ButtonLink>
        </ButtonWrapper>
      </ScrollAnimation>
    </SectionWrapper>
  )
}
