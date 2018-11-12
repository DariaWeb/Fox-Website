import { EVENTBRITE_REGISTER } from '../constants/links'
import IMAGES from '../utils/ImagesProvider'

export const BANNER = {
  header: 'Workshops',
  title: 'Workshops that work, period',
  text: [
    'Every business owner needs clear goals. They are the foundation for your business and give you the purpose, drive and direction to move forward.',
    'With over 12 years experience helping businesses thrive, Toss brings an innovative and refreshing dose of youth to achieving growth for your business.',
    'Join us for a half-day workshop where we explore what really makes you tick and define your goals and aims for the 2018-2019 financial year.'
  ],
  linkName: 'Register now',
  linkTo: EVENTBRITE_REGISTER
}

export const GALLERY = {
  header: 'what to expect',
  title: 'We’ll cover everything you’ll need to think about in order to have a successful 2018-19 ' +
  'and beyond for your business.',
  text: 'Whether you’re booked in for our half-day or two-day workshop, you’ll come away with a life-changing game plan for your business, ' +
  'full of valuable takeaways to get you where you really should be.',
  images: [
    {
      id: 1,
      sm: IMAGES.workshops_galley_img_1_sm,
      md: IMAGES.workshops_galley_img_1_md,
      lg: IMAGES.workshops_galley_img_1_lg
    },
    {
      id: 2,
      sm: IMAGES.workshops_galley_img_2_sm,
      md: IMAGES.workshops_galley_img_2_md,
      lg: IMAGES.workshops_galley_img_2_lg
    },
    {
      id: 3,
      sm: IMAGES.workshops_galley_img_3_sm,
      md: IMAGES.workshops_galley_img_3_md,
      lg: IMAGES.workshops_galley_img_3_lg
    },
    {
      id: 4,
      sm: IMAGES.workshops_galley_img_4_sm,
      md: IMAGES.workshops_galley_img_4_md,
      lg: IMAGES.workshops_galley_img_4_lg
    },
    {
      id: 4,
      sm: IMAGES.workshops_galley_img_5_sm,
      md: IMAGES.workshops_galley_img_5_md,
      lg: IMAGES.workshops_galley_img_5_lg
    },
    {
      id: 5,
      sm: IMAGES.workshops_galley_img_6_sm,
      md: IMAGES.workshops_galley_img_6_md,
      lg: IMAGES.workshops_galley_img_6_lg
    }
  ]
}

export const SCHEDULES = {
  header: 'upcoming workshops',
  title: 'We offer workshops to cater to all business shapes and sizes.',
  text: [
    'Our Goal Setting workshop is a ‘short but sweet’ half-day event, ' +
    'packed with punchy content you can implement right away.',
    'Our Business Planning workshop is a more thorough and in-depth event that spans over two days. ' +
    'You’ll get valuable 1-to-1 and personalised content from Toss, which will help set your business up ' +
    'for success 1, 3, 5 and even 10 years from now.'
  ],
  bgImage: {
    sm: IMAGES.workshops_schedule_bg_sm,
    md: IMAGES.workshops_schedule_bg_md,
    lg: IMAGES.workshops_schedule_bg_lg
  }
}

