import React from 'react'
import styled from 'styled-components'
import ServicesBanner from '../components/ServicesBanner'
import ServicesOffers from '../components/ServicesOffers'
import ServicesSchedules from '../components/ServicesSchedules'
import ServicesWork from '../components/ServicesWork'
import ServicesGrants from '../components/ServicesGrants'
import ServicesResults from '../components/ServicesResults'
import HelpSection from '../components/HelpSection'
import HeadMeta from '../components/HeadMeta'

const Wrapper = styled.div`
`

export default function Services () {
  return (
    <Wrapper>
      <HeadMeta url='services' />
      <ServicesBanner />
      <ServicesOffers />
      <ServicesSchedules />
      <ServicesWork />
      <ServicesGrants />
      <ServicesResults />
      <HelpSection />
    </Wrapper>
  )
}
