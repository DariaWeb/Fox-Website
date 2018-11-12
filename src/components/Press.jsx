import React, { Component } from 'react'
import styled from 'styled-components'
import SectionHeader from './SectionHeader'
import SectionTitle from './SectionTitle'
import ScrollAnimation from './ScrollAnimation'
import { PRESS } from '../content/homeContent'
import { media } from '../theme/AppStyles'

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SectionHeaderWrapper = styled.div`
  color: ${({ theme }) => theme.colors.text};
`

const SectionTitleWrapper = styled.div`
  color: ${({ theme }) => theme.colors.grey};
  margin: 30px 0 20px;
  ${media.tablet`margin: 18px 0 0;`};
  
  h3 {
    margin: 0;
  }
`

const PressContentWrapper = styled.div`
  display: flex;
  margin: 10px 0 45px;
  height: 54px;
  overflow: hidden;
  width: 100%;
  ${media.tablet`margin: 2px 0 37px;`};
  ${media.phone`margin: 17px 0 33px;`};

  .press-items-wrapper {
    width: 100%;
    height: 60px;
     overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    overflow-y: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1240px) {
      justify-content: unset;
    }
    ${media.tablet`height: 70px;`};
    ${media.tablet`padding: 0 30px;`};
    ${media.phone`padding: 0;`};
  }

  .press-items-wrapper::-webkit-scrollbar {
    display: none;
  }

    .press-card {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      padding: 0 8px;
      width: 250px;
      height: 60px;
      max-height: 60px;
    }
    .press-card:nth-child(1) {
      width: 237px;
      min-width: 237px;
      .press-card--img-wrapper {
          width: 191px;
          min-width: 191px;
        }
      ${media.tablet`width: 178px;`};
      ${media.tablet`min-width: 178px;`};
    }
    .press-card:nth-child(2) {
      width: 260px;
      min-width: 260px;
      ${media.tablet`width: 178px;`};
      ${media.tablet`min-width: 178px;`};
        .press-card--img-wrapper {
          width: 160px;
          min-width: 160px;
          ${media.tablet`width: 126px;`};
          ${media.tablet`min-width: 126px;`};
        }
    }
    .press-card:nth-child(3) {
      width: 248px;
      min-width: 248px;
      ${media.tablet`width: 178px;`};
      ${media.tablet`min-width: 178px;`};
        .press-card--img-wrapper {
          width: 118px;
          min-width: 118px;
      }
    }
    .press-card:nth-child(4) {
      width: 259px;
      min-width: 259px;
      ${media.tablet`width: 178px;`};
      ${media.tablet`min-width: 178px;`};
        .press-card--img-wrapper {
          width: 165px;
          min-width: 165px;
      }
    }
    .press-card:nth-child(5) {
      width: 241px;
      min-width: 241px;
      ${media.tablet`width: 178px;`};
      ${media.tablet`min-width: 178px;`};
        .press-card--img-wrapper {
          width: 90px;
          min-width: 90px;
      }
    }
  }
`

const ImgWrapper = styled.div`
  background-size: contain;
  background: url(${({ large }) => large});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  max-height: 45px;
  height: 100%;
  width: 100%;
  ${media.tablet`max-height: 32px;`};
  ${media.tablet`max-width: 130px;`};
  ${media.tablet`background: url(${({ medium }) => medium});`};
  ${media.tablet`background-repeat: no-repeat;`};
  ${media.tablet`background-position: center center;`};
  ${media.tablet`background-size: contain;`};
`

const PressItemSeparator = styled.div`
  width: 1px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.bordergrey};
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`

export default class Press extends Component {
  componentDidMount () {
    this.scrollToView()
  }

  scrollToView = () => {
    const containerWidth = this.scrollContainer.scrollWidth
    const viewportWidth = this.scrollContainer.offsetWidth
    const scrollLeftVal = containerWidth / 2 - viewportWidth / 2
    this.scrollContainer.scrollLeft = scrollLeftVal
  }

  render () {
    return (
      <SectionWrapper>
        <ScrollAnimation name='fadeInTop' offset={100}>
          <SectionHeaderWrapper>
            <SectionHeader>
              {PRESS.header}
            </SectionHeader>
          </SectionHeaderWrapper>
        </ScrollAnimation>
        <ScrollAnimation name='fadeInBottom' offset={100}>
          <SectionTitleWrapper>
            <SectionTitle>
              {PRESS.title}
            </SectionTitle>
          </SectionTitleWrapper>
        </ScrollAnimation>
        <PressContentWrapper>
          <div className='press-items-wrapper' ref={scrollContainer => (this.scrollContainer = scrollContainer)}>
            {PRESS.sources.map((item, i) => (
              <ScrollAnimation name='fadeInLeft' duration={800 + (i * 100 + 200)} offset={100} key={item.alt}>
                <div className='press-card' ref={scrollElt => (this.scrollElt = scrollElt)}>
                  <ImgWrapper
                    className='press-card--img-wrapper'
                    small={item.logos.small}
                    medium={item.logos.medium}
                    large={item.logos.large}
                    alt={item.alt}
                  />
                  {i !== PRESS.sources.length - 1 ? <PressItemSeparator /> : null}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </PressContentWrapper>
      </SectionWrapper>
    )
  }
}
