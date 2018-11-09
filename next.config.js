module.exports = {
  serverRuntimeConfig: { // Will only be available on the server side
    APPROVED_APIKEYS: process.env.APPROVED_APIKEYS
  },
  publicRuntimeConfig: { // Will be available on both server and client
    GOOGLEMAPS_APIKEY: process.env.GOOGLEMAPS_APIKEY
  }
}