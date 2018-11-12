import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import SectionHeader from './SectionHeader'
import ScrollAnimation from './ScrollAnimation'
import { RESULTS } from '../content/servicesContent'
import { media } from '../theme/AppStyles'

const SectionWrapper = styled.div`
  padding: 63px 0 98px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: 0.2px;
  ${media.tablet`padding: 60px 0 40px 0;`};
  ${media.phone`padding: 50px 0 28px 0;`};
`

const SectionHeaderWrapper = styled.div`
  color: ${({ theme }) => theme.colors.text};
`

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 44px;
  padding: 0 40px;
  ${media.tablet`margin-top: 27px;`};
  ${media.phone`padding: 0;`};
`

const GalleryRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
  ${media.tablet`margin-bottom: 19px;`};
  ${media.phone`margin-bottom: 0;`};
  ${media.phone`flex-direction: column;`};

    .gallery_card {
      display: flex;
      position: relative;
      border-radius: 10px;
      max-width: 40%;
      ${media.phone`max-width: 100%;`};
      ${media.phone`margin-bottom: 30px;`};

      >div {
        border-radius: 10px;
        width: 100%;
        ${media.phone`width: auto;`};
      }

      &.right {
      justify-content: flex-end;
      margin-right: 6px;
      ${media.tablet`margin-right: 1.455%;`};
      ${media.phone`margin-right: 0;`};
         div {
          ${media.phone`border-radius: 0;`};
          ${media.phone`border-top-left-radius: 10px;`};
          ${media.phone` border-bottom-left-radius: 10px;`};
        }
      }
      
     
      &.left {
      justify-content: flex-start;
      margin-left: 6px;
      ${media.tablet`margin-left: 1.455%;`};
      ${media.phone`margin-left: 0;`};
        div {
          ${media.phone`border-radius: 0;`};
          ${media.phone`border-top-right-radius: 10px;`};
          ${media.phone`border-bottom-right-radius: 10px;`};
        }
      }
      div {
          .quantity {
            ${media.tablet`line-height: 1.29;`};
            ${media.phone`line-height: 1.13;`};
          }
          .name {
            margin-top: 13px;
            ${media.tablet`margin-top: 18px;`};
            ${media.phone`margin-top: 22px;`};
          }
      }
    }
`

const CardWrapper = styled.div`
  position: relative;
`

const ImgWrapper = styled.div`
  width: 327px;
  height: 263px;
  max-width: 100%;
  max-height: 100%;
  background: url(${({ large }) => large});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  border-radius: 10px;
  ${media.tablet`background: url(${({ medium }) => medium});`};
  ${media.tablet`background-repeat: no-repeat;`};
  ${media.tablet`background-position: center center;`};
  ${media.tablet`background-size: cover;`};
  ${media.tablet`height: 202px;`};
  ${media.tablet`width: 251px;`};
  ${media.tablet`border-radius: 10px;`};
  ${media.phone`width: 237px;`};
  ${media.phone`background: url(${({ small }) => small});`};
  ${media.phone`background-repeat: no-repeat;`};
  ${media.phone`background-position: center center;`};
  ${media.phone`background-size: cover;`};
`

const StatisticsCard = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.grey};
  padding: 0;

  .gallery_card_first {
    ${media.tablet`margin-top: -10px;`};
    ${media.phone`padding-top: 29px;`};
  }
  .gallery_card_second {
    ${media.tablet`margin-top: -10px;`};
    ${media.phone`padding-top: 32px;`};
  }
  .gallery_card_third {
    ${media.tablet`margin-top: -20px;`};
    ${media.phone`padding-top: 29px;`};
  }
  .gallery_card_forth {
    ${media.tablet`margin-top: -10px;`};
    ${media.tablet`padding: 30px 0 0 0;`};
    @media (max-width: 725px) {
      padding: 30px 30px 0;
    }
    ${media.phone`padding: 27px 20px 0 0 ;`};

    .name {
      line-height: 1.17;
      ${media.tablet`margin-top: 24px !important;`};
    }
  }
`

const StatisticsCardLeft = StatisticsCard.extend`
  left: -50%;
`

const StatisticsCardRight = StatisticsCard.extend`
  right: -50%;
