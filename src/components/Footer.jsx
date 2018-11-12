import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import connect from 'react-redux/es/connect/connect'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import IMAGES from '../utils/ImagesProvider'
import {
  ADDRESS_ITEM, SOCIALS, DEV, desktopRoutes, tabletRoutes, mobileRoutes
} from '../content/footerContent'
import { media } from '../theme/AppStyles'
import * as mapFooterStyles from '../theme/mapFooterStyles.json'
import Map from './Map'

const FooterWrapper = styled.div``

const FooterContent = styled.div`
  font-family: 'Roboto-Regular', sans-serif;
  border-top-right-radius: ${({ rounded }) => (rounded ? '10px' : '0')};
  border-top-left-radius: ${({ rounded }) => (rounded ? '10px' : '0')};
  background: ${({ theme }) => theme.colors.black};
  margin: 0 40px;
  padding: 50px 0 32px 0;
  ${media.tablet`padding: 30px 16px 18px;`};
  ${media.phone`height: auto;`};
  ${media.phone`margin: 0 20px;`};
  ${media.phone`padding-bottom: 36px;`};
  ${media.phone`padding: 55px 0 36px 0;`};
`

const LogoWrapper = styled.div``

const Logo = styled.img`
  width: 89px;
  height: 56px;
  object-fit: contain;
  ${media.tablet`width: 66px;`};
  ${media.tablet`height: 50px;`};
  ${media.phone`width: 69px;`};
  ${media.phone`height: 40px;`};
`

const NavigationLinksPanel = styled.div`
  display: flex;
  justify-content: center;
  padding: 9px 0 5px;
  ${media.tablet`padding: 10px 0 0 0;`};
  ${media.tablet`flex-wrap: wrap;`};
  ${media.phone`padding: 29px 0 21px;`};
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      margin: 0 12px;
      height: 36px;
      line-height: 1.5;
      color: ${({ theme }) => theme.colors.snow};
      font-size: ${({ theme }) => theme.fontSize.base};
      ${media.tablet`font-size: ${({ theme }) => theme.fontSize.medium};`};
      ${media.tablet`margin: 0 2.592%;`};
      ${media.phone`line-height: normal;`};
      ${media.phone`margin: 0;`};
      ${media.phone`width: 43%;`};
      ${media.phone`height: 40px;`};
    }
`

const AdressesPanel = styled.div`
  display: flex;
  justify-content: center;
  opacity: 0.6;
  align-items: center;
  margin-bottom: 16px;
  flex-wrap: wrap;
  min-width: 100%;
  ${media.tablet`margin-bottom: 19px;`};
  ${media.phone`margin-bottom: 32px;`};
  ${media.phone`flex-direction: column;`};

  a {
    justify-content: center;
    max-width: 212px;
    min-width: 113px;
    height: 30px;
    display: flex;
    align-items: center;
  }

  >a:nth-child(2) {
    margin: 0 36px;
    ${media.tablet`margin: 0 30px;`};
    ${media.phone`margin: 0;`};
  }
`

const AddressItemWrapper = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`

const AddressItem = styled.div`
  color: ${({ theme }) => theme.colors.snow};
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: 1.71;
  white-space: nowrap;
`

const AddressItemIcon = styled.img`
  height: 13px;
  width: 13px;
  margin-right: 4px;
  
  &.icon-location {
    width: 10px;
    height: 13.8px;
  }
`

const SocialMediaIcon = styled.img`
  width: 24px;
  height: 24px;
  opacity: 0.6;
  margin: 0 5px;
  ${media.phone`margin: 0 10px;`};
`

const SocialMediaLinks = styled.div`
  display: flex;
  justify-content: center;
  
  a:nth-of-type(2) {
    ${media.tablet`margin: 0 10px;`};
    ${media.phone`margin: 0;`};
  }
`

const DevLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.grey};
`

const DevLogo = styled.img`
  width: 9px;
  height: 9px;
  margin-right: 4px;
`

