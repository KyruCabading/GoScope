import { withRouter } from 'next/router'
import Layout from '../components/Layout.js'
import Map from '../components/Map'

export default (props) => (
  <Layout fullscreen={props.url.query.fullscreen}>
    <h1>{props.url.query.key}</h1>
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
  </Layout>
)
