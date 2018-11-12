import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '../theme/AppStyles'
import ScrollAnimation from './ScrollAnimation'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  max-width: 748px;
`

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SectionName = styled.div`
  font-family: 'Roboto-Regular', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.base};
  line-height: 1.5;
  margin-bottom: 16px;
  ${media.tablet`font-size: ${({ theme }) => theme.fontSize.medium};`};
  ${media.tablet`line-height: 1.71;`};
  ${media.tablet`margin-bottom: 13px;`};
`

const Separator = styled.div`
  width: 40px;
  height: 4px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.orange};
`

SectionHeader.propTypes = {
  children: PropTypes.string
}

export default function SectionHeader (props) {
  const { children } = props
  return (
    <Wrapper>
      <Content>
        <HeaderWrapper>
          <ScrollAnimation name='fadeInTop' offset={-10}>
            <SectionName>
              {children}
            </SectionName>
          </ScrollAnimation>
          <ScrollAnimation name='fadeInRight' offset={-10}>
            <Separator />
          </ScrollAnimation>
        </HeaderWrapper>
      </Content>
    </Wrapper>
  )
}
