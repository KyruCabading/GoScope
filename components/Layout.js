import Header from './Header'

const layoutStyle = {
  margin: 20
}

const Layout = (props) => {
  if (props.fullscreen) {
    return (
      <div>
        {props.children}
      </div>
    )
  } else {
    return (
      <div style={layoutStyle}>
        <Header />
        {props.children}
      </div>
    )
  }

}

export default Layout
