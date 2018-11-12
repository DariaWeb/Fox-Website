import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled from 'styled-components'
import IMAGES from '../utils/ImagesProvider'
import HeaderMobileMenu from './HeaderMobileMenu'

const HeaderWrapper = styled.div`
  .menu-enter {
    opacity: 0.01;
    transform: translateX(35%);
    .nav-inner {
      a {
        opacity: 0.01;
        transform: translateY(-40%);
      }
    }
    .address-panel {
      opacity: 0.01;
      transform: translateY(-40%);
    }
  }
  .menu-enter-active {
    opacity: 1;
    transform: translateY(0%);
    transition: all 500ms ease;
      .nav-inner {
        a {
          opacity: 1;
          transform: translateY(0%);
        }
        a:nth-child(1) {
          transition: opacity 350ms, transform 350ms ease;
        }
        a:nth-child(2) {
          transition: opacity 400ms, transform 400ms ease;
        }
        a:nth-child(3) {
          transition: opacity 450ms, transform 450ms ease;
        }
        a:nth-child(4) {
          transition: opacity 500ms, transform 500ms ease;
        }
        a:nth-child(5) {
          transition: opacity 550ms, transform 550ms  ease;
        }
        a:nth-child(6) {
          transition: opacity 600ms, transform 600ms ease;
        }
        a:nth-child(7) {
          transition: opacity 650ms, transform 650ms ease;
        }
      }
      .address-panel {
        opacity: 1;
        transform: translateY(0%);
        transition: opacity 650ms, transform 650ms ease;
      }
  }
  .menu-exit {
    opacity: 1;
    transform: translateX(0%);
  }
  .menu-exit-active {
    opacity: 0.01;
    transform: translateX(0);
    transition: opacity 400ms, transform 500ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
  }
`

const HeaderContent = styled.div`
  height: 70px;
  background: ${({ theme }) => theme.colors.bg};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 666px) {
    padding: 20px 40px 14px;
  }
  @media (max-width: 376px) {
    padding: 20px 0 14px 20px;
  }
`

const AppLogo = styled.div`
  background: url(${IMAGES.header_textless_logo});
  width: 200px;
  height: 36px;
  object-fit: contain;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
`

const HeaderIcon = styled.button`
  object-fit: contain;
  background-repeat: no-repeat;
  background-size: contain;
  border: 0;
  outline: none;
  position: absolute;
  top: 0;
  height: 70px;
  width: 60px;
  right: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  background: transparent;
`

const MenuIcon = styled.div`
  background: transparent url(${IMAGES.icon_hamburger});
  background-repeat: no-repeat;
  width: 16px;
  height: 14px;
  position: absolute;
  top: 33px;
  right: 20px;
  animation-name: scaleIn;
  animation-duration: 600ms;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`

const CloseIcon = styled.div`
  background: transparent url(${IMAGES.icon_close});
  background-repeat: no-repeat;
  width: 14px;
  height: 14px;
  position: absolute;
  top: 33px;
  right: 20px;
  z-index: 101;
  animation-name: scaleIn;
  animation-duration: 600ms;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`

export default class HeaderMobile extends Component {
  state = {
    menuOpen: false
  }

  toggleMenu = () => {
    const { menuOpen } = this.state
    this.setState({ menuOpen: !menuOpen })
  }

  handleMenuItemClick = () => {
    this.toggleMenu()
  }

  render () {
    const { menuOpen } = this.state

    return (
      <HeaderWrapper disabled={menuOpen}>
        <HeaderContent>
          <Link to='/'>
            <AppLogo />
          </Link>
          <HeaderIcon onClick={this.toggleMenu}>
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </HeaderIcon>
        </HeaderContent>
        <TransitionGroup>
          {menuOpen &&
          (
            <CSSTransition timeout={500} classNames='menu'>
              <HeaderMobileMenu handleRouteSelection={this.handleMenuItemClick} />
            </CSSTransition>)
          }
        </TransitionGroup>
      </HeaderWrapper>
    )
  }
}
