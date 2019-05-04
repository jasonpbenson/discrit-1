import React from "react"
import { SEO, Nav } from "../components"

export default () => (
  <>
    <Nav links={['', 'Programs', 'Resources', 'Contact']} />
    <SEO title="Programs" keywords={[`gatsby`, `application`, `react`]} />
  </>
)