export const REVIEWS = {
  header: 'reviews',
  feeds: [
    {
      id: 1,
      rate: 5,
      shortDescription: 'huge inspiration, motivation and help',
      longDescription: 'Since meeting Toss he has been a huge inspiration, ' +
      'motivation and help. He makes it so everything is possible and attainable. ' +
      'Hugely driven and passionate about his work and really shows. It’s hard to ' +
      'leave a conversation or training workshop not feeling absolutely pumped. ' +
      'Within a month of our goal setting work shop I’m smashing through my goals. ' +
      'I’d highly recommend Toss. From marketing, business, planning and cash flow ' +
      'projection just to name a few or like me new to business and feel like your ' +
      'lost? Get in touch you won’t regret it! Thanks for being genuinely awesome!',
      author: 'Holly McKee',
      authorPicture: {
        src: '',
        alt: 'Eco Fresh Solutions\' workshop review'
      }
    },
    {
      id: 2,
      rate: 5,
      shortDescription: 'get some Wolf and Fox in your life',
      longDescription: 'Toss is simply amazing and we don\'t know what we would ' +
      'have done without him. We were at a cross roads in our business and we ' +
      'needed a straight talking, honest but positive insight and influence to ' +
      'help us through to the next stage. We found that in Toss and the business ' +
      'has just gone from strength to strength over the last year. We can\'t rate him ' +
      'highly enough and recommend you get some Wolf and Fox in your life!',
      author: 'Sabrina O\'Flaherty',
      authorPicture: {
        src: '',
        alt: 'Sabrina O\'Flaherty workshop review'
      }
    },
    {
      id: 3,
      rate: 5,
      shortDescription: 'Toss is a business genius',
      longDescription: 'Toss is a business genius. We have been working with him ' +
      'monthly for almost a year  - ALWAYS leaving our sessions so motivated and ' +
      'focused for the month ahead. He has helped me to understand all aspects of ' +
      'running a business especially the accounts, managing our growth in a ' +
      'realistic way and coming up with new creative marketing plans. I highly ' +
      'recommend Toss to anyone starting out in business, he is our secret weapon to ' +
      'success and the best investment we have ever made. Thank you Toss' +
      '(aka business superman)',
      author: 'RevitaLash Cosmetics New Zealand',
      authorPicture: {
        src: IMAGES.workshops_author_review_2,
        alt: 'RevitaLash Cosmetics New Zealand workshop review'
      }
    },
    {
      id: 4,
      rate: 5,
      shortDescription: 'direction towards success',
      longDescription: 'Toss is a very knowledgeable business mentor. ' +
      'He has great ideas and works together along side you to build a strong ' +
      'business plan. When I first met Toss I was unsure of what I was doing and ' +
      'had no direction. He worked with me, motivated me and helped point me in ' +
      'the right direction towards success. Thanks!!',
      author: 'Sarah Hyndman',
      authorPicture: {
        src: '',
        alt: 'Sarah Hyndman\'s workshop review'
      }
    },
    {
      id: 5,
      rate: 5,
      shortDescription: 'Toss is an incredible mentor',
      longDescription: 'Toss has been an incredible mentor for my business. ' +
      'From the moment we began, Toss helped pivot my product, helped me learn ' +
      'as a leader and helped me market my company in the right way. He has an ' +
      'explosive amount of knowledge and experience and provides such a high ' +
      'quality service. Looking forward to keeping this relationship for many ' +
      'many years to come.',
      author: 'Hiten Parbhu',
      authorPicture: {
        src: IMAGES.workshops_author_review_3,
        alt: 'Hiten Parbhu\'s workshop review'
      }
    },
    {
      id: 6,
      rate: 5,
      shortDescription: 'Toss was a great impartial sounding board',
      longDescription: 'As a start up business we decided to use Toss to help us ' +
      'align our business strategy, focus and time. We conducted multiple ' +
      'references on him before we engaged with his services and had great feedback. ' +
      'Toss was a great impartial sounding board. He has the ability to add value ' +
      'and insight whilst reverting back to the overall business strategy and focus. ' +
      'I have a lot of respect and time for Toss\'s enthusiasm, hard work and ' +
      'dedication and would recommend to anyone looking for his services. ',
      author: 'Callum Davis',
      authorPicture: {
        src: '',
        alt: 'Callum Davis\'s workshop review'
      }
    },
    {
      id: 7,
      rate: 5,
      shortDescription: 'Toss has his finger on the pulse',
      longDescription: '“Working with Toss has been an absolute pleasure. He has his ' +
      'finger on the pulse and is very knowledgeable about business. One thing that ' +
      'we have found awesome is his knowledge of P&L workings and also cashflow ' +
      'projections which is very important. This is something i struggle with. ' +
      'Its been awesome running through different cashflow projections and figuring out ' +
      'how profitable an idea could be or how risky something is. Toss is highly ' +
      'recommended from me and you wont be disappointed in this investment for your ' +
      'business. Thanks Toss!!”',
      author: 'Bill Chalmers',
      authorPicture: {
        src: IMAGES.workshops_author_review_1,
        alt: 'Bill Chalmers\'s workshop review'
      }
    }]
}
