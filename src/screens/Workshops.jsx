import React from 'react'
import WorkshopsBanner from '../components/WorkshopsBanner'
import WorkshopsGallery from '../components/WorkshopsGallery'
import WorkshopsSchedules from '../components/WorkshopsSchedules'
import WorkshopsReviews from '../components/WorkshopsReviews'
import HelpSection from '../components/HelpSection'
import HeadMeta from '../components/HeadMeta'

export default function Workshops () {
  return (
    <div>
      <HeadMeta url='workshops' />
      <WorkshopsBanner />
      <WorkshopsGallery />
      <WorkshopsSchedules />
      <WorkshopsReviews />
      <HelpSection />
    </div>
  )
}