const CopyrightInfo = styled.div`
  font-family: BrandonText, sans-serif;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 56px;
  font-size: ${({ theme }) => theme.fontSize.small};
  -webkit-font-smoothing: initial;
  font-weight: normal;
  padding: 19px 0 0 0;
  ${media.tablet`height: 51px;`};
  ${media.tablet`padding: 16px 0 0 0;`};
  ${media.phone`padding: 19px 0 0 0;`};

  span {
    color: ${({ theme }) => theme.colors.trademark};
    
    &.copyright-info-divider {
      margin: 0 5px 0 6px; 
    }
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.trademark};
    margin-left: 8px;
  }
`

const MapWrapper = styled.div`
  height: 273px;
  margin: 0 40px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
  ${media.tablet`height: 190px;`};
  ${media.phone`height: 225px;`};
  ${media.phone`margin: 0 20px;`};
`

class Footer extends Component {
  static propTypes = {
    width: PropTypes.number,
    location: PropTypes.shape({}),
    pathname: PropTypes.string
  }

  state = {
    isRound: false
  }

  componentDidMount () {
    const { pathname } = this.props
    this.setState({ isRound: this.checkLocationForUI(pathname) })
  }

  componentDidUpdate (prevProps) {
    const { location } = this.props
    if (prevProps.location !== location) {
      this.setState({ isRound: this.checkLocationForUI(location.pathname) })
    }
  }

  checkLocationForUI = pathname => pathname.match('contact') || pathname.match('booking')

  render () {
    const { width } = this.props
    const { isRound } = this.state
    const {
      address, email, phone
    } = ADDRESS_ITEM
    const { FB, LINKEDIN, GOOGLE_PL } = SOCIALS
    const routes = () => {
      if (width <= 376) return mobileRoutes
      if (width > 376 && width < 768) return tabletRoutes
      return desktopRoutes
    }
    return (
      <Fragment>
        <FooterWrapper>
          <FooterContent rounded={isRound}>
            <LogoWrapper>
              <Logo src={IMAGES.footer_logo_lg} alt='Wolf and Fox logo' />
            </LogoWrapper>
            <NavigationLinksPanel>
              {routes().map(route => (
                <Link to={route.path} key={route.name}>
                  {route.name}
                </Link>
              ))}
            </NavigationLinksPanel>
            <AdressesPanel>
              <AddressItemWrapper>
                <AddressItemIcon className='icon-location' src={address.icon} />
                <AddressItem>
                  {address.linkName}
                </AddressItem>
              </AddressItemWrapper>
              <AddressItemWrapper itemProp='email' href={`mailto:${email.linkName.replace(/\s/g, '')}`}>
                <AddressItemIcon src={email.icon} />
                <AddressItem>
                  {email.linkName}
                </AddressItem>
              </AddressItemWrapper>
              <AddressItemWrapper itemProp='telephone' href={`tel:${phone.linkName.replace(/\s/g, '')}`}>
                <AddressItemIcon src={phone.icon} />
                <AddressItem>
                  {phone.linkName}
                </AddressItem>
              </AddressItemWrapper>
            </AdressesPanel>
            <SocialMediaLinks>
              <a href={FB.linkTo} target='_blank' rel='noopener noreferrer'>
                <SocialMediaIcon src={FB.icon} />
              </a>
              <a href={GOOGLE_PL.linkTo} target='_blank' rel='noopener noreferrer'>
                <SocialMediaIcon src={GOOGLE_PL.icon} />
              </a>
              <a href={LINKEDIN.linkTo} target='_blank' rel='noopener noreferrer'>
                <SocialMediaIcon src={LINKEDIN.icon} />
              </a>
            </SocialMediaLinks>
          </FooterContent>
          <MapWrapper>
            <Map customMapStyle={mapFooterStyles} customIcon={IMAGES.icon_map_marker_star_yellow} />
          </MapWrapper>
        </FooterWrapper>
        <CopyrightInfo>
          <span>Copyright © 2018 Wolf and Fox</span><span className='copyright-info-divider'>|</span><span>Website by</span>
          <a href={DEV.linkTo} target='_blank' rel='noopener noreferrer'>
            <DevLogoWrapper>
              <DevLogo src={DEV.logo} />
              {DEV.linkName}
            </DevLogoWrapper>
          </a>
        </CopyrightInfo>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  width: state.screenSize.width,
  pathname: state.router.location.pathname
})

export default withRouter(connect(mapStateToProps, null)(Footer))
