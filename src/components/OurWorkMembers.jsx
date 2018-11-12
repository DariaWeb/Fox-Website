import React, { Component } from 'react'
import styled from 'styled-components'
import Slider from 'react-id-swiper'
import ResponsiveImg from './ResponsiveImg'
import IMAGES from '../utils/ImagesProvider'
import makeUrl from '../utils/makeUrl'
import { TESTIMONIALS } from '../content/homeContent'
import { MEMBERS } from '../content/ourWorkContent'
import ScrollAnimation from './ScrollAnimation'
import { media } from '../theme/AppStyles'

const SectionWrapper = styled.div`
  font-family: 'Roboto-Regular', sans-serif;
  position: relative;
  
  #our-work-logo-slider {
    .swiper-slide {
        width: 100px;
    }
    .swiper-slide-active {
      opacity: 1;
    }
  }

  @media (max-width: 600px) {
    margin-bottom: -16px;
  }
`

const DescriptionBlock = styled.div`
  padding: 42px 40px 0;
  ${media.tablet`padding: 0 40px 0;`};
  ${media.phone`padding: 19px 15.625% 0;`};
`

const HeaderWrapper = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
  justify-content: center;
  ${media.tablet`justify-content: unset;`};
`

const SectionHeader = styled.div`
  height: 25px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  width: 348px;
  text-align: center;

  animation-name: fadeInTop;
  animation-duration: 800ms;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  ${media.tablet`padding-bottom: 10px;`};
  ${media.tablet`text-align: left;`};
  ${media.tablet`width: 100%;`};
  
  @media (max-width: 600px) {
    height: 22px;
    padding-bottom: 8px;
  }
  ${media.phone`height: 22px;`};
  ${media.phone`padding-bottom: 8px;`};
`

const SectionTitle = styled.h4`
  font-family: PatchouliDisplay, sans-serif;
  font-size: ${({ theme }) => theme.fontSize.h4};
  font-weight: normal;
  color: ${({ theme }) => theme.colors.grey};
  letter-spacing: 0.2px;
  margin: 26px 0 14px 0;
  text-align: center;
  line-height: 1;
  animation-name: fadeInLeft;
  animation-duration: 800ms;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  ${media.tablet`font-size: 22px;`};
  ${media.tablet`margin: 35px 0 13px 0;`};
  ${media.tablet`text-align: left;`};
  
   @media (max-width: 600px) {
    margin: 29px 0 8px 0;
  }

  ${media.phone`margin: 29px 0 8px 0;`};
`

const SectionContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 40px 0;
  ${media.tablet`margin: 0 0 10px 0;`};
  @media (max-width: 600px) {
    margin: 0 0 20px 0;
  }
  ${media.phone`margin: 0 0 20px 0;`};
`

const ContentText = styled.div`
  max-width: 65%;
  margin: 0 0 22px 0;
  animation-name: fadeInLeft;
  animation-duration: 800ms;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  ${media.tablet`max-width: 100%;`};

  p {
    font-size: ${({ theme }) => theme.fontSize.base};
    color: #afafaf;
    line-height: 1.5;
    margin: 0;
    text-align: center;
    ${media.tablet`font-size: ${({ theme }) => theme.fontSize.medium};`};
    ${media.tablet`color: ${({ theme }) => theme.colors.text};`};
    ${media.tablet`text-align: left;`};
    @media (max-width: 600px) {
      opacity: 0.9;
    }
    ${media.phone`opacity: 0.9;`};
  }
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 53px 40px 10px 40px;
  ${media.tablet`padding: 43px 40px 50px;`};

  @media (max-width: 600px) {
    padding: 43px 0 0;
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: row;
  width: 954px;
  max-width: 100%;
  border-radius: 10px;
  z-index: 9;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.08), 0 2px 4px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 600px) {
    flex-direction: column;
    box-shadow: none;
    border-radius: 0;
  }
`

