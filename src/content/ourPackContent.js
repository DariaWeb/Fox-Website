import React from 'react'
import { LINKEDIN_TOSS } from '../constants/links'
import IMAGES from '../utils/ImagesProvider'

export const PACK = {
  header: 'Our pack',
  title: 'About',
  text: [
    'Toss has helped a number of businesses launch, grow and thrive.',
    'As our key business adviser, he draws on his varied background of managing and growing ' +
    'his own successful enterprises.',
    'Toss’s management career began early, becoming General Manager of a leading wholesale ' +
    'supply company at the age of 25. He is currently a director of 4 successful businesses ' +
    'and an advisor and coach to over 70 fast growing business owners.'
  ],
  profile: {
    name: 'Toss Grumley',
    info: [
      'Business advisor',
      'MBA at Warwick Business School in the U.K.',
      'Member of the Institute of Directors in New Zealand'
    ],
    text: [
      <span>
        &Prime;My passion is helping people succeed and my favourite people to be around are
        ambitious New Zealand business owners.
      </span>,
      <span>
        I specialise in helping you grow your business, in a way that suits you, because everyone&apos;s idea
        of success and perfect outcome is different.
      </span>,
      <span>
        I work with business owners to give them the security, clarity and right advice to push their
        businesses forward and achieve their goals and ambitions&Prime;.
      </span>
    ],
    linkName: 'Toss’s LinkedIn',
    linkTo: LINKEDIN_TOSS,
    profileImg: {
      sm: IMAGES.pack_profile_img_sm,
      md: IMAGES.pack_profile_img_md,
      lg: IMAGES.pack_profile_img_lg
    },
    profileSignatureImg: {
      sm: IMAGES.signature_img_sm,
      md: IMAGES.signature_img_sm,
      lg: IMAGES.signature_img_sm
    }
  }
}

export const SERVICES = {
  header: 'network services',
  title: 'Wolf & Fox\'s network can help you with',
  text: 'Define the direction you should be going in, and our network of trusted experts ' +
  'can help you get there. Whatever your goals, our select group can be called on to help you ' +
  'implement business development or operational strategies.',
  cards: [
    {
      letters: 'fa',
      cardTitle: 'funding advice'
    },
    {
      letters: 'wd',
      cardTitle: 'web development'
    },
    {
      letters: 'cw',
      cardTitle: 'copywriting'
    },
    {
      letters: 'id',
      cardTitle: 'idea validation'
    },
    {
      letters: 'as',
      cardTitle: 'administration support'
    },
    {
      letters: 'os',
      cardTitle: 'operations set up'
    },
    {
      letters: 'la',
      cardTitle: 'legal advice'
    },
    {
      letters: 'af',
      cardTitle: 'accounting & financial'
    }
  ]
}
