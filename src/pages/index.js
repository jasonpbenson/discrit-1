import React, { Component } from "react"
import { SEO, Nav } from "../components"

export default class index extends Component {

  render() {
    return (
      <>
        <Nav links={['Home', 'Programs', 'Resources', 'Contact']} root={true} />
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      </>
    )
  }
}