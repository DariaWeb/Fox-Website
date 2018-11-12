import React from 'react'
import styled from 'styled-components'
import Press from './Press'
import { media } from '../theme/AppStyles'

const SectionWrapper = styled.div`
 padding-top: 103px;;
 ${media.tablet`padding-top: 12px;`};
 ${media.phone`padding-top: 0;`};
`

export default function OurWorkPress () {
  return (
    <SectionWrapper>
      <Press />
    </SectionWrapper>
  )
}
