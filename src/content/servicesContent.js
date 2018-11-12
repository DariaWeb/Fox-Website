import React from 'react'
// import styled from 'styled-components'
import IMAGES from '../utils/ImagesProvider'
import { FullDayCircle, HalfDayCircle, HourCircle } from '../components/Circles'

// const TextSelected = styled.span`
//   background: rgba(247, 214, 102, 0.5);
// `

export const BANNER = {
  title: 'Services we provide',
  content: 'Wolf & Fox help businesses from start-up right through ' +
  'to established businesses looking for growth. We work with you to ' +
  'create the right plan and strategy and then follow that up with regular ' +
  'monthly mentoring and coaching sessions.'
}

export const FEATURES = [
  {
    icon: IMAGES.feature_business_planning_icon,
    alt: 'Business planning',
    title: 'Business planning',
    tags: ['#startup', '#growth']
  },
  {
    icon: IMAGES.feature_strategic_planning_icon,
    alt: 'Strategic planning',
    title: 'Strategic planning',
    tags: ['#growth', '#mentoring']
  },
  {
    icon: IMAGES.feature_problem_solving_icon,
    alt: 'Business problem solving',
    title: 'Business problem solving',
    tags: ['#growth', '#mentoring']
  },
  {
    icon: IMAGES.feature_marketing_strategy_icon,
    alt: 'Marketing strategy',
    title: 'Marketing strategy',
    tags: ['#startup', '#growth']
  },
  {
    icon: IMAGES.feature_capital_raising_icon,
    alt: 'Capital raising advice',
    title: 'Capital raising advice',
    tags: ['#startup', '#growth']
  }
]

export const OFFERS = {
  header: 'what we suggest',
  content: [
    {
      id: 1,
      tag: '#startup',
      name: 'Start-up Consultancy',
      text: [
        <span>
          Nothing compares to the excitement of a new business – but it can
          be a steep learning curve. Many new business owners simply don’t have the expertise to side-step the inevitable pitfalls.
        </span>,
        <span>
          Our start-up consultancy helps you turn your big idea into a successful enterprise, with far fewer headaches and much more fun along the way.
        </span>,
        <span>
          We’ll help you develop a road map for the early stages so you make better, more confident decisions,
          and have access to the expertise your business needs. This could include funding, administration and
          physical set up, dealing with staff and contractors, managing cash flow or implementing marketing.
        </span>
      ]
    },
    {
      id: 2,
      tag: '#growth',
      name: 'Business Growth Advisory',
      text: [
        <span>
          In business, you’re going backwards if you’re not moving forward. But that’s easier said than done,
          when you feel like you’ve been grinding for years and never seem to make any traction.
        </span>,
        <span>
          Often, a fresh perspective and renewed focus is all it takes to reawaken your passion for business, and unlock the results you’ve been working for.
        </span>,
        <span>
          Using our extensive knowledge and innovative approach to business, we analyse your company and offer practical,
          tailored recommendations. Our coaching sessions are then designed to help you put those into action to improve
          your offerings across all functions and create a new path forward.
        </span>
      ]
    },
    {
      id: 3,
      tag: '#mentoring',
      name: 'Business Mentoring & Coaching',
      text: [
        <span>
          Whether you just want help solving a one-off knotty issue, or need a guiding hand through every stage of business,
          we offer a full range of business mentoring and coaching services.
        </span>,
        <span>
          We can help you at any stage – whether you’re still working off the back of a napkin, poised for a growth spurt,
          or need help taking your business into a new market.
        </span>,
        <span>
          Our services cover start-up consultancy, business planning and ongoing business coaching. We can work with you in person or virtually.
        </span>,
        <span>
          Talk to us about our range of pricing options – there will be a solution that works for you.
        </span>
      ]
    }
  ]
}

export const SCHEDULE = {
  header: 'when we can meet',
  title: 'Meet us for a free no obligation consultation to see how we can help ' +
  'your business today. Book closest available time:',
  bgImage: {
    sm: IMAGES.services_schedules_bg_sm,
    md: IMAGES.services_schedules_bg_md,
    lg: IMAGES.services_schedules_bg_lg
  },
  linkName: 'Choose another date & time',
  linkTo: '/booking'
}

export const WORK = {
  header: 'how we work',
  title: 'We start by doing a 1 day business planning session together, ' +
  'then we will move to monthly or quarterly half day or 2 hours sessions.',
  plans: [
    {
      title: 'Initial',
      subTitle: 'Full-day',
      text: 'We create a full business plan together to create a clear strategy ' +
      'for your business. We focus on marketing, systems, people and financials.',
      graph: <FullDayCircle />
    },
    {
      title: 'Quarterly',
      subTitle: 'Half-day',
      text: 'We sit down quarterly and monitor your progress as you move forward ' +
      'to make sure the business is moving in the right direction.',
      graph: <HalfDayCircle />
    },
    {
      title: 'Monthly / Bi-monthly',
      subTitle: 'Two hours',
      text: 'Monthly catch-ups ensure we constantly  have our finger on the pulse ' +
      'of your business. We focus on all aspects of your business to ensure we are reaching your goals.',
      graph: <HourCircle />
    }
  ]
}

export const GRANTS = {
  header: '– grants available!',
  name: 'NZTE Capability programm',
  text: 'For businesses currently operating grants of up to ' +
  '50% are available to help fund our services.',
  linkName: 'Contact us to learn more',
  linkTo: '/contact',
  picture: {
    sm: IMAGES.services_grant_logo_sm,
    md: IMAGES.services_grant_logo_md,
    lg: IMAGES.services_grant_logo_lg
  }
}

export const RESULTS = {
  header: 'our practice',
  statisticsCards: [
    {
      id: 1,
      quantity: '71',
      name: 'regular',
      period: 'clients',
      picture: {
        sm: IMAGES.services_results_pic_1_sm,
        md: IMAGES.services_results_pic_1_md,
        lg: IMAGES.services_results_pic_1_lg
      }
    },
    {
      id: 2,
      quantity: '46',
      name: 'meetings',
      period: 'per month',
      picture: {
        sm: IMAGES.services_results_pic_2_sm,
        md: IMAGES.services_results_pic_2_md,
        lg: IMAGES.services_results_pic_2_lg
      }
    },
    {
      id: 3,
      quantity: '10+',
      name: 'business plans',
      period: 'per month',
      picture: {
        sm: IMAGES.services_results_pic_3_sm,
        md: IMAGES.services_results_pic_3_md,
        lg: IMAGES.services_results_pic_3_lg
      }
    },
    {
      id: 4,
      quantity: '114%',
      name: 'average client revenue growth',
      period: 'per annum',
      picture: {
        sm: IMAGES.services_results_pic_4_sm,
        md: IMAGES.services_results_pic_4_md,
        lg: IMAGES.services_results_pic_4_lg
      }
    }
  ]
}
