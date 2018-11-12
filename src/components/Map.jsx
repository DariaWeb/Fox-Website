import React from 'react'
import { compose, withProps } from 'recompose'
import PropTypes from 'prop-types'
import {
  withScriptjs, withGoogleMap, GoogleMap, Marker
} from 'react-google-maps'
import styled from 'styled-components'
import { ADDRESS_ITEM } from '../content/footerContent'

const MapContainer = styled.div`
  height: 100%;
  width: 100%;
`

const MapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${ADDRESS_ITEM.map.key}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <MapContainer />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(({ isMarkerShown, mapStyle, customIcon }) => (
  <GoogleMap
    defaultZoom={16}
    maxZoom={20}
    defaultCenter={ADDRESS_ITEM.map.position}
    options={{ styles: mapStyle, disableDefaultUI: true }}
  >
    {isMarkerShown && <Marker position={ADDRESS_ITEM.map.position} icon={customIcon} />}
  </GoogleMap>)
)

Map.propTypes = {
  customMapStyle: PropTypes.arrayOf(PropTypes.shape({})),
  customIcon: PropTypes.string
}

export default function Map (props) {
  const { customMapStyle, customIcon } = props
  return (
    <MapComponent isMarkerShown mapStyle={customMapStyle} customIcon={customIcon} />
  )
}
