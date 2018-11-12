import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ScrollAnimation from './ScrollAnimation'
import { GRANTS } from '../content/servicesContent'
import { media } from '../theme/AppStyles'

const SectionWrapper = styled.div`
  font-family: 'Roboto-Regular', sans-serif;
  margin: 0 40px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 252px;
  border-top: 1px solid ${({ theme }) => theme.colors.grey};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  ${media.tablet`padding: 45px 0 49px 0;`};
  ${media.tablet`height: auto;`};
  ${media.phone`min-height: 325px;`};
  ${media.phone`padding: 35px 0 26px 0;`};
  ${media.phone`flex-direction: column;`};
  ${media.phone`margin: 0 20px;`};
`

const Content = styled.div`
  height: 100%;
  align-items: center;
  padding: 0 7px 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: auto;
  min-width: 290px;
  max-width: 71%;
  ${media.tablet`align-items: flex-end;`};
  ${media.tablet`width: 100%;`};
  ${media.tablet`padding: 0 30px 0 21px;`};
  ${media.tablet`padding: 0;`};
  ${media.phone`padding: 0 30px 0 25px;`};
`

const DescriptionWrapper = styled.div`
  width: 463px;
  margin: 0 0 0 36px;
  padding: 0 0 0 14px;
  ${media.tablet`width: auto;`};
  ${media.tablet`padding: 0;`};
  ${media.tablet`margin: 0 0 0 34px;`};
  ${media.phone`margin: 0;`};
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 307px;
  text-align: left;
  font-size: 14px;
  letter-spacing: 0.1px;
`

const Title = styled.div`
  max-width: 287px;
  width: 188px;
  font-family: PatchouliDisplay, sans-serif;
  font-size: calc(44px + (60 - 44) * ((100vw - 768px) / (1440 - 768)));
  line-height: 0.93;
  letter-spacing: normal;
  color: ${({ theme }) => theme.colors.grey};
  margin: 12px 0 0 0;
  text-align: center;
  flex: 1 1 auto;
  ${media.tablet`font-size: 44px;`};
  ${media.tablet`margin: 0;`};
  ${media.tablet`line-height: 1;`};
  ${media.tablet`height: 88px;`};
  ${media.phone`width: 100%;`};
`

const Name = styled.div`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.grey};
  line-height: normal;
  ${media.tablet`line-height: 1.7;`};
  ${media.phone`line-height: 1.2;`};
  ${media.phone`margin: 35px 0 9px 0;`};
`

const Text = styled.div`
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.text_dark};
  line-height: 1.43;
  ${media.tablet`line-height: 1.5;`};
  ${media.tablet`opacity: 0.75;`};
  ${media.tablet`font-size: 12px;`};
  ${media.phone`color: ${({ theme }) => theme.colors.grey};`};
`

const LearnMoreLink = styled.div`
  a {
    color: ${({ theme }) => theme.colors.sky};
    font-size: ${({ theme }) => theme.fontSize.medium};
    line-height: 1.5;
    text-decoration: none;
    cursor: pointer;
    ${media.tablet`font-size: 12px;`};
    ${media.phone`opacity: 0.75;`};
    ${media.phone`font-size: 12px;`};
  }
`

const ImgWrapper = styled.div`
  width: 102px;
  height: 89.1px;
  background: url(${({ large }) => large});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  ${media.tablet`width: 83px;`};
  ${media.tablet`min-width: 83px;`};
  ${media.tablet`height: 63px;`};
  ${media.tablet`background: url(${({ medium }) => medium});`};
  ${media.tablet`background-repeat: no-repeat;`};
  ${media.tablet`background-position: left top;`};
  ${media.tablet`background-size: contain;`};
  ${media.phone`background: url(${({ small }) => small});`};
  ${media.phone`background-repeat: no-repeat;`};
  ${media.phone`background-position: center center;`};
  ${media.phone`background-size: contain;`};
  ${media.phone`width: 64%;`};
`

export default function ServicesGrants () {
  const {
    header, name, text, linkName, linkTo, picture
  } = GRANTS
  return (
    <ScrollAnimation name='fadeIn'>
      <SectionWrapper>
        <Title>
          {header}
        </Title>
        <Content>
          <DescriptionWrapper>
            <Description>
              <Name>
                {name}
              </Name>
              <Text>
                {text}
              </Text>
              <LearnMoreLink>
                <Link to={linkTo}>
                  {linkName}
                </Link>
              </LearnMoreLink>
            </Description>
          </DescriptionWrapper>
          <ImgWrapper
            small={picture.sm}
            medium={picture.md}
            large={picture.lg}
            alt='New Zealand Trade and Enterprise'
          />
        </Content>
      </SectionWrapper>
    </ScrollAnimation>
  )
}
