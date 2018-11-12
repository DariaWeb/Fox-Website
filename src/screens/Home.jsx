import React from 'react'
import HomeBanner from '../components/HomeBanner'
import HomeFeaturesList from '../components/HomeFeaturesList'
import HomeBenefits from '../components/HomeBenefits'
import HomePack from '../components/HomePack'
import HomeWorkshops from '../components/HomeWorkshops'
import HomeWork from '../components/HomeWork'
import HomePress from '../components/HomePress'
import HomeAwards from '../components/HomeAwards'
import HomeTestimonials from '../components/HomeTestimonials'
import HelpSection from '../components/HelpSection'
import HeadMeta from '../components/HeadMeta'

export default function Home () {
  return (
    <div>
      <HeadMeta url='home' />
      <HomeBanner />
      <HomeFeaturesList />
      <HomeBenefits />
      <HomePack />
      <HomeWorkshops />
      <HomeWork />
      <HomePress />
      <HomeAwards />
      <HomeTestimonials />
      <HelpSection />
    </div>
  )
}
