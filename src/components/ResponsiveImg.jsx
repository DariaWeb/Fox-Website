import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Img = styled.img`
    object-fit: cover;
    width: 100%;
`

ResponsiveImg.propTypes = {
  small: PropTypes.string,
  medium: PropTypes.string,
  large: PropTypes.string,
  imgHeight: PropTypes.number,
  alt: PropTypes.string
}

export default function ResponsiveImg (props) {
  const {
    small, medium, large, imgHeight, alt
  } = props
  return (
    <Img
      height={imgHeight}
      srcSet={`${small} 1x, ${medium} 2x, ${large} 2048w`}
      src={small}
      alt={alt}
    />
  )
}
