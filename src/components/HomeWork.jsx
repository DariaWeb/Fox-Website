import React, { Component } from 'react'
import Slider from 'react-id-swiper'
import styled from 'styled-components'
import ButtonLink from './ButtonLink'
import SectionHeader from './SectionHeader'
import SectionTitle from './SectionTitle'
import makeUrl from '../utils/makeUrl'
import ResponsiveImg from './ResponsiveImg'
import ScrollAnimation from './ScrollAnimation'
import { TESTIMONIALS, WORK } from '../content/homeContent'
import { media } from '../theme/AppStyles'

const SectionWrapper = styled.div`
  font-family: 'Roboto-Regular', sans-serif;
  padding: 50px 0 40px 0;
  ${media.tablet`padding: 0 0 28px 0;`};
  ${media.phone`padding: 0 0 42px 0;`};
`

const SectionHeaderWrapper = styled.div`
  color: ${({ theme }) => theme.colors.text};
`

const SectionTitleWrapper = styled.div`
  color: ${({ theme }) => theme.colors.grey};
  margin: 29px 0 34px;
  ${media.tablet`margin: 18px 50px 25px;`};

  h3 {
    margin: 0;
    ${media.phone`line-height: 1.17;`};
  }
`

const MemberCardImgWrapper = styled.div`
  object-fit: cover;
  border-radius: 4px;
  outline: none;
  
  img {
    border-radius: 4px;
    width: 372px;
    max-width: 100%;
    height: 254px;
    ${media.phone`border-radius: 0;`};
    ${media.phone`height: 220px;`};
  }
`

const SliderWrapper = styled.div`
  margin-bottom: 30px;
  position: relative;
  ${media.phone`margin-bottom: 24px;`};

  .move-on-hover {
      position: absolute;
      width: 10%;
      background-color: transparent;
      height: 100%;
      z-index: 10;
      top: 0;
      ${media.tablet`width: 0;`};
      
      &.goPrevious {
        left: 0;
      }
      &.goNext {
        right: 0;
      }
  }
  
  .swiper-container {
    height: 460px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ${media.tablet`height: 450px;`};
    ${media.phone`height: 494px;`};
  }
  .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    display: inline-block;
    background: #4a4a4a;
    opacity: .3;
  }
  .swiper-pagination {
    position: relative;
    bottom: 0;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
  }
  
`

const SliderItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  outline: none;
  width: 400px !important;
  height: 408px;
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.08), 0 2px 4px 0 rgba(0, 0, 0, 0.19);
  margin: 0 10px;
  padding: 14px;
  ${media.tablet`max-width: 85%;`};
  ${media.phone`max-width: 100%;`};
  ${media.phone`width: 240px !important;`};
  ${media.phone`height: 454px;`};
  ${media.phone`padding: 14px 10px 28px 10px;`};
`

const MemberCardFooter = styled.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  ${media.phone`flex-direction: column;`};
  ${media.phone`align-items: center;`};
`

const InfoTextWrapper = styled.div`
  ${media.phone`padding-left: 10px;`};
  ${media.phone`width: 100%;`};
`

const MemberName = styled.h5`
  font-size: ${({ theme }) => theme.fontSize.h5};
  line-height: 1.78;
  text-align: left;
  color: ${({ theme }) => theme.colors.grey};
  margin: 22px 0 0;
  font-weight: normal;
  ${media.phone`line-height: 1;`};
  ${media.phone`margin: 6px 0 8px;`};
`

const MemberLink = styled.a`
  font-size: ${({ theme }) => theme.fontSize.base};
  text-align: left;
  color: ${({ theme }) => theme.colors.sky};
  margin-top: -3px;
  display: block;
  text-decoration: none;
  letter-spacing: 0.2px;
`

const LogoImgWrapper = styled.div`
  object-fit: contain;
  opacity: 0.4;
  width: 100px;
  height: 100px;
  ${media.phone`opacity: 0.3;`};

    img {
      width: 100%;
      height: 100%;
    }
`

const TagsWrapper = styled.div`
  text-align: left;
  ${media.phone`margin-top: 18px;`};
`

const HashTag = styled.span`
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.lightgrey};
  margin-right: 10px;
  letter-spacing: 0.2px;
  ${media.phone`margin-right: 5px;`};
`

const ButtonWrapper = styled.div`
  button {
    border: solid 1px ${({ theme }) => theme.colors.text_darker};
    ${media.phone`width: 220px;`};
    ${media.phone`height: 48px;`};
  }
`

class HomeWork extends Component {
  swiper = null

  hoverOn = (val) => {
    val === 'prev' ? this.swiper.slidePrev(800) : this.swiper.slideNext(800)
  }

  render () {
    const settings = {
      centeredSlides: true,
      loop: true,
      slidesPerView: 'auto',
      touchRatio: 0.2,
      slideToClickedSlide: true,
      iOSEdgeSwipeDetection: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletClass: 'swiper-pagination-bullet'
      },
      speed: 600
    }
    return (
      <SectionWrapper>
        <ScrollAnimation name='fadeInTop' offset={100}>
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
        <ScrollAnimation name='fadeInRight' offset={100}>
          <SliderWrapper className='home-work-slider-wrapper'>
            <div className='move-on-hover goPrevious' onMouseEnter={() => this.hoverOn('prev')} />
            <Slider {...settings} ref={(node) => { if (node) this.swiper = node.swiper }}>
              {TESTIMONIALS.clients.map(item => (
                <SliderItem key={item.companyName}>
                  <MemberCardImgWrapper>
                    <ResponsiveImg
                      small={item.images.cropped.small}
                      medium={item.images.cropped.medium}
                      large={item.images.cropped.large}
                      alt={item.images.alt}
                    />
                  </MemberCardImgWrapper>
                  <MemberCardFooter>
                    <LogoImgWrapper>
                      <ResponsiveImg
                        small={item.images.logo.small}
                        medium={item.images.logo.medium}
                        large={item.images.logo.large}
                        alt={item.images.alt}
                      />
                    </LogoImgWrapper>
                    <InfoTextWrapper>
                      <MemberName>
                        {item.companyName}
                      </MemberName>
                      <MemberLink href={makeUrl(item.webLink)} target='_blank' rel='noopener noreferrer'>
                        {item.webLink}
                      </MemberLink>
                      <TagsWrapper>
                        {item.hashTags.map((tag, i) => (
                          <HashTag key={i}>
                            {tag}
                          </HashTag>
                        ))}
                      </TagsWrapper>
                    </InfoTextWrapper>
                  </MemberCardFooter>
                </SliderItem>
              ))}
            </Slider>
            <div className='move-on-hover goNext' onMouseEnter={() => this.hoverOn('next')} />
          </SliderWrapper>
        </ScrollAnimation>
        <ScrollAnimation name='fadeInBottom' offset={-10}>
          <ButtonWrapper>
            <ButtonLink
              link='/our-work'
            >
              View more of our work
            </ButtonLink>
          </ButtonWrapper>
        </ScrollAnimation>
      </SectionWrapper>
    )
  }
}

export default HomeWork
