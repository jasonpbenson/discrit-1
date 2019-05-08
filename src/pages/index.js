import React, { Component } from "react"
import { SEO, Nav } from "../components"

export default class index extends Component {
  state = {
    isLoaded: false,
  }

  componentDidMount(){
    setTimeout(() => this.setState({isLoaded: true}), 100)
  }

  render() {
    return (
      <>
        <Nav links={['', 'Programs', 'Resources', 'Contact']} isLoaded={this.state.isLoaded} />
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      </>
    )
  }
}