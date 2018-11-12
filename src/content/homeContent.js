import React from 'react'
import styled from 'styled-components'
import IMAGES from '../utils/ImagesProvider'
import {
  ADDRESS, EMAIL, FACEBOOK_LINK, GOOGLE_REVIEWS_LINK, LINKEDIN_COMPANY, PHONE, LINKEDIN_TOSS
} from '../constants/links'

const Bold = styled.span`
  font-family: 'PatchouliDisplay-Bold', sans-serif;
`
const NonBrSpan = styled.span`
  white-space: nowrap;
`

export const BANNER = {
  title: '70% of new businesses fail within the first four years',
  content: 'Even more don\'t meet their founders expectations ' +
  'of success. Wolf & Fox assists with making sure your business ' +
  'reaches it\'s potential by providing the right advice, ' +
  'plans, strategy and structure for it to thrive.'
}

export const FEATURES = [
  {
    icon: IMAGES.feature_business_planning_icon,
    alt: 'Business planning',
    title: 'Business planning',
    tags: ['#growth', '#startup']
  },
  {
    icon: IMAGES.feature_strategic_planning_icon,
    alt: 'Strategic planning',
    title: 'Strategic planning',
    tags: ['#mentoring', '#startup']
  },
  {
    icon: IMAGES.feature_problem_solving_icon,
    alt: 'Business problem solving',
    title: 'Business problem solving',
    tags: ['#mentoring', '#startup']
  },
  {
    icon: IMAGES.feature_marketing_strategy_icon,
    alt: 'Marketing strategy',
    title: 'Marketing strategy',
    tags: ['#growth', '#startup']
  },
  {
    icon: IMAGES.feature_capital_raising_icon,
    alt: 'Capital raising advice',
    title: 'Capital \n raising advice',
    tags: ['#growth', '#mentoring']
  }
]

export const SLIDES = [
  {
    alt: 'Benefits Slider',
    title: <span>We are experts in strategy and <Bold>growth</Bold></span>,
    images: {
      sm: IMAGES.home_slider_benefits_1_sm,
      md: IMAGES.home_slider_benefits_1_md,
      lg: IMAGES.home_slider_benefits_1_lg
    }
  },
  {
    alt: 'Benefits Slider',
    title: <span>We are young and <Bold>dynamic</Bold></span>,
    images: {
      sm: IMAGES.home_slider_benefits_2_sm,
      md: IMAGES.home_slider_benefits_2_md,
      lg: IMAGES.home_slider_benefits_2_lg
    }
  },
  {
    alt: 'Benefits Slider',
    title: <span>We are <Bold>marketing</Bold> focused</span>,
    images: {
      sm: IMAGES.home_slider_benefits_3_sm,
      md: IMAGES.home_slider_benefits_3_md,
      lg: IMAGES.home_slider_benefits_3_lg
    }
  },
  {
    alt: 'Benefits Slider',
    title: <span>We listen and cater our service to <Bold>your needs</Bold></span>,
    images: {
      sm: IMAGES.home_slider_benefits_4_sm,
      md: IMAGES.home_slider_benefits_4_md,
      lg: IMAGES.home_slider_benefits_4_lg
    }
  },
  {
    alt: 'Benefits Slider',
    title: <span>We get <Bold>results</Bold></span>,
    images: {
      sm: IMAGES.home_slider_benefits_5_sm,
      md: IMAGES.home_slider_benefits_5_md,
      lg: IMAGES.home_slider_benefits_5_lg
    }
  }
]

export const PACK = {
  header: 'our pack',
  title: 'Meet me & my partners',
  profileImg: {
    sm: IMAGES.home_profile_img_head_sm,
    md: IMAGES.home_profile_img_head_md,
    lg: IMAGES.home_profile_img_head_lg
  },
  content: {
    name: 'Toss Grumley',
    title: 'Business advisor',
    linkName: 'Toss\'s LinkedIn',
    linkTo: LINKEDIN_TOSS,
    text: [
      'My passion is helping people succeed and my favourite people to be around are ' +
      'ambitious New Zealand business owners.',
      'I specialise in helping you grow your business, in a way that suits you, because ' +
      'everyone\'s idea of success and perfect outcome is different.',
      'I work with business owners to give them the security, clarity and right advice ' +
      'to push their businesses forward and achieve their goals and ambitions.'
    ]
  },
  signatureImg: {
    sm: IMAGES.signature_img_sm,
    md: IMAGES.signature_img_sm,
    lg: IMAGES.signature_img_sm
  }
}

