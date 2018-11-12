import Page from '../components/Page.js'
import Link from 'next/link'
export default () => (
  <Page fullscreen={true}>
    <div className="main">
      <h1>GoScope</h1>
      <p>
        Please visit <br />
        "goscope.sh.now/scope?key=ProductKey" <br />
        to start scoping. <br />
      </p>
    </div>
    <style jsx>{`
      .main {
      display: flex;
      padding: 0 10vw 0 10vw;
      text-align: center;
      background-color: #282c34;
      min-height: 100vh;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: calc(10px + 2vmin);
      color: white;
      }

      p {
        font-size: calc(5px + 2vmin);
      }
    `}</style>
  </Page>
)