const CardContent = styled.div`
  width: 50%;
  text-align: left;
  position: relative;
  z-index: 11;
  padding: 32px 74px 46px 52px;
  ${media.tablet`padding: 44px 40px 66px 49px;`};

  @media (max-width: 600px) {
    width: calc(100% - 40px);
    margin: 0 20px;
    background: ${({ theme }) => theme.colors.snow};
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.08), 0 2px 4px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
    top: -68px;
  }
`

const CardContentHeader = styled.div`
  margin-bottom: 15px;
  ${media.tablet`margin-bottom: 0;`};
`

const Feed = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: 1.43;
  margin: 22px 0;
  ${media.tablet`line-height: 1.5;`};
  ${media.tablet`margin: 16px 0 22px;`};
`

const RateStarWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 15px 0;
`

const RateStar = styled.img`
  margin: 0 2px;
  ${media.tablet`height: 11px;`};
  ${media.tablet`width: 11px;`};
`

const SliderWrapper = styled.div`
  height: 100px;
  margin: -10px 0;

  .slick-slider, .slick-list, .slick-track {
    height: 100px;
  }
    
  .slick-track {
    display: flex;
    align-items: center;
  }

  .slick-active div {
    opacity: 1;
  }
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

const ContentHeaderWrapper = styled.div`
  position: relative;
  height: 140px;
  z-index: 1;
  ${media.tablet`height: 128px;`};
  @media (max-width: 600px) {
   height: 114px;
  }
`

const Weblink = styled.img`
  position: absolute;
  right: 30px;
  top: 30px;
  width: 14px;
  height: 14px;
  ${media.tablet`right: 20px;`};
  ${media.tablet`top: 20px;`};
  @media (max-width: 600px) {
   right: 30px;
   top: 34px;
  }
  ${media.phone`right: 30px;`};
  ${media.phone`top: 34px;`};
`

const Num = styled.div`
  color: #ececec;
  font-size: 200px;
  font-family: PatchouliDisplay, sans-serif;
  height: 100%;
  line-height: 0.9;
  ${media.tablet`font-size: 140px;`};
`

const TextBlock = styled.div`
  position: absolute;
  top: 4px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${media.tablet`top: 0;`};
  ${media.tablet`width: 168px;`};
  @media (max-width: 600px) {
   top: 8px;
   width: auto;
  }
`

const TagsWrapper = styled.div``

const HashTag = styled.span`
  font-size: ${({ theme }) => theme.fontSize.base};
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.orange};
  margin-right: 10px;
`

const CompanyName = styled.div`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.grey};
  font-family: PatchouliDisplay, sans-serif;
  line-height: 1.07;
  ${media.tablet`font-size: 28px;`};
  ${media.tablet`line-height: 1.14;`};
`

const Author = styled.div`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.grey};
  line-height: 1.25;
  font-weight: normal;
  position: relative;
  z-index: 2;
`

const AdditionalInfo = Author.extend`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.medium};
`

const CardImgWrapper = styled.div`
  width: 69%;
  position: relative;

  @media (max-width: 600px) {
   width: 100%;
   height: 512px;
  }
`

const ImgWrapper = styled.div`
  height: 100%;
  background: url(${({ img }) => img.fullSize.large});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  ${media.tablet`background: url(${({ img }) => img.fullSize.medium});`};
  ${media.tablet`background-repeat: no-repeat;`};
  ${media.tablet`background-position: center center;`};
  ${media.tablet`background-size: cover;`};
  @media (max-width: 600px) {
   border-radius: 0;
  }
  ${media.phone`background: url(${({ img }) => img.fullSize.small});`};
  ${media.phone`background-repeat: no-repeat;`};
  ${media.phone`background-position: center center;`};
  ${media.phone`background-size: cover;`};
  ${media.phone`border-radius: 0;`};
