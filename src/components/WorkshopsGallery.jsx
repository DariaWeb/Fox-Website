import React from 'react'
import styled from 'styled-components'
import ScrollAnimation from './ScrollAnimation'
import SectionHeader from './SectionHeader'
import SectionTitle from './SectionTitle'
import { GALLERY } from '../content/workshopsContent'
import { media } from '../theme/AppStyles'

const SectionWrapper = styled.div`
  margin: 0;
  ${media.phone`margin: 40px 0 0 0;`};
`

const SectionHeaderWrapper = styled.div`
  font-family: 'Roboto-Regular', sans-serif;
  color: ${({ theme }) => theme.colors.text};
`

const SectionTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.grey};
  
  h3 {
    max-width: 712px;
    line-height: 1.25;
    margin: 31px 0 7px 0;
    ${media.tablet`line-height: 1.17;`};
    ${media.tablet`margin: 20px 7% 18px;`};
    ${media.phone`line-height: 1.14;`};
    ${media.phone`margin: 20px 7% 14px;`};
    ${media.phone`line-height: 1.17;`};
    ${media.phone`font-size: calc(18px + (24 - 18) * ((100vw - 200px) / (320 - 200)));`};
  }
`

const SectionContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  ${media.tablet`margin-bottom: 40px;`};
  ${media.phone`margin-bottom: 26px;`};
`

const SectionContent = styled.p`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.text_dark};
  line-height: 1.5;
  text-align: center;
  max-width: 748px;
  margin: 0;
  padding: 0;
  ${media.tablet`font-size: ${({ theme }) => theme.fontSize.medium};`};
  ${media.tablet`max-width: 90%;`};
  ${media.phone`max-width: 85%;`};
`

const GalleryWrapper = styled.div`
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  ${media.phone`height: auto;`};

  img {
    height: 100%;
    width: 100%;
  }
`

const ImgWrapper = styled.div`
  height: 395px;
  width: 100%;
  background: url(${({ large }) => large});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin: 0 0 5px 0;
  ${media.tablet`height: 278px;`};
  ${media.phone`height: 215px;`};
  ${media.tablet`background: url(${({ medium }) => medium});`};
  ${media.tablet`background-repeat: no-repeat;`};
  ${media.tablet`background-position: center center;`};
  ${media.tablet`background-size: cover;`};
  ${media.phone`background: url(${({ small }) => small});`};
  ${media.phone`background-repeat: no-repeat;`};
  ${media.phone`background-position: center center;`};
  ${media.phone`background-size: cover;`};
`

const GalleryImg1 = styled.div`
  width: 40%;
  ${media.tablet`width: 37.5%;`};
  ${media.phone`width: 65.4%;`};
  div {
    background-position: top right;
  }
`

const GalleryImg2 = styled.div`
  width: 19%;
  padding: 0 5px;
  ${media.tablet`width: 25%;`};
  ${media.phone`padding: 0 0 0 5px;`};
  ${media.phone`width: 34.6%;`};
`

const GalleryImg3 = styled.div`
  width: 41%;
  ${media.tablet`width: 37.5%;`};
  ${media.phone`width: 65.4%;`};
  div {
    background-position: top left;
    ${media.tablet`background-position: center center;`};
  }
`

const GalleryImg4 = styled.div`
  width: 26.7%;
  padding: 0 5px 0 0;
  ${media.tablet`width: 23%;`};
  ${media.phone`width: 34.6%;`};
   div {
    background-position: top right;
    ${media.tablet`background-position: center center;`};
  }
`
const GalleryImg5 = styled.div`
  width: 42%;
  ${media.tablet`width: 54.5%;`};
  ${media.phone`width: 65.4%;`};
   div {
    background-position: top right;
    ${media.tablet`background-position: center right;`};
  }
`

const GalleryImg6 = styled.div`
  width: 31.3%;
  padding: 0 0 0 5px;
  ${media.tablet`width: 22.5%;`};
  ${media.phone`width: 34.6%;`};
    div {
      background-position: top left;
    }
`

export default function WorkshopsGallery () {
  const {
    header, title, text, images
  } = GALLERY
  const MOBILE_VIEW = window.screen.width <= 376
  const img1 = (
    <GalleryImg1>
      <ScrollAnimation name='scaleInSmall' offset={50}>
        <ImgWrapper
          small={images[0].sm}
          medium={images[0].md}
          large={images[0].lg}
        />
      </ScrollAnimation>
    </GalleryImg1>)
  const img2 = (
    <GalleryImg2>
      <ScrollAnimation name='scaleInSmall' offset={50}>
        <ImgWrapper
          small={images[1].sm}
          medium={images[1].md}
          large={images[1].lg}
        />
      </ScrollAnimation>
    </GalleryImg2>)
  const img3 = (
    <GalleryImg3>
      <ScrollAnimation name='scaleInSmall' offset={50}>
        <ImgWrapper
          small={images[2].sm}
          medium={images[2].md}
          large={images[2].lg}
        />
      </ScrollAnimation>
    </GalleryImg3>)
  const img4 = (
    <GalleryImg4>
      <ScrollAnimation name='scaleInSmall' offset={50}>
        <ImgWrapper
          small={images[3].sm}
          medium={images[3].md}
          large={images[3].lg}
        />
      </ScrollAnimation>
    </GalleryImg4>)
  const img5 = (
    <GalleryImg5>
      <ScrollAnimation name='scaleInSmall' offset={50}>
        <ImgWrapper
          small={images[4].sm}
          medium={images[4].md}
          large={images[4].lg}
        />
      </ScrollAnimation>
    </GalleryImg5>)
  const img6 = (
    <GalleryImg6>
      <ScrollAnimation name='scaleInSmall' offset={50}>
        <ImgWrapper
          small={images[5].sm}
          medium={images[5].md}
          large={images[5].lg}
        />
      </ScrollAnimation>
    </GalleryImg6>)

  return (
    <SectionWrapper>
      <SectionHeaderWrapper>
        <SectionHeader>
          {header}
        </SectionHeader>
      </SectionHeaderWrapper>
      <ScrollAnimation name='fadeInBottom' offset={-10}>
        <SectionTitleWrapper>
          <SectionTitle>
            {title}
          </SectionTitle>
        </SectionTitleWrapper>
      </ScrollAnimation>
      <ScrollAnimation name='fadeInBottom' offset={-10} duration={1200}>
        <SectionContentWrapper>
          <SectionContent>
            {text}
          </SectionContent>
        </SectionContentWrapper>
      </ScrollAnimation>
      <GalleryWrapper>
        {img1}
        {img2}
        {MOBILE_VIEW ? img4 : img3}
        {MOBILE_VIEW ? img3 : img4}
        {img5}
        {img6}
      </GalleryWrapper>
    </SectionWrapper>
  )
}
