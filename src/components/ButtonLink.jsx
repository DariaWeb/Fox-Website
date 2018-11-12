import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

ButtonLink.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  link: PropTypes.string,
  filled: PropTypes.bool,
  children: PropTypes.string
}

const Button = styled.button`
  width: ${({ width }) => width ? `${width}px` : '214px'};
  height: ${({ height }) => height ? `${height}px` : '40px'};
  background: ${props => props.filled ? '#f7d666' : 'transparent'};
  font-family: 'Roboto-Regular', sans-serif;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  margin: 0;
  padding: 0;

  
  &:active {
  a {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }

  &:focus {
    a {
       background-color: rgba(0, 0, 0, 0.05);
     }
  }

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.colors.grey};
  }
`
export default function ButtonLink (props) {
  const {
    link, children
  } = props
  return (
    <Button {...props}>
      <Link to={link}>
        {children}
      </Link>
    </Button>
  )
}
