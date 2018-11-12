import React, { Component } from 'react'
import Slider from 'react-id-swiper'
import styled from 'styled-components'
import ResponsiveImg from './ResponsiveImg'
import IMAGES from '../utils/ImagesProvider'
import ScrollAnimation from './ScrollAnimation'
import { TESTIMONIALS } from '../content/homeContent'
import { media } from '../theme/AppStyles'

const SectionWrapper = styled.div`
  font-family: 'Roboto-Regular', sans-serif;
  margin-top: 68px;
  padding-bottom: 50px;
  ${media.tablet`margin-top: 50px;`};
  ${media.tablet`padding-bottom: 60px;`};
  ${media.phone`padding-bottom: 50px;`};

  #logo-slider {
    .swiper-slide {
        width: 100px;
    }
    .swiper-slide-active {
      opacity: 1;
    }
  }
`

const SectionHeader = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: normal;
  line-height: 1.5;
  ${media.tablet`font-size: ${({ theme }) => theme.fontSize.medium};`};
`

const LogosSliderWrapper = styled.div`
  margin: 60px 0 54px;
  ${media.tablet`margin: 30px 0;`};
`

const FeedbackCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 253px;
  padding-top: 12px;
  margin-bottom: 32px;
  position: relative;
  width: 100%;
  ${media.tablet`min-height: 150px;`};
  ${media.tablet`padding-top: 7px;`};
  ${media.phone`padding: 4px 24px 0;`};

  >div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 20px;
  }
`

const Title = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.h3};
  font-family: PatchouliDisplay, sans-serif;
  margin: 5px 0 0 0;
  ${media.tablet`font-size: ${({ theme }) => theme.fontSize.h4};`};
  ${media.tablet`margin: 10px 0 0 0;`};
  ${media.phone`margin: 14px 0 0 0;`};
`

const Feed = styled.p`
  width: 748px;
  max-width: 100%;
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: ${({ theme }) => theme.fontSize.base};
  line-height: 1.5;
  min-height: 121px;
  ${media.tablet`width: 452px;`};
  ${media.tablet`font-size: ${({ theme }) => theme.fontSize.medium};`};
  ${media.tablet`margin: 7px 0;`};
  ${media.phone`margin: 13px 0 27px;`};
  ${media.phone`width: 100%;`};
  ${media.phone`line-height: 1.36;`};
`

const FeedFooter = styled.div`
  height: 80px;
`

const FeedAuthor = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.base};
  line-height: 1.25;
  margin: 0
  ${media.tablet`font-size: ${({ theme }) => theme.fontSize.medium};`};
  ${media.tablet`line-height: 1.36;`};
  ${media.phone`line-height: 1.58;`};
  ${media.phone`font-size: 12px;`};
`

const AdditionalInfo = FeedAuthor.extend`
  color: ${({ theme }) => theme.colors.text};
`

const RateStars = styled.div`
  display: flex;
  justify-content: center;
`

const RateStar = styled.img`
  margin: 0 2px;
  ${media.tablet`margin: 0px 1.5px;`};
  ${media.tablet`width: 12px;`};
  ${media.tablet`height: 12px;`};
  ${media.phone`height: 10px;`};
  ${media.phone`margin: 0px 4px;`};
  ${media.phone`width: 10px;`};
`

const SliderWrapper = styled.div`
  height: 100px;
  margin: -10px 0;
`

const SliderItem = styled.div`
  margin: 0 29px;
  ${media.tablet`margin: 0 25px;`};
  ${media.tablet`margin: 0 15px;`};
  img {
    object-fit: contain;
  }
  opacity: 0.4;

  &:hover {
    opacity: 1;
  }
`

const SliderImgWrapper = styled.div`
  width: 100px;
  height: 100px;
`

const MeridianLineWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const MeridianLine = styled.div`
  width: 1.5px;
  height: 35px;
  background: black;
  ${media.tablet`height: 20px;`};
`

export default class GalleryImage extends Component {
  state = {
    gallerySwiper: null,
    thumbnailSwiper: null
  }

  componentWillUpdate (nextProps, nextState) {
    if (nextState.gallerySwiper && nextState.thumbnailSwiper) {
      const { gallerySwiper, thumbnailSwiper } = nextState

      gallerySwiper.controller.control = thumbnailSwiper
      thumbnailSwiper.controller.control = gallerySwiper
    }
  }

  galleryRef = (ref) => {
    if (ref) this.setState({ gallerySwiper: ref.swiper })
  }

  thumbRef = (ref) => {
    if (ref) this.setState({ thumbnailSwiper: ref.swiper })
  }

  render () {
    const thumbnailSwiperParams = {
      centeredSlides: true,
      loop: true,
      slidesPerView: 'auto',
      touchRatio: 0.2,
      slideToClickedSlide: true
    }
    const gallerySwiperParams = {
      slidesPerView: 'auto',
      loop: true,
      centeredSlides: true,
      slideToClickedSlide: true,
      autoHeight: true,
      observer: true
    }

    return (
      <SectionWrapper>
        <ScrollAnimation name='fadeInTop'>
          <SectionHeader>
            {TESTIMONIALS.header}
          </SectionHeader>
        </ScrollAnimation>
        <LogosSliderWrapper>
          <ScrollAnimation name='fadeInRight' offset={-10}>
            <MeridianLineWrapper>
              <MeridianLine />
            </MeridianLineWrapper>
          </ScrollAnimation>
          <ScrollAnimation name='fadeInRight' offset={-10}>
            <SliderWrapper id='logo-slider'>
              <Slider className='slider-logo-wrapper' {...thumbnailSwiperParams} ref={this.thumbRef}>
                {TESTIMONIALS.clients.map((item, index) => (
                  <SliderItem key={`sliderHomeLogo${index}`}>
                    <SliderImgWrapper>
                      <ResponsiveImg
                        small={item.images.logo.small}
                        medium={item.images.logo.medium}
                        large={item.images.logo.large}
                        alt={item.alt}
                      />
                    </SliderImgWrapper>
                  </SliderItem>)
                )}
              </Slider>
            </SliderWrapper>
          </ScrollAnimation>
          <ScrollAnimation name='fadeInRight' offset={-10}>
            <MeridianLineWrapper>
              <MeridianLine />
            </MeridianLineWrapper>
          </ScrollAnimation>
        </LogosSliderWrapper>
        <div id='cards-slider'>
          <ScrollAnimation name='fadeInLeft' offset={-10}>
            <Slider className='slider-main-wrapper' {...gallerySwiperParams} ref={this.galleryRef}>
              {TESTIMONIALS.clients.map(({ givenTestimonials }, index) => (
                <div>
                  <FeedbackCard key={index}>
                    <div>
                      <RateStars>
                        {[...Array(givenTestimonials.rate)].map(i => <RateStar key={i} src={IMAGES.icon_star} />)}
                      </RateStars>
                      <Title>
                        <span>&ldquo;{givenTestimonials.shortDescription}&rdquo;</span>
                      </Title>
                      <Feed>
                        <span>&ldquo;{givenTestimonials.longDescription}&rdquo;</span>
                      </Feed>
                    </div>
                    <FeedFooter>
                      <FeedAuthor>
                        {givenTestimonials.author}
                      </FeedAuthor>
                      <AdditionalInfo>
                        {givenTestimonials.authorTitle}
                      </AdditionalInfo>
                      <AdditionalInfo>
                        {givenTestimonials.publicationDate}
                      </AdditionalInfo>
                    </FeedFooter>
                  </FeedbackCard>
                </div>
              ))}
            </Slider>
          </ScrollAnimation>
        </div>
      </SectionWrapper>
    )
  }
}
