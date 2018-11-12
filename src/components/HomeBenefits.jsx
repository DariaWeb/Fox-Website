import React, { Component } from 'react'
import styled from 'styled-components'
import Slider from 'react-id-swiper'
import { SLIDES } from '../content/homeContent'
import IMAGES from '../utils/ImagesProvider'
import { media } from '../theme/AppStyles'
import ScrollAnimation from './ScrollAnimation'

const SliderWrapper = styled.div`
  font-family: 'Roboto-Regular', sans-serif;
  position: relative;
  
  .swiper-slide-active h1 {
    transform: translateX(0);
    transition-delay: .9s;
    opacity: 1;
  }

  .swiper-slide-active p {
    transform: translateY(0);
    transition-delay: .9s;
    opacity: 1;
  }
  
  * {
    outline: none;
  }
  
  .slider-wrapper {
    position: relative;
    height: 480px;
    overflow: hidden;
    ${media.tablet`height: 336px;`};
    ${media.phone`height: 440px;`};
  }
  
  .slider-content .inner {
    padding: 0 20%;
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: 100%;
    padding: 165px 20% 0;
    ${media.tablet`padding: 122px 11% 0;`};
    ${media.phone`padding: 31% 11% 0;`};
  }
    
    .controls {
      z-index: 3;
      background: transparent url(${IMAGES.icon_navigation_arrow});
      background-repeat: no-repeat;
      background-size: contain;
      border: 0;
      outline: none;
      width: 17px;
      height: 28px;
      position: absolute;
      top: 32%;
      cursor: pointer;
      transform: translateX(-50%);
      ${media.tablet`width: 10px;`};
      ${media.tablet`height: 20px;`};
      ${media.phone`width: 7px;`};
      ${media.phone`height: 15px;`};
      ${media.phone`top: 35%;`};
    
      &:after {
        content:'';
        position:absolute;
        top:-10px; bottom:-10px; 
        left:-10px; right:-10px; 
      }
  }
  
  .controls-right {
    right: 11%;
    ${media.tablet`right: 7.5%;`};
    ${media.phone`right: 4.5%;`};
  }
  .controls-left {
    transform: rotate(-180deg);
    left: 10.5%;
    ${media.tablet`left: 7.5%;`};
    ${media.phone`left: 6.5%;`};
  }
`

const SectionHeader = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.base};
  line-height: 1.5;
  position: absolute;
  top: 48px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  ${media.tablet`font-size: ${({ theme }) => theme.fontSize.medium};`};
  ${media.tablet`line-height: 1.71;`};
  ${media.tablet`top: 30px;`};
  ${media.phone`top: 8px;`};
`

const SliderItem = styled.div`
  position: relative;
  outline: none;
  height: 480px;
  background-size: auto 480px;
  object-fit: cover;
  background: url(${({ large }) => large});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  ${media.tablet`height: 336px;`};
  ${media.tablet`background: url(${({ medium }) => medium});`};
  ${media.tablet`background-repeat: no-repeat;`};
  ${media.tablet`background-position: center center;`};
  ${media.tablet`background-size: cover;`};
  ${media.phone`height: 440px;`};
  ${media.phone`url(${({ small }) => small})`});
  ${media.phone`background-repeat: no-repeat;`});
  ${media.phone`background-position: center center;`});
  ${media.phone`background-size: auto 440px;`});
`

const SliderCounter = styled.h1`
  font-family: 'PatchouliDisplay-Bold', sans-serif;
  margin: 0;
  padding: 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 200px;
  line-height: 0.16;
  font-weight: normal;
  transition: all 0.6s ease;
  transform: translateX(20px);
  opacity: 0;
  ${media.tablet`font-size: 130px;`};
  ${media.tablet`line-height: 0.23;`};
  ${media.phone`font-size: 140px;`};
`

const SlideTitle = styled.p`
  font-family: PatchouliDisplay, sans-serif;
  font-weight: normal;
  font-size: 36px;
  color: ${({ theme }) => theme.colors.grey};
  display: flex;
  justify-content: center;
  z-index: 2;
  position: relative;
  top: -88px;
  transition: all 0.9s ease;
  transform: translateY(20px);
  transition-delay: .6s;
  opacity: 0;
  ${media.tablet`font-size: 30px;`};
  ${media.tablet`top: -82px;`};
  ${media.phone`top: -50px;`};
`

export default class HomeBenefits extends Component {
  render () {
    const settings = {
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      iOSEdgeSwipeDetection: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        waitForTransition: false
      },
      speed: 800,
      effect: 'fade',
      navigation: {
        nextEl: '.controls.controls-right',
        prevEl: '.controls.controls-left'
      }
    }
    return (
      <SliderWrapper>
        <ScrollAnimation name='fadeIn' offset={-10}>
          <SectionHeader>
            benefits
          </SectionHeader>
          <Slider className='slider-wrapper' {...settings} ref={slider => (this.slider = slider)}>
            {SLIDES.map(({ images, title }, index) => (
              <SliderItem
                key={title + index}
                className='slider-content'
                small={images.sm}
                medium={images.md}
                large={images.lg}
              >
                <div className='inner'>
                  <SliderCounter>
                    {index + 1}
                  </SliderCounter>
                  <SlideTitle>{title}</SlideTitle>
                </div>
              </SliderItem>
            ))}
          </Slider>
        </ScrollAnimation>
      </SliderWrapper>
    )
  }
}
