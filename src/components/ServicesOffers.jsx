import React from 'react'
import styled from 'styled-components'
import SectionHeader from './SectionHeader'
import ScrollAnimation from './ScrollAnimation'
import { OFFERS } from '../content/servicesContent'
import { media } from '../theme/AppStyles'

const SectionWrapper = styled.div`
  margin: 116px 40px 0;
  ${media.tablet`margin: 73px 0 0 0;`};
  ${media.phone`margin: 77px 0 0 0;`};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto-Regular', sans-serif;
`

const SectionHeaderWrapper = styled.div`
  color: ${({ theme }) => theme.colors.text};
`

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin: 10px 40px 0;
  ${media.tablet` margin: -22px 0 0 0;`};
  ${media.phone`overflow: hidden;`};
  ${media.phone`margin: 0;`};
`

const ContentWrapper = styled.div`
  width: 100%;
  position: relative;
  ${media.phone`margin-bottom: -10px;`};
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  ${media.tablet`overflow-x: scroll;`};
  ${media.tablet`-webkit-overflow-scrolling: touch;`};
  ${media.tablet`scroll-behavior: smooth;`};
  ${media.tablet`justify-content: unset;`};
  ${media.tablet`flex-direction: column;`};
  ${media.tablet`overflow: unset;`};
  ${media.tablet`max-width: 100%;`};
  ${media.phone`flex-direction: row;`};
  ${media.phone`overflow-x: scroll;`};
  ${media.phone`max-width: auto;`};
  
  >div:nth-child(2) {
    margin: 0 70px;
    ${media.tablet`margin: 0;`};
  }
`

const Col = styled.div`
  width: 325px;
  ${media.tablet`width: 100%;`};
  ${media.tablet`{min-width: 100%;`};
  margin: 0 36px;
  ${media.tablet`margin: 0 0 32px 0;`};
  ${media.phone`padding: 0 21px 0 19px;`};
  ${media.tablet`display: flex;`};
  ${media.tablet`justify-content: center;`};
  
  >div {
    ${media.tablet`width: 59%;`};
    ${media.tablet`max-width: 450px;`};
    ${media.phone`width: 100%;`};
  }
`

const ColHeader = styled.div`
  position: relative;
  height: 140px;
  ${media.tablet`height: 132px;`};
  ${media.phone`height: 150px;`};
  ${media.tablet`line-height: 0.23;`};
`

const Num = styled.div`
  color: #ececec;
  font-size: 200px;
  ${media.tablet`font-size: 140px;`};
  font-family: PatchouliDisplay, sans-serif;
  height: 100%;
  line-height: 0.9;
  ${media.tablet`line-height: 1;`};
  text-align: left;
  padding-left: 26px;
  ${media.tablet`padding-left: 28px;`};
  ${media.phone`padding-left: 26px;`};
`

const TextBlock = styled.div`
  position: absolute;
  bottom: 8px;
  ${media.phone`bottom: 19px;`};
  text-align: left;
`

const Tag = styled.div`
  font-family: PatchouliDisplay, sans-serif;
  font-size: ${({ theme }) => theme.fontSize.h2};
  ${media.tablet`font-size: 32px;`};
  ${media.tablet`font-weight: bold;`};
  ${media.phone`font-weight: normal;`};
  color: ${({ theme }) => theme.colors.grey};
  line-height: 0.89;
`

const Name = styled.div`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.25;
  margin-top: 9px;
  ${media.tablet`margin-top: 7px;`};
`

const Content = styled.div`
    ${media.phone`margin-top: 10px;`};

  p {
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.colors.text_dark};
    line-height: 1.43;
    ${media.tablet`line-height: 1.5;`};
    margin: 0 0 20px 0;
    ${media.tablet`margin: 0 0 21px 0;`};
    ${media.phone`margin: 0 0 20px 0;`};
    text-align: left;
    letter-spacing: 0.14px;
  }
`

export default function ServicesOffers () {
  return (
    <SectionWrapper>
      <ScrollAnimation name='fadeInTop' offset={-10}>
        <SectionHeaderWrapper>
          <SectionHeader>
            {OFFERS.header}
          </SectionHeader>
        </SectionHeaderWrapper>
      </ScrollAnimation>
      <Wrapper>
        <ContentWrapper>
          {OFFERS.content.map(({
            id, tag, name, text
          }, index) => (
            <Col key={id}>
              <ScrollAnimation name='fadeInLeft' duration={800 + (index * 100 + 200)} offset={100}>
                <div>
                  <ColHeader>
                    <Num>
                      {id}
                    </Num>
                    <TextBlock>
                      <Tag>
                        {tag}
                      </Tag>
                      <Name>
                        {name}
                      </Name>
                    </TextBlock>
                  </ColHeader>
                  <Content>
                    {text.map((p, i) => <p key={i}>{p}</p>)}
                  </Content>
                </div>
              </ScrollAnimation>
            </Col>
          ))}
        </ContentWrapper>
      </Wrapper>
    </SectionWrapper>
  )
}
