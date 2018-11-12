import React from 'react'
import styled from 'styled-components'
import OurWorkPress from '../components/OurWorkPress'
import OurWorkMembers from '../components/OurWorkMembers'
import HelpSection from '../components/HelpSection'
import { media } from '../theme/AppStyles'
import HeadMeta from '../components/HeadMeta'

const MainContent = styled.div`
  margin-bottom: 123px;
  ${media.tablet`margin-bottom: 0;`};
`

export default function Home () {
  return (
    <div>
      <HeadMeta url='our-work' />
      <MainContent>
        <OurWorkMembers />
        <OurWorkPress />
      </MainContent>
      <HelpSection />
    </div>
  )
}
