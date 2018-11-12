import React from 'react'
import styled from 'styled-components'
import Press from './Press'
import { media } from '../theme/AppStyles'

const SectionWrapper = styled.div`
 padding-top: 35px;
 ${media.tablet`padding-top: 21px;`};
 ${media.phone`padding-top: 0;`};
`

export default function HomePress () {
  return (
    <SectionWrapper>
      <Press />
    </SectionWrapper>
  )
}
