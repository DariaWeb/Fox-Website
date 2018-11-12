import React from 'react'
import styled from 'styled-components'
import { FEATURES } from '../content/homeContent'
import { media } from '../theme/AppStyles'

const FeaturesWrapper = styled.div`
  font-family: 'Roboto-Light', sans-serif;
  margin: 5.556% 40px 4.306%;
  display: flex;
  justify-content: center;
  animation-name: fadeInBottom;
  animation-duration: 800ms;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  ${media.tablet`margin: 38px 40px 0;`};
  ${media.phone`margin: 61px 30px 0;`};
  ${media.tablet`flex-wrap: wrap;`};
  ${media.tablet`justify-content: space-around;`};

  div:last-child {
    ${media.phone`margin-bottom: 33px;`};
  }
  div:last-child h4 {
    ${media.phone`margin-top: 7px;`};
  }
`

const FeatureCard = styled.div`
  width: 180px;
  margin: 0 30px;
  @media (max-width: 1115px) {
    margin: 0 25px;
  }
  @media (max-width: 1030px) {
    margin: 0 18px;
  }
  @media (max-width: 958px) {
    margin: 0 10px;
  }
  @media (max-width: 810px) {
    margin: 0 8px;
  }
  @media (max-width: 786px) {
    margin: 0;
  }
  ${media.tablet`max-width: 126px;`};
  ${media.tablet`margin: 0;`};
  ${media.tablet`margin: 0 2px 43px 2px;`};
  ${media.phone`max-width: 113px;`};
  ${media.phone`width: 50%;`};
`

const IconWrapper = styled.div`
  height: 70px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 3px;
  ${media.tablet`height: 67px;`};
  ${media.phone`height: 60px;`};
  ${media.tablet`margin-bottom: 0;`};
`

const Icon = styled.img`
  width: 100%;
  height: 100%;
`

const Title = styled.h4`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 24px;
  margin: 0 0 13px 0;
  font-weight: 300;
  line-height: 1.3;
  white-space: pre-line; 
  @media (max-width: 1250px) {
    font-size: 23px;
  }
  @media (max-width: 1180px) {
    font-size: 21px;
  }
  @media (max-width: 1115px) {
    font-size: 20px;
  }
  @media (max-width: 958px) {
    font-size: 18px;
  }
  ${media.tablet`font-size: ${({ theme }) => theme.fontSize.h5};`};
  ${media.tablet`line-height: 1.22;`};
  ${media.phone`font-size: ${({ theme }) => theme.fontSize.base};`};
  ${media.phone`margin: 0 0 4px 0;`};
  ${media.phone`line-height: 1.36;`};
`

const HashTag = styled.span`
  display: flex;
  flex: 1;
  font-size: ${({ theme }) => theme.fontSize.base};
  line-height: 1.25;
  text-align: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.orange};
  ${media.tablet`font-size: ${({ theme }) => theme.fontSize.medium};`};
  ${media.tablet`line-height: 1.43;`};
`

export default function HomeFeaturesList () {
  return (
    <FeaturesWrapper>
      {FEATURES.map(({
        icon, alt, title, tags
      }) => (
        <FeatureCard key={title}>
          <IconWrapper>
            <Icon src={icon} alt={alt} />
          </IconWrapper>
          <Title>
            {title}
          </Title>
          {tags.map((tag, index) => (
            <HashTag key={`${title}${index}`}>
              {tag}
            </HashTag>
          ))}
        </FeatureCard>
      ))}
    </FeaturesWrapper>
  )
}