`

const Quantity = styled.div`
  font-family: 'Roboto-Thin', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 38.025%;
  font-weight: 100;
  line-height: 0.72;
  font-size: calc(67px + (96 - 67) * ((100vw - 768px) / (1440 - 768)));
  ${media.tablet`font-size: calc(67px + (67 - 50) * ((100vw - 768px) / (768 - 377)));`};
  ${media.tablet`height: 48px;`};
  ${media.phone`font-size: 67px;`};
`

const Name = styled.div`
  font-family: PatchouliDisplay, sans-serif;
  font-size: calc(24px + (28 - 24) * ((100vw - 768px) / (1440 - 768)));
  line-height: 1;
  text-align: center;
  max-width: 234px;
  ${media.tablet`font-size: calc(20px + (24 - 20) * ((100vw - 768px) / (768 - 377)));`};
  ${media.tablet`line-height: 0.75;`};
  ${media.phone`max-width: 190px;`};
  ${media.phone`font-size: 24px;`};
`

const Period = styled.div`
  font-family: PatchouliDisplay, sans-serif;
  font-size: calc(14px + (18 - 14) * ((100vw - 768px) / (1440 - 768)));
  line-height: 0.75;
  ${media.tablet`font-size: ${({ theme }) => theme.fontSize.medium};`};
  ${media.tablet`line-height: 1.29;`};
`

StatisticsCardComponent.propTypes = {
  quantity: PropTypes.string,
  name: PropTypes.string,
  period: PropTypes.string,
  className: PropTypes.string
}

function StatisticsCardComponent (props) {
  const {
    quantity, name, period, className
  } = props
  return (
    <div className={className}>
      <Quantity className='quantity'>
        {quantity}
      </Quantity>
      <Name className='name'>
        {name}
      </Name>
      <Period className='period'>
        {period}
      </Period>
    </div>
  )
}

export default function ServicesWork () {
  const { header, statisticsCards } = RESULTS
  return (
    <SectionWrapper>
      <ScrollAnimation name='fadeInTop' offset={-10}>
        <SectionHeaderWrapper>
          <SectionHeader>
            {header}
          </SectionHeader>
        </SectionHeaderWrapper>
      </ScrollAnimation>
      <ContentWrapper>
        <GalleryRow>
          <div className='gallery_card right'>
            <CardWrapper>
              <ScrollAnimation name='fadeInLeft' offset={100}>
                <ImgWrapper
                  small={statisticsCards[0].picture.sm}
                  medium={statisticsCards[0].picture.md}
                  large={statisticsCards[0].picture.lg}
                />
              </ScrollAnimation>
              <StatisticsCardLeft>
                <StatisticsCardComponent {...statisticsCards[0]} className='gallery_card_first' />
              </StatisticsCardLeft>
            </CardWrapper>
          </div>
          <div className='gallery_card left'>
            <CardWrapper>
              <ScrollAnimation name='fadeInTop' offset={100}>
                <ImgWrapper
                  small={statisticsCards[1].picture.sm}
                  medium={statisticsCards[1].picture.md}
                  large={statisticsCards[1].picture.lg}
                />
              </ScrollAnimation>
              <StatisticsCardRight>
                <StatisticsCardComponent {...statisticsCards[1]} className='gallery_card_second' />
              </StatisticsCardRight>
            </CardWrapper>
          </div>
        </GalleryRow>
        <GalleryRow>
          <div className='gallery_card right'>
            <CardWrapper>
              <ScrollAnimation name='fadeInBottom' offset={100}>
                <ImgWrapper
                  small={statisticsCards[2].picture.sm}
                  medium={statisticsCards[2].picture.md}
                  large={statisticsCards[2].picture.lg}
                />
              </ScrollAnimation>
              <StatisticsCardLeft>
                <StatisticsCardComponent {...statisticsCards[2]} className='gallery_card_third' />
              </StatisticsCardLeft>
            </CardWrapper>
          </div>
          <div className='gallery_card left'>
            <CardWrapper>
              <ScrollAnimation name='fadeInRight' offset={100}>
                <ImgWrapper
                  small={statisticsCards[3].picture.sm}
                  medium={statisticsCards[3].picture.md}
                  large={statisticsCards[3].picture.lg}
                />
              </ScrollAnimation>
              <StatisticsCardRight>
                <StatisticsCardComponent {...statisticsCards[3]} className='gallery_card_forth' />
              </StatisticsCardRight>
            </CardWrapper>
          </div>
        </GalleryRow>
      </ContentWrapper>
    </SectionWrapper>
  )
}
