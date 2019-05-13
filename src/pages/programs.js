import React from "react"
import { SEO, Nav } from "../components"
import program1 from '../images/program1.jpg'
import program2 from '../images/program2.png'
import program3 from '../images/program3.jpg'
import program4 from '../images/program4.jpg'

export default () => (
  <div className="Programs">
    <Nav active="Programs" links={['', 'Programs', 'Resources', 'Contact']} isLoaded={true}/>
    <SEO title="Programs" keywords={[`gatsby`, `application`, `react`]} />
    <img src={program1} alt="ok" />
    Curatorial roundtable (Atlanta Contemporary, Atlanta, 2019)
    <img src={program2} alt="ok" />
    Two public lectures + a live performance (Bakie’s Kansas City, Atlanta, 2019)
    <img src={program3} alt="ok" />
    Discrit:Talks Lecture Series (Atlanta Contemporary, Atlanta, 2018)
    <img src={program4} alt="ok" />
    Discrit: Season One Art Theory Discussion Group (Murmur Media, Atlanta, 2018)
  </div>
)