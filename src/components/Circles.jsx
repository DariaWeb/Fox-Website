import React, { Component } from 'react'
import styled from 'styled-components'
import Waypoint from 'react-waypoint'
import { media } from '../theme/AppStyles'

const Container = styled.div`
  .circular-chart {
    display: block;
    width: 149px;
    height: 149px;
    ${media.tablet`width: 105px;`};
    ${media.tablet`height: 105px;`};
  }
  
  .circle-bg {
    fill: none;
    stroke: #f1f1f1;
    stroke-width: 3.8;
  }
  
  .circle {
    fill: none; 
    stroke-width: 3.8;
  }
  
  .animate{
    animation: progress 1s ease-out forwards;
  }
  
  .circular-chart.orange .circle {
    stroke: ${({ theme }) => theme.colors.yellow};
  }
`

export class FullDayCircle extends Component {
  handleWaypointEnter = () => {
    this.circle.classList.add('animate')
  }

  render () {
    return (
      <Container>
        <Waypoint onEnter={this.handleWaypointEnter} />
        <svg viewBox='0 0 36 36' className='circular-chart orange'>
          <path
            className='circle-bg'
            d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
          />
          <path
            ref={circle => (this.circle = circle)}
            className='circle'
            strokeDasharray='64, 100'
            d='M2.0845 18
          a 15.9155 15.9155 0 1 1 15.9155 15.9155
          '
          />
        </svg>
      </Container>
    )
  }
}

export class HalfDayCircle extends Component {
  handleWaypointEnter = () => {
    this.circle.classList.add('animate')
  }

  render () {
    return (
      <Container>
        <Waypoint onEnter={this.handleWaypointEnter} />
        <svg viewBox='0 0 36 36' className='circular-chart orange'>
          <path
            className='circle-bg'
            d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
          />
          <path
            ref={circle => (this.circle = circle)}
            className='circle'
            strokeDasharray='33, 100'
            d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
          />
        </svg>
      </Container>
    )
  }
}

export class HourCircle extends Component {
  handleWaypointEnter = () => {
    this.circle.classList.add('animate')
  }

  render () {
    return (
      <Container>
        <Waypoint onEnter={this.handleWaypointEnter} />
        <svg viewBox='0 0 36 36' className='circular-chart orange'>
          <path
            className='circle-bg'
            d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
          />
          <path
            ref={circle => (this.circle = circle)}
            className='circle'
            strokeDasharray='18, 100'
            d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
          />
        </svg>
      </Container>
    )
  }
}
