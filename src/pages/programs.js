import React from "react"
import { SEO, Nav } from "../components"
import program1 from '../images/program1.jpg'
import program2 from '../images/program2.png'
import program3 from '../images/program3.jpg'
import program4 from '../images/program4.jpg'

export default () => (
  <div className="Programs">
    <Nav active="Programs" links={['Home', 'Programs', 'Resources', 'Contact']} isLoaded={true} />
    <SEO title="Programs" keywords={[`gatsby`, `application`, `react`]} />
    <img src={program1} alt="ok" />
    Curatorial roundtable (Atlanta Contemporary, Atlanta, 2019)
    <img src={program2} alt="ok" />
    Two public lectures + a live performance (Bakie’s Kansas City, Atlanta, 2019)
    <img src={program3} alt="ok" />
    Discrit:Talks Lecture Series (Atlanta Contemporary, Atlanta, 2018)<br />
    Discrit:Talks
    In the Fall of 2018, Discrit partnered with the Atlanta Contemporary to produce Discrit:Talks, a free lecture series consisting of two lectures by Discrit founders Chris Fernald and Joey Molina.

    “Painting in Present Tense” premiered September 6, 2018. The talk consisted of original research from Chris Fernald.
    “Painting in Present Tense” examines contemporary painting and the ways in which the medium reflects our fraught relationship to time. The talk argues for painting’s relevance in an era whose speeds seem to outpace the “slowness” of the medium and our capacity to witness life itself. In a wide-ranging conversation that connected such seemingly disparate subjects as Russian Orthodocs icons, zombies, online avatars, the surprisingly unresolved question of what constitutes human death, meatphysical examinations of the nature of time, and the importance of “sensing slowly” in a digital world, “Painting in Present Tense” explores artistic experience in an atemporal world.

    “Surface of Screening and Projection” premiered November 1, 2018. The talk consisted of original research from Joey Molina.
    Using traditional architectural theory as a means of decoding a diverse range of phenomena historically outside the discipline’s purview, artist Joey Molina’s talk both expands and complicates our received notions of “surface,” a rhetorical transformation that Molina contends has the potential to upend institutional hierarchies between artist, gallery, and museum.

    All graphics by Chris Fernald. Photography by Kasey Medlin.
    <img src={program4} alt="ok" />
    Discrit: Season One Art Theory Discussion Group (Murmur Media, Atlanta, 2018)<br/>
    Discrit Season One was a free art theory class and discussion group that ran across seven sessions from February 2018 to May 2018, concluding with a public screening and discussion of 'What the Heart Wants' by Cécile B. Evans. 

    The Discrit Reader No. 1, attached below, provides an overview of the initiative, along with the curriculum for Season One. To listen in on some of our discussions, please refer to the audio recordings of Sessions One and Four below. 

    Selected Audio:
    1.1 Laying Out Conditions: Art + Agency in the Age of the Internet
    https://www.dropbox.com/s/1m3lb2yc8rki46d/Discrit%201.1%20Art%20%2B%20Agency%20in%20the%20Age%20of%20the%20Internet.m4a?dl=0
    1.4 Cyberfeminism + Technofeminism 
    https://www.dropbox.com/s/f35abnailimhh09/Discrit%201.4%20Cyberfeminism%20%2B%20Technofeminism.m4a?dl=0
  </div>
)