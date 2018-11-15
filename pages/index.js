import Page from '../components/Page.js'
import TextInput from '../components/TextInput';

export default () => (
  <Page fullscreen={true}>
    <div className="main">
      <h1>GoScope</h1>
      <p>
        Enter your Product Key below to start.
      </p>
      <TextInput id="pac-input" className="controls" type="text" placeholder="Product Key..." results={5} />
    </div>
    <style jsx>{`
      .main {
      display: flex;
      padding: 0 10vw 0 10vw;
      text-align: center;
      min-height: 100vh;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: -webkit-linear-gradient(45deg, #5dd2fd, #6157c8);
      color: white;
      }

      h1 {
        font-size: calc(48px + 2vmin);
      }

      p {
        font-size: calc(5px + 2vmin);
      }
    `}</style>
  </Page>
)