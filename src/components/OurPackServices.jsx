import React from 'react'
import styled from 'styled-components'
import SectionHeader from './SectionHeader'
import SectionTitle from './SectionTitle'
import ButtonLink from './ButtonLink'
import { SERVICES } from '../content/ourPackContent'
import ScrollAnimation from './ScrollAnimation'
import IMAGES from '../utils/ImagesProvider'
import { media } from '../theme/AppStyles'

const SectionWrapper = styled.div`
  font-family: 'Roboto-Regular', sans-serif;
  margin: 118px 40px 40px 40px;

  @media (max-width: 768px) {
   margin: 70px 40px 22px;
  }
  @media (max-width: 560px) {
   margin: -8px 20px 22px;
  }
`

const SectionHeaderWrapper = styled.div`
  color: ${({ theme }) => theme.colors.text};
`

const SectionTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.grey};
  
  h3 {
    max-width: 712px;
    line-height: 1.25;
    margin: 28px 0 18px 0;

    @media (max-width: 768px) {
      line-height: 1.17;
      margin: 12px 7% 14px;
    }
    
    @media (max-width: 560px) {
     font-size: calc(18px + (24 - 18) * ((100vw - 200px) / (320 - 200)));
     margin: 13px 4% 14px;
    }
  }
  
`

const SectionContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 46px;
  ${media.tablet`margin-bottom: 40px;`};

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`

const SectionContent = styled.p`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.text_dark};
  line-height: 1.5;
  text-align: center;
  max-width: 748px;
  margin: 0;
  padding: 0;
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.medium};
    max-width: 72%;
  }
  
   @media (max-width: 560px) {
     max-width: 100%;
   }
`

const ServicesGroupWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
   @media (max-width: 768px) {
    justify-content: center;
  }
`

const RowsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 -7.5px;

  @media (max-width: 768px) {
    justify-content: center;
    margin: 0 10px;
  }

  @media (max-width: 376px) {
    width: 100%;
    margin: 0;
  }
  
  >div:nth-child(1) .card--content {
    background-color: rgba(0, 0, 0, 0.05);
  }

  >div:nth-child(2) .card--content {
    background-color: rgba(247, 214, 102, 0.5);
  }

  >div:nth-child(3) .card--content {
    background-color: rgba(176, 131, 101, 0.2);
  }
  
  >div:nth-child(4) .card--content {
    background-color: rgba(179, 195, 215, 0.3);
  }
  
  >div:nth-child(5) .card--content {
    background-color: rgba(174, 182, 136, 0.3);
  }
  
  >div:nth-child(6) .card--content {
    background-color: rgba(202, 160, 96, 0.2);
  }
  
  >div:nth-child(7) .card--content {
    background-color: rgba(208, 228, 219, 0.5);
  }
  
  >div:nth-child(8) .card--content {
    background-color: rgba(188, 179, 162, 0.3);
  }
`

const CardWrapper = styled.div`
  margin-bottom: 20px;
  max-width: 25%;
  padding: 0 7.5px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    max-width: 50%;
    padding: 0 3.13%;
  }
  @media (max-width: 376px) {
    max-width: 100%;
    padding: 0;
  }
`

const CardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: PatchouliDisplay, sans-serif;
  font-weight: normal;
  font-style: normal;
  line-height: 1.11;
  font-size: ${({ theme }) => theme.fontSize.h5};
  color: ${({ theme }) => theme.colors.grey};
  width: 100%;
  height: 100%;
  background: url(${IMAGES.pack_paper_bg_lg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  @media (max-width: 768px) {
    background: url(${IMAGES.pack_paper_bg_md});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
  @media (max-width: 376px) {
    background: url(${IMAGES.pack_paper_bg_sm});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
`

const Card = styled.div`
  width: 320px;
  height: 180px;
  max-width: 100%;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.08), 0 2px 4px 0 rgba(0, 0, 0, 0.19);
  padding: 10px;
  position: relative;
  @media (max-width: 768px) {
    width: 224px;
    height: 126px;
  }
`

const TextBlock = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7.5px;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
`

const Letters = styled.div`
  opacity: 0.3;
  font-family: PatchouliDisplay, sans-serif;
  font-size: calc(90px + (128 - 90) * ((100vw - 768px) / (1440 - 768)));
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.16;
  letter-spacing: normal;
  text-align: center;
  color: ${({ theme }) => theme.colors.snow};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 16px;

  @media (max-width: 768px) {
    font-size: 90px;
    line-height: 0.22;
  }
`

const CardTitle = styled.div`
  margin: 26px 0 15px;
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.base};
    margin: 10px 0;
  }
`

const SeparatorSection = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  z-index: 10;
  width: 100%;
  height: 32%;
  justify-content: center;
`

const Separator = styled.div`
  width: 20px;
  height: 2px;
  background: #4a4a4a;
`

const ButtonWrapper = styled.div`
  margin: 34px 0 68px;

  @media (max-width: 768px) {
    display: none;
  }

  button {
    border: solid 1px ${({ theme }) => theme.colors.text_darker};
  }
`

export default function OurPackServices () {
  const {
    header, title, text, cards
  } = SERVICES
  return (
    <SectionWrapper>
      <ScrollAnimation name='fadeInTop' offset={100}>
        <SectionHeaderWrapper>
          <SectionHeader>
            {header}
          </SectionHeader>
        </SectionHeaderWrapper>
      </ScrollAnimation>
      <ScrollAnimation name='fadeInBottom' offset={100} duration={800}>
        <SectionTitleWrapper>
          <SectionTitle>
            {title}
          </SectionTitle>
        </SectionTitleWrapper>
      </ScrollAnimation>
      <ScrollAnimation name='fadeInBottom' offset={100} duration={800}>
        <SectionContentWrapper>
          <SectionContent>
            {text}
          </SectionContent>
        </SectionContentWrapper>
      </ScrollAnimation>
      <ServicesGroupWrapper>
        <RowsWrapper>
          {cards.map(({ letters, cardTitle }, index) => (
            <CardWrapper key={cardTitle}>
              <ScrollAnimation name='fadeInBottom' offset={100} duration={800 + (index * 100 + 200)}>
                <Card>
                  <CardContent className='card--content'>
                    <Letters>
                      {letters}
                    </Letters>
                    <TextBlock>
                      <CardTitle>
                        {cardTitle}
                      </CardTitle>
                      <SeparatorSection>
                        <Separator />
                      </SeparatorSection>
                    </TextBlock>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </CardWrapper>)
          )}
        </RowsWrapper>
      </ServicesGroupWrapper>
      <ScrollAnimation name='fadeInBottom' offset={100} duration={1200}>
        <ButtonWrapper>
          <ButtonLink
            link='/contact'
          >
            Contact us to learn more
          </ButtonLink>
        </ButtonWrapper>
      </ScrollAnimation>
    </SectionWrapper>
  )
}
