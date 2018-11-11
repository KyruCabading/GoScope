import Page from '../components/Page.js'

export default (props) => (
  <Page>
    <h1>{props.url.query.title}</h1>
    <p>This is the blog post content.</p>
  </Page>
)
