import React from "react"
import { SEO, Nav } from "../components"

export default () => (
  <>
    <Nav active="Resources" links={['', 'Programs', 'Resources', 'Contact']} isLoaded={true}/>
    <SEO title="Resources" keywords={[`gatsby`, `application`, `react`]} />
  </>
)