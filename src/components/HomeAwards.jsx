import React from 'react'
import styled from 'styled-components'
import ResponsiveImg from './ResponsiveImg'
import ScrollAnimation from './ScrollAnimation'
import { AWARDS } from '../content/homeContent'
import { media } from '../theme/AppStyles'

const AwardsWrapper = styled.div`
  font-family: 'Roboto-Regular', sans-serif;
  position: relative;
  height: 512px;
  width: 100%;
  background: #000000;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  ${media.tablet`height: 412px;`};
  ${media.phone`height: 440px;`};
`

const Bg = styled.div`
  position: relative;
  height: 512px;
  opacity: 0.8;
  background: url(${AWARDS.bgImage.lg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  ${media.tablet`background: url(${AWARDS.bgImage.md});`};
  ${media.tablet`background-repeat: no-repeat;`};
  ${media.tablet`background-position: center center;`};
  ${media.tablet`background-size: cover;`};
  ${media.tablet`height: 412px;`};
  ${media.phone`background: url(${AWARDS.bgImage.sm});`};
  ${media.phone`background-repeat: no-repeat;`};
  ${media.phone`background-position: center center;`};
  ${media.phone`background-size: cover;`};
  ${media.phone`height: 440px;`};
`

const AwardsContent = styled.div`
  width: 378px;
  height: 436px;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  left: 50%;
  padding: 44px 57px 50px 57px;
  top: 0;
  box-sizing: border-box;
  transform: translate(-50%);
  color: ${({ theme }) => theme.colors.snow};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  ${media.tablet`width: 334px;`};
  ${media.tablet`height: 310px;`};
  ${media.tablet`padding: 24px 40px 32px 38px;`};
  ${media.phone`padding: 29px 31px 0;`};
  ${media.phone`width: calc(100% - 40px);`};
  ${media.phone`height: 338px;`};
`

const AwardsContentBody = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  padding: 54px 0 30px;
  ${media.tablet`padding: 26px 25px 20px 0;`};
  ${media.phone`padding: 10.092% 11.01% 11.01% 0;`};
  ${media.phone`font-size: calc(14px + (16 - 14) * ((100vw - 200px) / (320 - 200)));`};
`

const AwardsContentTitle = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.base};
  line-height: 1.5;
  text-align: right;
  ${media.tablet`font-size: ${({ theme }) => theme.fontSize.medium};`};
  ${media.tablet`line-height: 1.71;`};
`

const AwardsBodyName = styled.h4`
  color: ${({ theme }) => theme.colors.snow};
  font-size: ${({ theme }) => theme.fontSize.h4};
  font-family: PatchouliDisplay, sans-serif;
  line-height: 1.25;
  text-align: left;
  margin: 0;
  font-weight: normal;
  ${media.tablet`font-size: 20px;`};
  ${media.tablet`line-height: 1.2;`};
  ${media.phone`line-height: 1.27;`};
  ${media.phone`font-size: 22px;`};
`

const AwardsBodyTitle = AwardsBodyName.extend`
  color: ${({ theme }) => theme.colors.lightblue};
`

const AwardsDescriptionWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0 0 0;
  ${media.tablet`padding: 6px 0 0 0;`};
  ${media.phone`padding: 8.26% 0 0 0;`};
`

const AwardImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 100%;
  margin-right: -10px;
  object-fit: contain;
  opacity: 0.8;
  padding: 6px 0 0 0;
  ${media.tablet`padding: 10px 0 0 0;`};
  ${media.phone`align-items: center;`};

  img {
    max-width: 80px;
    max-height: 80px;
  }
`

const AwardsBodyDescription = styled.h4`
  color: rgba(255, 255, 255, 0.7);
  font-size: ${({ theme }) => theme.fontSize.base};
  text-align: left;
  font-weight: normal;
  line-height: 1.5;
  flex: 2;
  margin: 0;
  height: 100%;
  ${media.tablet`font-size: ${({ theme }) => theme.fontSize.medium};`};
  @media (max-width: 320px) {
    max-width: 122px
  }
`

export default function HomeAwards () {
  const { header, content, awardPic } = AWARDS
  const { title, name, text } = content
  return (
    <ScrollAnimation name='fadeIn' offset={-10}>
      <AwardsWrapper>
        <Bg />
        <AwardsContent>
          <AwardsContentTitle>
            {header}
          </AwardsContentTitle>
          <AwardsContentBody>
            <AwardsBodyTitle>
              {title}
            </AwardsBodyTitle>
            <AwardsBodyName>
              {name}
            </AwardsBodyName>
          </AwardsContentBody>
          <AwardsDescriptionWrapper>
            {text.map(p => <AwardsBodyDescription key={title}>{p}</AwardsBodyDescription>)}
            <AwardImageWrapper>
              <ResponsiveImg
                small={awardPic.sm}
                medium={awardPic.md}
                large={awardPic.lg}
                alt='Awards'
              />
            </AwardImageWrapper>
          </AwardsDescriptionWrapper>
        </AwardsContent>
      </AwardsWrapper>
    </ScrollAnimation>
  )
}
