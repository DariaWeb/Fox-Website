import ROUTES from './routes'

export const desktopNavRoutes = [
  ROUTES.services,
  ROUTES.ourWork,
  ROUTES.ourPack,
  ROUTES.workshops,
  ROUTES.contact,
  ROUTES.meetus
]

export const mobileNavRoutes = [
  ROUTES.home,
  ...desktopNavRoutes
]
