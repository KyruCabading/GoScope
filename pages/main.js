import React from 'react'
import { withRouter } from 'next/router'
import Page from '../components/Page.js'
import Map from '../components/Map'
import Searchbar from '../components/Searchbar'

import setupMap from '../helpers/setupMap'

import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
const {
  mapStyle,
  center
} = publicRuntimeConfig

class Scope extends React.Component {



  render() {
    const { query } = this.props.router
    const isFullscreen = query.fullscreen

    return (
      <Page fullscreen={isFullscreen}>
        <Searchbar id="pac-input" className="controls" type="text" placeholder="Search... you can try 'Greenbelt'" results={5} />
        <Map
          id="myMap"
          options={mapOptions}
          onMapLoad={map => {
            setupMap(map)
          }}
        />
      </Page>
    )
  }
}

const mapOptions = {
  center,
  zoom: 13,
  mapTypeId: 'roadmap',
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
  gestureHandling: 'greedy',
  styles: mapStyle
}
export default withRouter(Scope)
