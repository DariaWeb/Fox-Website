import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Slider from 'react-slick'
import IMAGES from '../utils/ImagesProvider'
import ScrollAnimation from './ScrollAnimation'
import { REVIEWS } from '../content/workshopsContent'
import { media } from '../theme/AppStyles'

const SectionWrapper = styled.div`
  font-family: 'Roboto-Regular', sans-serif;
  margin: 78px 0 60px;
  ${media.tablet`margin: 38px 0 0;`};
`

const SectionHeader = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.base};
  ${media.tablet`font-size: ${({ theme }) => theme.fontSize.medium};`};
  line-height: 1.5;
  ${media.tablet`line-height: 1.71;`};
  margin: 0 0 16px 0;
  ${media.tablet`margin: 0;`};
`

const FeedbackCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 253px;
  padding: 0;
  ${media.tablet`padding: 12px 0 0 0;`};
  margin-bottom: 32px;
  position: relative;

  .animate {
    animation-name: fadeIn;
    animation-duration: 800ms;
    animation-delay: 500ms;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
  }
`

const Title = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.h3};
  ${media.tablet`font-size: ${({ theme }) => theme.fontSize.h4};`};
  font-family: PatchouliDisplay, sans-serif;
  margin: 26px 0 30px;
  ${media.tablet`margin: 14px 0 22px;`};
  line-height: 0.71;
  ${media.tablet`line-height: 1.17;`};
`

const Feed = styled.p`
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: ${({ theme }) => theme.fontSize.base};
  ${media.tablet`font-size: ${({ theme }) => theme.fontSize.medium};`};
  margin: 10px 0 0 0;
  line-height: 1.5;
  min-height: 121px;
`

const FeedAuthorWrapper = styled.div``

const FeedAuthor = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.h5};
  ${media.tablet`font-size: ${({ theme }) => theme.fontSize.base};`};
  line-height: 1.11;
  ${media.tablet`line-height: 1.25;`};
  margin: 18px 0 15px 0;
  ${media.tablet`margin: 14px 0 0 0;`};
`

const FeedAuthorImg = styled.div`
  display: flex;
  justify-content: center;
  img {
    object-fit: contain;
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
`

const FeedAuthorPic = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  background-color: rgba(0, 0, 0, 0.7);
`

const RateStarWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const RateStar = styled.img`
  margin: 0 2px;
  ${media.tablet`height: 11px;`};
  ${media.tablet`width: 11px;`};
`

const SliderWrapper = styled.div`
  .slick-track {
    display: flex;
    align-items: flex-start;
  }

  .slick-active div {
    opacity: 1;
  }
`

const SliderItem = styled.div`
  margin: 0 50px;
  ${media.tablet`margin: 0 30px;`};
  opacity: 0.4;
  width: 572px !important;
  @media (max-width: 700px) {
    width: 450px !important;
  }
  @media (max-width: 600px) {
    width: 400px !important;
    margin: 0 20px;
  }
  @media (max-width: 500px) {
    width: 350px !important;
  }
  @media (max-width: 400px) {
    width: 300px !important;
    margin: 0 10px
  }
  @media (max-width: 370px) {
    width: 220px !important;
  }
`

const ReviewerPic = (pic, author) => (
  pic.src ? <img src={pic.src} alt={pic.alt} />
    : <FeedAuthorPic>{author.charAt(0)}</FeedAuthorPic>
)

FeedbackCardComponent.propTypes = {
  rate: PropTypes.number,
  shortDescription: PropTypes.string,
  longDescription: PropTypes.string,
  author: PropTypes.string,
  authorPicture: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string
  })
}

function FeedbackCardComponent (props) {
  const {
    rate, shortDescription, longDescription, author, authorPicture
  } = props
  return (
    <ScrollAnimation name='fadeInLeft' offset={-50}>
      <FeedbackCard>
        <div>
          <RateStarWrapper>
            {[...Array(rate)].map(i => <RateStar key={i} src={IMAGES.icon_star} />)}
          </RateStarWrapper>
          <Title>
            {`'${shortDescription}'`}
          </Title>
          <FeedAuthorWrapper>
            <FeedAuthorImg>
              {ReviewerPic(authorPicture, author)}
            </FeedAuthorImg>
            <FeedAuthor>
              {author}
            </FeedAuthor>
          </FeedAuthorWrapper>
          <Feed>
            {longDescription}
          </Feed>
        </div>
      </FeedbackCard>
    </ScrollAnimation>
  )
}

export default function WorkshopsReviews () {
  const { header, feeds } = REVIEWS
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToScroll: 1,
    easing: 'easeOutBack',
    swipeToSlide: true,
    focusOnSelect: true,
    speed: 800,
    variableWidth: true
  }
  return (
    <SectionWrapper>
      <ScrollAnimation name='fadeInTop' offset={-10}>
        <SectionHeader>
          {header}
        </SectionHeader>
      </ScrollAnimation>
      <div>
        <SliderWrapper>
          <Slider {...settings}>
            {feeds.map(item => (
              <SliderItem key={item.id}>
                <FeedbackCardComponent {...item} />
              </SliderItem>)
            )}
          </Slider>
        </SliderWrapper>
      </div>
    </SectionWrapper>
  )
}
