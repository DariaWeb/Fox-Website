import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import Meta from '../content/meta'

HeadMeta.propTypes = {
  url: PropTypes.string
}

function HeadMeta (props) {
  const { url } = props
  let content = Meta.find(page => page.url === url)
  if (!content) {
    content = Meta.find(page => page.url === 'home')
  }

  return (
    <Helmet>
      <title>{ content.title }</title>
      <meta name='description' content={content.description} />
    </Helmet>
  )
}

export default HeadMeta
