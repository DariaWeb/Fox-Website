import React from 'react'
import OurPackAbout from '../components/OurPackAbout'
import OurPackServices from '../components/OurPackServices'
import HelpSection from '../components/HelpSection'
import HeadMeta from '../components/HeadMeta'

export default function OurPack () {
  return (
    <div>
      <HeadMeta url='our-pack' />
      <OurPackAbout />
      <OurPackServices />
      <HelpSection />
    </div>
  )
}