export const WORKSHOPS = {
  header: 'Upcoming Workshop',
  text: [
    'Every business owner needs clear goals. They are the foundation for your business and give you ' +
    'the purpose, drive and direction to move forward.',
    <span>Join us for a half-day workshop where we explore what really makes you tick and define your goals and
      aims for the <NonBrSpan>2018-2019</NonBrSpan> financial year.</span>
  ],
  bgImage: {
    sm: IMAGES.workshops_banner_bg_sm,
    md: IMAGES.workshops_banner_bg_md,
    lg: IMAGES.home_workshop_bg_lg
  }
}

export const PRESS = {
  header: 'press',
  title: 'Our work featured in',
  sources: [
    {
      logos: {
        small: IMAGES.press_herald_sm,
        medium: IMAGES.press_herald_md,
        large: IMAGES.press_herald_lg
      },
      alt: 'Herald'
    },
    {
      logos: {
        small: IMAGES.press_nz_business_sm,
        medium: IMAGES.press_nz_business_md,
        large: IMAGES.press_nz_business_lg
      },
      alt: 'nzBusiness'
    },
    {
      logos: {
        small: IMAGES.press_bizedge_sm,
        medium: IMAGES.press_bizedge_md,
        large: IMAGES.press_bizedge_lg
      },
      alt: 'bizEdge'
    },
    {
      logos: {
        small: IMAGES.press_review_sm,
        medium: IMAGES.press_review_md,
        large: IMAGES.press_review_lg
      },
      alt: 'The National Business Review'
    },
    {
      logos: {
        small: IMAGES.press_stuff_sm,
        medium: IMAGES.press_stuff_md,
        large: IMAGES.press_stuff_lg
      },
      alt: 'Stuff'
    }
  ]
}

export const WORK = {
  header: 'our work',
  title: 'Some of our awesome clients'
}

export const AWARDS = {
  header: 'Awards',
  content: {
    title: '2017 finalist',
    name: 'Business less $5m turnover sales and marketing',
    text: ['AUT business school excellence in business support awards']
  },
  bgImage: {
    sm: IMAGES.home_awards_bg_sm,
    md: IMAGES.home_awards_bg_md,
    lg: IMAGES.home_awards_bg_lg
  },
  awardPic: {
    sm: IMAGES.home_awards_pic_sm,
    md: IMAGES.home_awards_pic_md,
    lg: IMAGES.home_awards_pic_lg
  }
}

