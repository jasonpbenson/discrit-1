import React from "react"
import { SEO, Nav } from "../components"

export default () => (
  <>
    <Nav links={['', 'Programs', 'Resources', 'Contact']} isLoaded={true}/>
    <SEO title="Programs" keywords={[`gatsby`, `application`, `react`]} />
  </>
)