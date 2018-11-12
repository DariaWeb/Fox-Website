import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Home, Services, OurPack, OurWork, Workshops, Contact, ContactThankYou, MeetUsThankYou, MeetUs, MeetUsFields
} from './screens/index'
import HeadMeta from './components/HeadMeta'
import Header from './components/Header'
import HeaderMobile from './components/HeaderMobile'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { updateScreenDimentions } from './redux/reducer'

const AppWrapper = styled.div`
  text-align: center;
  height: 100%;
  
  main {
  overflow: hidden;
  }
`

class App extends Component {
  static propTypes = {
    updateScreenSizes: PropTypes.func,
    screenSize: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number
    })
  }

  updateDimensions = () => {
    const { updateScreenSizes } = this.props
    updateScreenSizes({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  componentDidMount () {
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateDimensions)
  }

  render () {
    const { screenSize } = this.props
    const { width } = screenSize
    return (
      <Router>
        <ScrollToTop>
          <AppWrapper>
            <HeadMeta />
            {width <= 666 ? <HeaderMobile /> : <Header />}
            <main>
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/services' exact component={Services} />
                <Route path='/our-work' exact component={OurWork} />
                <Route path='/our-pack' exact component={OurPack} />
                <Route path='/workshops' exact component={Workshops} />
                <Route path='/contact' exact component={Contact} />
                <Route path='/contact-thank-you' exact component={ContactThankYou} />
                <Route path='/booking' exact component={MeetUs} />
                <Route path='/booking/book-consultation' exact component={MeetUsFields} />
                <Route path='/booking-thank-you' exact component={MeetUsThankYou} />
                <Route component={Home} />
              </Switch>
            </main>
            <Footer />
          </AppWrapper>
        </ScrollToTop>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  screenSize: state.screenSize,
  pathname: state.router.location.pathname
})

const mapDispatchToProps = dispatch => ({
  updateScreenSizes: sizes => dispatch(updateScreenDimentions(sizes))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
