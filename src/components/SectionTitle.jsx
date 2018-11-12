import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { media } from '../theme/AppStyles'

const Title = styled.h3`
  font-size: 28px;
  font-family: PatchouliDisplay, sans-serif;
  font-weight: normal;
  line-height: 1;
  ${media.tablet`font-size: ${({ theme }) => theme.fontSize.h4}`};
`
SectionTitle.propTypes = {
  children: PropTypes.string
}

export default function SectionTitle (props) {
  const { children } = props
  return (
    <Title>
      {children}
    </Title>
  )
}
