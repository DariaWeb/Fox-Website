import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Waypoint from 'react-waypoint'

class ScrollAnimation extends Component {
  state = {
    isReach: false
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    duration: PropTypes.number,
    delay: PropTypes.number,
    offset: PropTypes.number
  }

  static defaultProps = {
    duration: 1000,
    delay: 0,
    offset: 100
  }

  handleWaypointEnter = () => {
    const { isReach } = this.state
    !isReach && this.setState({ isReach: true })
  }

  render () {
    const {
      children, name, duration, delay, offset
    } = this.props
    const { isReach } = this.state
    return (
      <div
        className='scroll-animation'
        style={isReach ? { animation: `${name} ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms forwards` } : null}
      >
        <Waypoint
          bottomOffset={offset}
          onEnter={this.handleWaypointEnter}
        />
        {children}
      </div>
    )
  }
}

export default ScrollAnimation