`

export default class OurWorkMembers extends Component {
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
      slideToClickedSlide: true,
      normalizeSlideIndex: true
    }
    const gallerySwiperParams = {
      slidesPerView: 'auto',
      loop: true,
      centeredSlides: true,
      slideToClickedSlide: true,
      autoHeight: true,
      normalizeSlideIndex: true,
      on: {
        slideChangeTransitionStart: () => this.state.gallerySwiper && this.state.gallerySwiper.updateAutoHeight(600),
        slideChangeTransitionEnd: () => this.state.gallerySwiper && this.state.gallerySwiper.updateAutoHeight(600),
        slideChange: () => this.state.gallerySwiper && this.state.gallerySwiper.slideReset(700)
      }
    }
    const { header, title, text } = MEMBERS

    return (
      <SectionWrapper>
        <DescriptionBlock>
          <HeaderWrapper>
            <SectionHeader>
              {header}
            </SectionHeader>
          </HeaderWrapper>
          <SectionTitle>
            {title}
          </SectionTitle>
          <SectionContentWrapper>
            <ContentText>
              <p>
                {text}
              </p>
            </ContentText>
          </SectionContentWrapper>
        </DescriptionBlock>
        <div>
          <ScrollAnimation name='fadeInRight' offset={-10}>
            <MeridianLineWrapper>
              <MeridianLine />
            </MeridianLineWrapper>
          </ScrollAnimation>
          <ScrollAnimation name='fadeInRight' offset={-10}>
            <SliderWrapper id='our-work-logo-slider'>
              <Slider className='slider-logo-wrapper' {...thumbnailSwiperParams} ref={this.thumbRef}>
                {TESTIMONIALS.clients.map((item, index) => (
                  <SliderItem key={`sliderWorkLogo${index}`}>
                    <SliderImgWrapper>
                      <ResponsiveImg
                        small={item.images.logo.small}
                        medium={item.images.logo.medium}
                        large={item.images.logo.large}
                        alt={item.alt}
                      />
                    </SliderImgWrapper>
                  </SliderItem>
                )
                )}
              </Slider>
            </SliderWrapper>
          </ScrollAnimation>
          <ScrollAnimation name='fadeInRight' offset={-10}>
            <MeridianLineWrapper>
              <MeridianLine />
            </MeridianLineWrapper>
          </ScrollAnimation>
        </div>
        <div id='cards-slider'>
          <ScrollAnimation name='fadeInLeft' offset={-10}>
            <Slider className='slider-main-wrapper' {...gallerySwiperParams} ref={this.galleryRef}>
              {TESTIMONIALS.clients.map(({
                id, companyName, givenTestimonials, hashTags, webLink, images
              }, index) => (
                <CardWrapper key={index}>
                  <Card>
                    <CardImgWrapper>
                      <ImgWrapper img={images} />
                    </CardImgWrapper>
                    <CardContent>
                      <CardContentHeader>
                        <a href={makeUrl(webLink)} target='_blank' rel='noopener noreferrer'>
                          <Weblink src={IMAGES.icon_website_link} />
                        </a>
                        <ContentHeaderWrapper>
                          <Num>
                            {id}
                          </Num>
                          <TextBlock>
                            <CompanyName>
                              {companyName}
                            </CompanyName>
                            <TagsWrapper>
                              {hashTags.map((tag, i) => (
                                <HashTag key={i}>
                                  {tag}
                                </HashTag>
                              ))}
                            </TagsWrapper>
                          </TextBlock>
                        </ContentHeaderWrapper>
                      </CardContentHeader>
                      <div>
                        <Author>
                          {givenTestimonials.author}
                        </Author>
                        <AdditionalInfo>
                          {givenTestimonials.authorTitle}
                        </AdditionalInfo>
                      </div>
                      <RateStarWrapper>
                        {[...Array(givenTestimonials.rate)].map(i => <RateStar key={i} src={IMAGES.icon_star} />)}
                      </RateStarWrapper>
                      <Feed>
                        {`"${givenTestimonials.longDescription}"`}
                      </Feed>
                      <AdditionalInfo>
                        {givenTestimonials.publicationDate}
                      </AdditionalInfo>
                    </CardContent>
                  </Card>
                </CardWrapper>)
              )}
            </Slider>
          </ScrollAnimation>
        </div>
      </SectionWrapper>
    )
  }
}
