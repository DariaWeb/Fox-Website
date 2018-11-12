import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import IMAGES from '../utils/ImagesProvider'
import { desktopNavRoutes } from '../content/headerContent'
import { media } from '../theme/AppStyles'

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
  margin: 3.056% 40px 0;
  ${media.tablet`margin: 18px 40px 24px;`};
  font-family: 'Roboto-Regular', sans-serif;

  animation-name: fadeIn;
  animation-duration: 800ms;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;

  @media (max-width: 376px) {
    margin: 0;
    background: #f8d666;
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: normal;
  }
  
  >a {
      max-width: 28%;
      min-width: 175px;
      width: 331px;
      height: 60px;
      ${media.tablet`width: 199px;`};
      ${media.tablet`height: 36px;`};
  }
`

const AppLogo = styled.div`
  width: 100%;
  height: 100%;
  background: url(${IMAGES.header_text_logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;   
  ${media.tablet`background: url(${IMAGES.header_textless_logo});`};
  ${media.tablet`background-size: contain;`};
  ${media.tablet`background-repeat: no-repeat;`};
  ${media.tablet`background-position: bottom;`};
`

const Nav = styled.nav`
  display: flex;
  flex: 1 1 auto;
  justify-content: flex-end;
  align-items: flex-start;
  height: 80px;
  ${media.tablet`align-items: center;`};
`

const NavItem = styled.div`
  display: flex;
  height: 66px;
  ${media.tablet`height: 61px;`};
  align-items: center;
  justify-content: flex-end;

  a{
    color: ${({ theme }) => theme.colors.grey};
    font-size: ${({ theme }) => theme.fontSize.medium};
    margin-left: 24px;
    ${media.tablet`margin-left: 14px`};
    text-decoration: none;
    font-weight: normal;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    
    &:hover {
      color: ${({ theme }) => theme.colors.yellow_bright};
    }
    
    &.active {
      color: ${({ theme }) => theme.colors.yellow_bright};
    }
  }
  
  a:last-of-type {
    width: 85px;
  }
  
  .btnLink {
    color: ${({ theme }) => theme.colors.grey};
    background: ${({ theme }) => theme.colors.yellow};
    font-size: ${({ theme }) => theme.fontSize.medium};
    border-radius: 4px;
    border: 0;
    cursor: pointer;
    
     &:hover {
      color: ${({ theme }) => theme.colors.grey};
    }
    
    &:active {
      filter: brightness(95%);
    }
  }
`

const renderLinks = () => desktopNavRoutes.map(route => (
  <NavLink
    key={route.path}
    to={route.path}
    activeClassName='active'
    className={route.path.slice(1) === 'booking' && !window.location.pathname.match('booking')
      ? 'btnLink'
      : null}
  >
    {route.name}
  </NavLink>
))

export default function Header () {
  return (
    <HeaderWrapper>
      <Link to='/'>
        <AppLogo />
      </Link>
      <Nav>
        <NavItem>
          {renderLinks()}
        </NavItem>
      </Nav>
    </HeaderWrapper>
  )
}
