import React from 'react'
import styled from 'styled-components'
import SectionHeader from './SectionHeader'
import SectionTitle from './SectionTitle'
import ScrollAnimation from './ScrollAnimation'
import { WORK } from '../content/servicesContent'
import { media } from '../theme/AppStyles'

const SectionWrapper = styled.div`
  padding-top: 86px;
  ${media.tablet`padding-top: 60px;`};
  ${media.phone`padding-top: 50px;`};
  padding-bottom: 62px;
  ${media.tablet`padding-bottom: 40px;`};
  ${media.phone`padding-bottom: 10px;`};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto-Regular', sans-serif;
`

const SectionHeaderWrapper = styled.div`
  color: ${({ theme }) => theme.colors.text};
`

const SectionTitleWrapper = styled.div`
  color: ${({ theme }) => theme.colors.grey};
  display: flex;
  justify-content: center;
    h3 {
      max-width: 872px;
      line-height: 1.14;
      ${media.tablet`line-height: 1.17;`};
      margin: 26px 0 11px;
      ${media.tablet`margin: 21px 15% 11px;`};
      ${media.phone`margin: 22px 20px 11px;`};
    }
`

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  ${media.phone`flex-direction: column;`};
  justify-content: center;
  ${media.tablet`justify-content: space-evenly;`};
  padding-top: 71px;
  ${media.tablet`padding: 0 20px;`};
  ${media.phone`padding-top: 40px;`};
`

const Col = styled.div`
  max-width: 230px;
  ${media.tablet`max-width: 214px;`};
  ${media.phone`max-width: 210px;`};
  margin: 0 60px 0 24px;
  ${media.tablet`margin: 17px 0 20px 0;`};
  ${media.phone`margin: 0 30px 36px;`};
  text-align: left;
`

const GraphWrapper = styled.div`
  position: relative;
  margin-bottom: 14px;
  ${media.tablet`margin-bottom: 28px;`};
`

const GraphContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 18px;
`

const GraphLegend = styled.div`
  font-size: ${({ theme }) => theme.fontSize.h4};
  color: ${({ theme }) => theme.colors.grey};
  line-height: 28px;
  position: absolute;
  bottom: 6px;
  ${media.tablet`bottom: -12px;`};
  ${media.phone`bottom: -14px;`};
  ${media.tablet`line-height: 1.09;`};
  ${media.tablet`font-size: 22px;`};
`

const Title = styled.div`
  font-family: 'PatchouliDisplay-Bold', sans-serif;
`

const SubTitle = styled.div`
  font-family: PatchouliDisplay, sans-serif;
`

const Content = styled.div`
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: 1.43;
  ${media.tablet`line-height: 1.5;`};
  ${media.tablet`padding: 0 3% 0 0;`};
  ${media.phone`padding: 0;`};
  letter-spacing: normal;
`

export default function ServicesWork () {
  return (
    <SectionWrapper>
      <ScrollAnimation name='fadeInTop' offset={-10}>
        <SectionHeaderWrapper>
          <SectionHeader>
            {WORK.header}
          </SectionHeader>
        </SectionHeaderWrapper>
      </ScrollAnimation>
      <ScrollAnimation name='fadeInBottom' offset={100}>
        <SectionTitleWrapper>
          <SectionTitle>
            {WORK.title}
          </SectionTitle>
        </SectionTitleWrapper>
      </ScrollAnimation>
      <ContentWrapper>
        {WORK.plans.map(({
          title, subTitle, text, graph
        }) => (
          <Col key={title}>
            <GraphWrapper>
              <GraphContainer>
                {graph}
              </GraphContainer>
              <GraphLegend>
                <Title>
                  {title}
                </Title>
                <SubTitle>
                  {subTitle}
                </SubTitle>
              </GraphLegend>
            </GraphWrapper>
            <Content>
              {text}
            </Content>
          </Col>
        ))}
      </ContentWrapper>

    </SectionWrapper>
  )
}
