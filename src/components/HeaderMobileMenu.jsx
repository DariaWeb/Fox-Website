import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import IMAGES from '../utils/ImagesProvider'
import { mobileNavRoutes } from '../content/headerContent'
import { ADDRESS_ITEM, SOCIALS } from '../content/homeContent'
import { media } from '../theme/AppStyles'

const InnerContainer = styled.div`
  overflow-y: scroll;
  padding: 40px 20px 58px;
`

const AppLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 40px;
  margin: 5px 0 42px 0;
`

const NavAppLogo = styled.div`
  background: url(${IMAGES.nav_logo});
  object-fit: contain;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  width: 63px;
  height: 40px;
`

const NavWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100;  
`

const NavContent = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.yellow};
  width: 100%;
  height: 100%;
`

const Nav = styled.nav``

const NavItems = styled.div`
  flex-wrap: wrap;
  a{
    color: ${({ theme }) => theme.colors.grey};
    font-size: ${({ theme }) => theme.fontSize.medium};
    text-decoration: none;
    font-weight: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;

    &.active {
      color: ${({ theme }) => theme.colors.snow};
    }
  }
  
  a:last-of-type {
    height: 48px;
  }
  
  .btnLink {
    color: ${({ theme }) => theme.colors.grey};
    font-size: ${({ theme }) => theme.fontSize.medium};
    border-radius: 4px;
    border: 0;
    cursor: pointer;
    margin-top: 12px;
    
      span {
        display: flex;
        width: 140px;
        background: ${({ theme }) => theme.colors.snow};
        height: 48px;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
      }

     &:hover {
      color: ${({ theme }) => theme.colors.grey};
    }

    &:active {
      filter: brightness(95%);
    }
  }
`

const AdressesPanel = styled.div`
  display: flex;
  justify-content: center;
  opacity: 0.6;
  align-items: center;
  margin: 24px 0 34px;
  flex-wrap: wrap;

  >a:nth-child(2) {
     margin: 8px 0;
  }
`

const AddressItemWrapper = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 0 10px;
`

const AddressItem = styled.div`
  color: rgba(0, 0, 0, 0.25);
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: 1.71;
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

const SocialMediaLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  
  .google-icon img {
    opacity: 0.4;
  }
`

const SocialMediaIcon = styled.img`
  width: 24px;
  height: 24px;
  opacity: 0.6;
  margin: 0 5px;
  ${media.phone`margin: 0 10px;`};
`

HeaderMobileMenu.propTypes = {
  handleRouteSelection: PropTypes.func
}

export default function HeaderMobileMenu (props) {
  const { handleRouteSelection } = props
  const { location, email, phone } = ADDRESS_ITEM
  const { FB, LINKEDIN, GOOGLE_PL } = SOCIALS

  return (
    <NavWrapper>
      <NavContent>
        <InnerContainer>
          <AppLogoWrapper>
            <NavAppLogo />
          </AppLogoWrapper>
          <Nav>
            <NavItems className='nav-inner'>
              {mobileNavRoutes.map(route => (
                <NavLink
                  key={route.path}
                  exact
                  to={route.path}
                  activeClassName='active'
                  className={route.path.slice(1) === 'booking' && window.location.pathname.slice(1) !== 'booking'
                    ? 'btnLink'
                    : null}
                >
                  <span
                    role='button'
                    tabIndex={0}
                    onClick={handleRouteSelection}
                    onKeyDown={handleRouteSelection}
                  >
                    {route.name}
                  </span>
                </NavLink>
              ))}
            </NavItems>
          </Nav>
          <AdressesPanel className='address-panel'>
            <AddressItemWrapper>
              <AddressItemIcon className='icon-location' src={location.icon} />
              <AddressItem>
                {location.linkName}
              </AddressItem>
            </AddressItemWrapper>
            <AddressItemWrapper>
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
            <a href={GOOGLE_PL.linkTo} target='_blank' rel='noopener noreferrer' className='google-icon'>
              <SocialMediaIcon src={GOOGLE_PL.icon} />
            </a>
            <a href={LINKEDIN.linkTo} target='_blank' rel='noopener noreferrer'>
              <SocialMediaIcon src={LINKEDIN.icon} />
            </a>
          </SocialMediaLinks>
        </InnerContainer>
      </NavContent>
    </NavWrapper>
  )
}
