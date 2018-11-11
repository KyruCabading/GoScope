import { withRouter } from 'next/router'
import Page from '../components/Page.js'
import Map from '../components/Map'

export default (props) => (
  <Page fullscreen={true}>
    <h1>{'AIzaSyCRuw5iFyahVf698zP0xpknHj0V86FqI2M'}</h1>
    <p>Render Map below</p>
    <Map
      id="myMap"
      options={{
        center: { lat: 41.0082, lng: 28.9784 },
        zoom: 8
      }}
      onMapLoad={map => {
        var marker = new window.google.maps.Marker({
          position: { lat: 41.0082, lng: 28.9784 },
          map: map,
          title: 'Hello Istanbul!'
        });
      }}
    />
  </Page>
)
