import React from 'react'
import styled from 'styled-components'
import IMAGES from '../utils/ImagesProvider'

const Loader = styled.div`
  background: url(${IMAGES.icon_loader});
  object-fit: contain;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  width: 46px;
  height: 46px;
  animation: rotation 1.3s infinite ease;
  position: absolute;
  transform: translate(-50% -50%);
  top: calc(50% - 23px);
  left: calc(50% - 23px);
  z-index: 110;
`

export default function LoaderComponent () {
  return (
    <Loader />
  )
}