export const TESTIMONIALS = {
  header: 'testimonials',
  clients: [
    {
      id: 1,
      companyName: 'Asili Design',
      givenTestimonials: {
        rate: 5,
        shortDescription: 'really easy to work with',
        longDescription: 'Toss has been a great help to us at asili.  Super approachable, lovely guy and really easy to work with! Toss has really helped us to form  structure around our goals, so that we can achieve these in the most efficient way possible. Great soundboard to throw ideas around with-his knowledge in trading has been particularly useful to us!  I would highly recommend getting in touch with Toss for any business related advice!',
        author: 'Eve Penny',
        authorTitle: 'Owner of Asili Design',
        publicationDate: 'August 16, 2018'
      },
      webLink: 'asili.co',
      hashTags: ['#growth'],
      images: {
        fullSize: {
          small: IMAGES.client_asili_img_full_sm,
          medium: IMAGES.client_asili_img_full_md,
          large: IMAGES.client_asili_img_full_lg
        },
        cropped: {
          small: IMAGES.client_asili_img_cropped_sm,
          medium: IMAGES.client_asili_img_cropped_md,
          large: IMAGES.client_asili_img_cropped_lg
        },
        logo: {
          small: IMAGES.client_asili_logo_sm,
          medium: IMAGES.client_asili_logo_md,
          large: IMAGES.client_asili_logo_lg
        },
        alt: 'Asili Design'
      }
    },
    {
      id: 2,
      companyName: '7 glyphs',
      givenTestimonials: {
        rate: 5,
        shortDescription: 'helps business to grow',
        longDescription: 'Working with Toss and Wolf & Fox is a pleasure. He motivates ' +
        'a lot and provides a very good advices which helps business to grow. ' +
        'Highly recommended.',
        author: 'Igor Anany',
        authorTitle: 'Owner of 7 glyphs',
        publicationDate: 'February 15, 2018'
      },
      webLink: '7glyphs.com',
      hashTags: ['#growth'],
      images: {
        fullSize: {
          small: IMAGES.client_glyphs_img_full_sm,
          medium: IMAGES.client_glyphs_img_full_md,
          large: IMAGES.client_glyphs_img_full_lg
        },
        cropped: {
          small: IMAGES.client_glyphs_img_cropped_sm,
          medium: IMAGES.client_glyphs_img_cropped_md,
          large: IMAGES.client_glyphs_img_cropped_md
        },
        logo: {
          small: IMAGES.client_glyphs_logo_sm,
          medium: IMAGES.client_glyphs_logo_sm,
          large: IMAGES.client_glyphs_logo_sm
        },
        alt: '7 glyphs'
      }
    },
    {
      id: 3,
      companyName: 'The Urban Physio',
      givenTestimonials: {
        rate: 5,
        shortDescription: 'knowledge and deep understanding of business',
        longDescription: 'We engaged Toss to provide advice around business planning ' +
        'and marketing for our new start up. I really appreciated Toss\' knowledge and ' +
        'deep understanding of business. His ability to guide our thinking around ' +
        'marketing the business was absolutely fantastic and we left after seeing ' +
        'him with a feeling of confidence. Additionally, Toss is down.',
        author: 'Elliott Royce',
        authorTitle: 'Owner of The Urban Physio',
        publicationDate: 'January 26, 2018'
      },
      webLink: 'theurbanphysio.co.nz',
      hashTags: ['#startup', '#growth'],
      images: {
        fullSize: {
          small: IMAGES.client_urban_img_full_sm,
          medium: IMAGES.client_urban_img_full_md,
          large: IMAGES.client_urban_img_full_lg
        },
        cropped: {
          small: IMAGES.client_urban_img_cropped_sm,
          medium: IMAGES.client_urban_img_cropped_md,
          large: IMAGES.client_urban_img_cropped_lg
        },
        logo: {
          small: IMAGES.client_urban_logo_sm,
          medium: IMAGES.client_urban_logo_md,
          large: IMAGES.client_urban_logo_lg
        },
        alt: 'The Urban Physio'
      }
    },
    {
      id: 4,
      companyName: 'Lash Noir & Lash Noir Ink',
      givenTestimonials: {
        rate: 5,
        shortDescription: 'a powerhouse of inspiration',
        longDescription: 'I think that a session with Toss should include a complimentary ' +
        'cape in order for me to fly out of his office like Superman. Toss is not only ' +
        'technically savvy with fine tuning the mechanisms of new business, but he is ' +
        'also a powerhouse of inspiration. Toss challenged me to think and make ' +
        'decisions for myself, instead of looking to him for the answers.',
        author: 'Rebecca Hutchinson',
        authorTitle: 'Owner of Lash Noir & Lash Noir Ink',
        publicationDate: 'August 2, 2017'
      },
      webLink: 'lashnoir.co.nz',
      hashTags: ['#growth'],
      images: {
        fullSize: {
          small: IMAGES.client_lash_img_full_sm,
          medium: IMAGES.client_lash_img_full_md,
          large: IMAGES.client_lash_img_full_lg
        },
        cropped: {
          small: IMAGES.client_lash_img_cropped_sm,
          medium: IMAGES.client_lash_img_cropped_md,
          large: IMAGES.client_lash_img_cropped_lg
        },
        logo: {
          small: IMAGES.client_lash_logo_sm,
          medium: IMAGES.client_lash_logo_md,
          large: IMAGES.client_lash_logo_lg
        },
        alt: 'Lash Noir & Lash Noir Ink'
      }
    },
    {
      id: 5,
      companyName: 'CaliWoods',
      givenTestimonials: {
        rate: 5,
        shortDescription: 'efficiently and effectively',
        longDescription: 'Have done start up strategic business and marketing ' +
        'planning with Toss at Wolf and Fox. It was absolutely spot on, we came up ' +
        'with so many different ideas and really got into the finer details that I ' +
        'needed help with in order to make my business a success. I found the ' +
        'marketing pointers really applicable, coming up with a strategy that ' +
        'is industry and business specific. Toss is really enthusiastic and works ' +
        'through key points efficiently and effectively. Highly recommend for ' +
        'start up businesses if you want to be successful in your new venture.',
        author: 'Shay Lawrence',
        authorTitle: 'Owner of CaliWoods',
        publicationDate: 'April 24, 2017'
      },
      webLink: 'caliwoods.co.nz',
      hashTags: ['#startup', '#growth'],
      images: {
        fullSize: {
          small: IMAGES.client_caliwoods_img_full_sm,
          medium: IMAGES.client_caliwoods_img_full_md,
          large: IMAGES.client_caliwoods_img_full_lg
        },
        cropped: {
          small: IMAGES.client_caliwoods_img_cropped_sm,
          medium: IMAGES.client_caliwoods_img_cropped_md,
          large: IMAGES.client_caliwoods_img_cropped_lg
        },
        logo: {
          small: IMAGES.client_caliwoods_logo_sm,
          medium: IMAGES.client_caliwoods_logo_md,
          large: IMAGES.client_caliwoods_logo_lg
        },
        alt: 'CaliWoods'
      }
    },
    {
      id: 6,
      companyName: 'LNO Jewellery',
      givenTestimonials: {
        rate: 5,
        shortDescription: 'motivated to complete the next steps',
        longDescription: 'As a solo business owner of a brand within the fashion ' +
        'industry, when looking for a mentor, it was really important for me to find ' +
        'someone that would ’get’ my brand and share my vision for it. That’s exactly ' +
        'what I have found with Toss. Toss has his finger on the pulse with every ' +
        'aspect of business, from marketing and branding, to crunching the numbers. ' +
        'Being a creative person and not necessarily business savvy, it is invaluable ' +
        'to have someone with huge commercial experience to guide me through the ' +
        'tough business decisions. I always leave my sessions with Toss feeling ' +
        'reassured, certain of my direction and motivated to complete the next steps.',
        author: 'Georgie Caldwell',
        authorTitle: 'Owner of LNO Jewellery',
        publicationDate: 'August 12, 2017'
      },
      webLink: 'lnojewellery.com',
      hashTags: ['#growth'],
      images: {
        fullSize: {
          small: IMAGES.client_lno_img_full_sm,
          medium: IMAGES.client_lno_img_full_md,
          large: IMAGES.client_lno_img_full_lg
        },
        cropped: {
          small: IMAGES.client_lno_img_cropped_sm,
          medium: IMAGES.client_lno_img_cropped_md,
          large: IMAGES.client_lno_img_cropped_lg
        },
        logo: {
          small: IMAGES.client_lno_logo_sm,
          medium: IMAGES.client_lno_logo_md,
          large: IMAGES.client_lno_logo_lg
        },
        alt: 'LNO Jewellery'
      }
    },
    {
      id: 7,
      companyName: 'Manuka Village',
      givenTestimonials: {
        rate: 5,
        shortDescription: 'the ability to add value and insight',
        longDescription: 'As a start up business we decided to use Toss to help us align our business strategy, focus and time. We conducted mutliple references on him before we engaged with his services and had great feedback. Toss was a great impartial sounding board. He has the ability to add value and insight whilst reverting back to the overall business strategy and focus. I have alot of respect and time for Toss\'s enthusiasm, hard work and dedication and would recommend to anyone looking for his services.',
        author: 'Callum Davis',
        authorTitle: 'Owner of Manuka Village',
        publicationDate: 'June 14, 2018'
      },
      webLink: 'manukavillage.com',
      hashTags: ['#growth'],
      images: {
        fullSize: {
          small: IMAGES.client_manuka_img_full_sm,
          medium: IMAGES.client_manuka_img_full_md,
          large: IMAGES.client_manuka_img_full_lg
        },
        cropped: {
          small: IMAGES.client_manuka_img_cropped_sm,
          medium: IMAGES.client_manuka_img_cropped_md,
          large: IMAGES.client_manuka_img_cropped_lg
        },
        logo: {
          small: IMAGES.client_manuka_logo_sm,
          medium: IMAGES.client_manuka_logo_md,
          large: IMAGES.client_manuka_logo_lg
        },
        alt: 'Manuka Village'
      }
    },
    {
      id: 8,
      companyName: 'Free Range Chef',
      givenTestimonials: {
        rate: 5,
        shortDescription: 'is simply amazing',
        longDescription: 'Toss is simply amazing and we don\'t know what we would have done without him. We were at a cross roads in our business and we needed a straight talking, honest but positive insight and influence to help us through to the next stage. We found that in Toss and the business has just gone from strength to strength over the last year. We can\'t rate him highly enough and recommend you get some Wolf and Fox in your life!',
        author: 'Sabrina O\'Flaherty',
        authorTitle: 'Owner of Free Range Chef',
        publicationDate: 'June 10, 2018'
      },
      webLink: 'freerangechef.co.nz',
      hashTags: ['#growth'],
      images: {
        fullSize: {
          small: IMAGES.client_free_img_full_sm,
          medium: IMAGES.client_free_img_full_md,
          large: IMAGES.client_free_img_full_lg
        },
        cropped: {
          small: IMAGES.client_free_img_cropped_sm,
          medium: IMAGES.client_free_img_cropped_md,
          large: IMAGES.client_free_img_cropped_lg
        },
        logo: {
          small: IMAGES.client_free_logo_sm,
          medium: IMAGES.client_free_logo_md,
          large: IMAGES.client_free_logo_lg
        },
        alt: 'Free Range Chef'
      }
    },
    {
      id: 9,
      companyName: 'Nick Von K',
      givenTestimonials: {
        rate: 5,
        shortDescription: 'a very creative problem solving mind',
        longDescription: 'When I met Toss he looked too young to be able to seriously advise me, ' +
        'but I soon realised he possesses an incisive intellect combined with a very creative problem ' +
        'solving mind. And a vital benefit of his youth is that he understands in detail how the ' +
        'online world works. When we spent a full day brainstorming my business he pointed out ' +
        'so many areas I could develop I wondered if he was actually a jewellery designer in ' +
        'disguise - he seemed to understand my industry and my audience so well! I highly ' +
        'recommend anyone who wants to ramp up their business to meet with Toss, I’m sure you won’t ' +
        'regret it.',
        author: 'Nick',
        authorTitle: 'Owner of Nick Von K',
        publicationDate: 'August 2, 2017'
      },
      webLink: 'nickvonk.com',
      hashTags: ['#growth'],
      images: {
        fullSize: {
          small: IMAGES.client_nick_img_full_sm,
          medium: IMAGES.client_nick_img_full_md,
          large: IMAGES.client_nick_img_full_lg
        },
        cropped: {
          small: IMAGES.client_nick_img_cropped_sm,
          medium: IMAGES.client_nick_img_cropped_md,
          large: IMAGES.client_nick_img_cropped_lg
        },
        logo: {
          small: IMAGES.client_nick_logo_sm,
          medium: IMAGES.client_nick_logo_md,
          large: IMAGES.client_nick_logo_lg
        },
        alt: 'Nick Von K'
      }
    },
    {
      id: 10,
      companyName: 'Kiara Cosmetics Revitalash NZ',
      givenTestimonials: {
        rate: 5,
        shortDescription: 'the best investment we have ever made',
        longDescription: 'Toss is a business genius. We have been working with him monthly for almost a year  - ALWAYS leaving our sessions so motivated and focused for the month ahead. He has helped me to understand all aspects of running a business especially the accounts, managing our growth in a realistic way and coming up with new creative marketing plans. I highly recommend Toss to anyone starting out in business, he is our secret weapon to success and the best investment we have ever made. Thank you Toss (aka business superman) :)',
        author: 'Annemarie',
        authorTitle: 'Owner of Kiara Cosmetics Revitalash NZ',
        publicationDate: 'June 12, 2018'
      },
      webLink: 'revitalash.co.nz',
      hashTags: ['#startup', '#growth'],
      images: {
        fullSize: {
          small: IMAGES.client_kiara_img_full_sm,
          medium: IMAGES.client_kiara_img_full_md,
          large: IMAGES.client_kiara_img_full_lg
        },
        cropped: {
          small: IMAGES.client_kiara_img_cropped_sm,
          medium: IMAGES.client_kiara_img_cropped_md,
          large: IMAGES.client_kiara_img_cropped_lg
        },
        logo: {
          small: IMAGES.client_kiara_logo_sm,
          medium: IMAGES.client_kiara_logo_md,
          large: IMAGES.client_kiara_logo_lg
        },
        alt: 'Kiara Cosmetics Revitalash NZ'
      }
    },
    {
      id: 11,
      companyName: 'Rogue Travel',
      givenTestimonials: {
        rate: 5,
        shortDescription: 'an explosive amount of knowledge and experience',
        longDescription: 'Toss has been an incredible mentor for my business. From the moment we began, Toss helped pivot my product, helped me learn as a leader and helped me market my company in the right way. He has an explosive amount of knowledge and experience and provides such a high quality service. Looking forward to keeping this relationship for many many years to come.',
        author: 'Hiten Parbhu',
        authorTitle: 'Owner of Rogue Travel',
        publicationDate: 'June 15, 2017'
      },
      webLink: 'roguetravel.co.nz',
      hashTags: ['#startup', '#growth'],
      images: {
        fullSize: {
          small: IMAGES.client_rogue_img_full_sm,
          medium: IMAGES.client_rogue_img_full_md,
          large: IMAGES.client_rogue_img_full_lg
        },
        cropped: {
          small: IMAGES.client_rogue_img_cropped_sm,
          medium: IMAGES.client_rogue_img_cropped_md,
          large: IMAGES.client_rogue_img_cropped_lg
        },
        logo: {
          small: IMAGES.client_rogue_logo_sm,
          medium: IMAGES.client_rogue_logo_sm,
          large: IMAGES.client_rogue_logo_sm
        },
        alt: 'Rogue Travel'
      }
    },
    {
      id: 12,
      companyName: 'Capelli Lunghi',
      givenTestimonials: {
        rate: 5,
        shortDescription: 'knows his stuff',
        longDescription: 'Toss has been advising our business for almost a year now, after our first business plan we had our best month ever and have continued to grow. Toss knows his stuff, whether it’s numbers, pricing or marketing, he’s amazing and I couldn’t recommend him more.',
        author: 'Sereana Borsellino',
        authorTitle: 'Owner of Capelli Lunghi',
        publicationDate: 'August 14, 2018'
      },
      webLink: 'capellilunghi.com.au',
      hashTags: ['#growth'],
      images: {
        fullSize: {
          small: IMAGES.client_capelli_img_full_sm,
          medium: IMAGES.client_capelli_img_full_md,
          large: IMAGES.client_capelli_img_full_lg
        },
        cropped: {
          small: IMAGES.client_capelli_img_cropped_sm,
          medium: IMAGES.client_capelli_img_cropped_md,
          large: IMAGES.client_capelli_img_cropped_md
        },
        logo: {
          small: IMAGES.client_capelli_logo_sm,
          medium: IMAGES.client_capelli_logo_md,
          large: IMAGES.client_capelli_logo_lg
        },
        alt: 'Capelli Lunghi'
      }
    },
    {
      id: 13,
      companyName: 'Little Mango',
      givenTestimonials: {
        rate: 5,
        shortDescription: 'direction towards success',
        longDescription: 'Toss is a very knowledgeable business mentor. He has great ideas and works together along side you to build a strong business plan. When I first met Toss I was unsure of what I was doing and had no direction. He worked with me, motivated me and helped point me in the right direction towards success. Thanks!!',
        author: 'Sarah Hyndman',
        authorTitle: 'Owner of Little Mango',
        publicationDate: 'June 9, 2018'
      },
      webLink: 'littlemango.co.nz',
      hashTags: ['#startup', '#growth'],
      images: {
        fullSize: {
          small: IMAGES.client_little_img_full_sm,
          medium: IMAGES.client_little_img_full_md,
          large: IMAGES.client_little_img_full_lg
        },
        cropped: {
          small: IMAGES.client_little_img_cropped_sm,
          medium: IMAGES.client_little_img_cropped_md,
          large: IMAGES.client_little_img_cropped_lg
        },
        logo: {
          small: IMAGES.client_little_logo_sm,
          medium: IMAGES.client_little_logo_md,
          large: IMAGES.client_little_logo_lg
        },
        alt: 'Little Mango'
      }
    }
    // {
    //   id: 14,
    //   companyName: 'Boyd Clinic',
    //   givenTestimonials: {
    //     rate: 5,
    //     shortDescription: 'fresh perspective and forecasting',
    //     longDescription: 'Thank you Toss for your insight and valuable advice around business ' +
    //     'growth. It was incredibly helpful to have a sounding board and fresh perspective on ' +
    //     'business ideas and plans. Also helpful to have tangible, realistic planning and ' +
    //     'forecasting to help make informed decisions. Highly recommend.',
    //     author: 'Olivia Scott',
    //     authorTitle: 'Owner of Boyd Clinic',
    //     publicationDate: 'August 2, 2017'
    //   },
    //   webLink: 'theboydclinic.co.nz',
    //   hashTags: ['#growth'],
    //   images: {
    //     fullSize: {
    //       small: IMAGES.client_boyd_img_full_sm,
    //       medium: IMAGES.client_boyd_img_full_md,
    //       large: IMAGES.client_boyd_img_full_lg
    //     },
    //     cropped: {
    //       small: IMAGES.client_boyd_img_cropped_sm,
    //       medium: IMAGES.client_boyd_img_cropped_md,
    //       large: IMAGES.client_boyd_img_cropped_lg
    //     },
    //     logo: {
    //       small: IMAGES.client_boyd_logo_sm,
    //       medium: IMAGES.client_boyd_logo_md,
    //       large: IMAGES.client_boyd_logo_lg
    //     },
    //     alt: 'Boyd Clinic'
    //   }
    // },
    // {
    //   id: 15,
    //   companyName: 'Jess Interiors',
    //   givenTestimonials: {
    //     rate: 5,
    //     shortDescription: 'fresh perspective and forecasting',
    //     longDescription: 'Thank you Toss for your insight and valuable advice around business ' +
    //     'growth. It was incredibly helpful to have a sounding board and fresh perspective on ' +
    //     'business ideas and plans. Also helpful to have tangible, realistic planning and ' +
    //     'forecasting to help make informed decisions. Highly recommend.',
    //     author: 'Olivia Scott',
    //     authorTitle: 'Owner of Jess Interiors',
    //     publicationDate: 'August 2, 2017'
    //   },
    //   webLink: 'jessinteriors.co.nz',
    //   hashTags: ['#startup'],
    //   images: {
    //     fullSize: {
    //       small: IMAGES.client_jess_img_full_sm,
    //       medium: IMAGES.client_jess_img_full_md,
    //       large: IMAGES.client_jess_img_full_lg
    //     },
    //     cropped: {
    //       small: IMAGES.client_jess_img_cropped_sm,
    //       medium: IMAGES.client_jess_img_cropped_md,
    //       large: IMAGES.client_jess_img_cropped_lg
    //     },
    //     logo: {
    //       small: IMAGES.client_jess_logo_sm,
    //       medium: IMAGES.client_jess_logo_md,
    //       large: IMAGES.client_jess_logo_lg
    //     },
    //     alt: 'Jess Interiors'
    //   }
    // }
  ]
}

export const ADDRESS_ITEM = {
  location: {
    icon: IMAGES.icon_location_grey,
    linkName: ADDRESS
  },
  email: {
    icon: IMAGES.icon_email_grey,
    linkName: EMAIL
  },
  phone: {
    icon: IMAGES.icon_phone_grey,
    linkName: PHONE
  },
  alt: 'Wolf & Fox on map'
}

export const SOCIALS = {
  FB: {
    icon: IMAGES.icon_social_fb_grey,
    linkTo: FACEBOOK_LINK
  },
  GOOGLE_PL: {
    icon: IMAGES.icon_social_google_plus_grey,
    linkTo: GOOGLE_REVIEWS_LINK
  },
  LINKEDIN: {
    icon: IMAGES.icon_social_linkedIn_grey,
    linkTo: LINKEDIN_COMPANY
  }
}
