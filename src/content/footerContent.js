import {
  GOOGLE_REVIEWS_LINK, ADDRESS_SHORT, EMAIL, PHONE, FACEBOOK_LINK, LINKEDIN_COMPANY, DEVELOPER_LINK, GOOGLE_MAPS_API_KEY
} from '../constants/links'
import ROUTES from './routes'
import IMAGES from '../utils/ImagesProvider'

export const ADDRESS_ITEM = {
  address: {
    icon: IMAGES.icon_location,
    linkName: ADDRESS_SHORT
  },
  email: {
    icon: IMAGES.icon_email,
    linkName: EMAIL
  },
  phone: {
    icon: IMAGES.icon_phone,
    linkName: PHONE
  },
  map: {
    key: GOOGLE_MAPS_API_KEY,
    position: {
      lat: -36.845266,
      lng: 174.764564
    }
  }
}

export const SOCIALS = {
  FB: {
    icon: IMAGES.icon_social_fb,
    linkTo: FACEBOOK_LINK
  },
  GOOGLE_PL: {
    icon: IMAGES.icon_social_google_plus,
    linkTo: GOOGLE_REVIEWS_LINK
  },
  LINKEDIN: {
    icon: IMAGES.icon_social_linkedIn,
    linkTo: LINKEDIN_COMPANY
  }
}

export const DEV = {
  linkName: '7 glyphs',
  linkTo: DEVELOPER_LINK,
  logo: IMAGES.glyphs_copyright_logo
}

export const desktopRoutes = [
  ROUTES.home,
  ROUTES.services,
  ROUTES.ourPack,
  ROUTES.ourWork,
  ROUTES.workshops,
  ROUTES.contact,
  ROUTES.meetus
]

export const tabletRoutes = [
  ROUTES.home,
  ROUTES.services,
  ROUTES.ourWork,
  ROUTES.ourPack,
  ROUTES.workshops,
  ROUTES.contact,
  ROUTES.meetus
]

export const mobileRoutes = [
  ROUTES.home,
  ROUTES.ourPack,
  ROUTES.services,
  ROUTES.workshops,
  ROUTES.ourWork,
  ROUTES.contact
]
