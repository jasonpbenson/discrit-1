import React from "react"
import { SEO, Nav } from "../components"

export default () => (
  <>
    <Nav active="Contact" links={['Home', 'Programs', 'Resources', 'Contact']} isLoaded={true}/>
    <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
  </>
)