import Meta from './Meta'
import Header from './Header'

const layoutStyle = {
  margin: 20
}

const Layout = (props) => {
  if (props.fullscreen) {
    return (
      <div>
        <Meta />
        {props.children}
      </div>
    )
  } else {
    return (
      <div>
        <Meta />
        <Header />
        {props.children}
      </div>
    )
  }
}

export default Layout
