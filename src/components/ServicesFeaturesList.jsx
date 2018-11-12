import React, { Component } from 'react'
import styled from 'styled-components'
import { FEATURES } from '../content/servicesContent'
import { media } from '../theme/AppStyles'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 222px;
  font-family: 'Roboto-Light', sans-serif;
  overflow: hidden;
  flex: 1 1 auto;
  position: absolute;
  z-index: 6;
  bottom: -60px;
  ${media.tablet`bottom: -55px;`};
  ${media.phone`bottom: 20px;`};
  left: 0;
  right: 0;

  animation-name: fadeInBottom;
  animation-duration: 800ms;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  
  .features-wrapper {
    width: 100%;
    height: 240px;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    overflow-y: hidden;
    display: flex;
    justify-content: center;
    
    @media (max-width: 680px) {
     justify-content: normal;
    }

    >div:first-child {
      margin-left: 0;
    }
  
    >div:last-child {
      margin-right: 0;
    }
  }
  
  .schedules-wrapper::-webkit-scrollbar {
    display: none;
  }
  
  .feature-card {
    margin: 0 1.945%;
    ${media.tablet`margin: 0 6px;`};
    ${media.phone`margin: 0 5px;`};
    width: 200px;
    min-width: 128px;
    ${media.tablet`width: 128px;`};
    height: 200px;
    ${media.tablet`height: 180px;`};
    border-radius: 6px;
    background-color: #ffffff;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.17), 0 10px 20px 0 rgba(0, 0, 0, 0.07);
    position: relative;
    flex: 0 0 auto;
    max-width: 14%;
  }
}
`

const IconWrapper = styled.div`
  height: 90px;
  ${media.tablet`height: 68px;`};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 0 0 6px 0;
  ${media.tablet`margin: 0 0 8px 0;`};
  padding: 26px 0 0;
`

const Icon = styled.img`
  height: 100%;
`

const Title = styled.h4`
  color: #303030;
  line-height: 1.2;
  margin: 0 0 8px 0;
  font-weight: 300;
  padding: 0 12%;
  font-size: calc(16px + (20 - 16) * ((100vw - 787px) / (1440 - 787)));
  ${media.tablet`line-height: 1.38;`};
  ${media.tablet`font-size: ${({ theme }) => theme.fontSize.base};`};
  ${media.tablet`padding: 0 6px;`};
`

const TagsWrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 6px 11%;
  flex-wrap: wrap;
  ${media.tablet`padding: 0 0 16px 0;`};
  ${media.tablet`flex-direction: column;`};
  ${media.tablet`flex-wrap: wrap;`};
`

const HashTag = styled.span`
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.orange};
  margin: 0 3px 0 0;
  ${media.tablet`margin: 0;`};
  ${media.tablet`font-weight: bold;`};
`

export default class ServicesFeaturesList extends Component {
  componentDidMount () {
    this.scrollToView()
  }

  scrollToView = () => {
    // to center two cards in the viewport if card's quantity is even:
    // 1) get midpoint of scrollable container
    // 2) get midpoint of viewport
    // 3) get card's midpoint and margin
    // 4) 1>2>3
    const containerWidth = this.scrollContainer.scrollWidth
    const viewportWidth = this.scrollContainer.offsetWidth
    const scrollEltWidth = this.scrollElt.offsetWidth
    const scrollLeftVal = (FEATURES.length) % 2 === 0
      ? (containerWidth / 2 - viewportWidth / 2)
      : ((containerWidth / 2 - viewportWidth / 2) - (scrollEltWidth / 2) - 5)
    this.scrollContainer.scrollLeft = scrollLeftVal
  }

  render () {
    return (
      <Wrapper>
        <div className='features-wrapper' ref={scrollContainer => (this.scrollContainer = scrollContainer)}>
          {FEATURES.map(feature => (
            <div className='feature-card' ref={scrollElt => (this.scrollElt = scrollElt)} key={feature.title}>
              <IconWrapper>
                <Icon src={feature.icon} alt={feature.alt} />
              </IconWrapper>
              <Title>
                {feature.title}
              </Title>
              <TagsWrapper>
                {feature.tags.map((tag, i) => (
                  <HashTag key={i}>
                    {tag}
                  </HashTag>
                ))}
              </TagsWrapper>
            </div>
          ))}
        </div>
      </Wrapper>
    )
  }
}
