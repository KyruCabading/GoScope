import React from 'react'
import Router from 'next/router'
import Page from '../components/Page.js'
import TextInput from '../components/TextInput';
import Button from '../components/Button';

class Index extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      productKeyValue: ""
    }
  }

  onInputChange = event => {
    this.setState({ productKeyValue: event.target.value })
  }

  onKeyPress = event => {
    if (event.key === "Enter") {
      this.handleRedirect(this.state.productKeyValue)
    }
  }

  handleRedirect = key => {
    Router.push(`/scope?key=${key}&fullscreen=true`)
  }

  render() {
    return (
      <Page fullscreen={true}>
        <div className="main">
          <h1>GoScope</h1>
          <p>
            Enter your Product Key below to start.
          </p>
          <TextInput
            id="productkey-input"
            placeholder="Product Key..."
            onKeyPress={this.onKeyPress}
            onChange={this.onInputChange}
            value={this.state.productKeyValue}
          />
          <p style={{ marginTop: 50, fontSize: 14 }}>
            Don't have a product key?
          </p>
          <Button onClick={() => this.handleRedirect('janababy')}>Try GoScope</Button>
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
  }
}

export default Index