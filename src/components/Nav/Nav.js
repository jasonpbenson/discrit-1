import React, { useState } from 'react'
import { Link } from 'gatsby'
import './Nav.scss'

export default props => {
  //animate only on entering the website for the first time
  const [firstLoad, setFirstLoad] = useState(window.sessionStorage.getItem('firstLoad'))
  const [doneAnimating, setDoneAnimating] = useState(firstLoad ? true : false)

  if(!firstLoad) {
    setTimeout(() => {
      window.sessionStorage.setItem('firstLoad', true)
      setFirstLoad(window.sessionStorage.getItem('firstLoad'))
    }, 100)
    // remove transition-delay after the animation completes
    // time is set by number of links
    setTimeout(() => setDoneAnimating(true), props.links.length * 200)
  }

  return (
    <div className="Nav">
      {props.links.map((el, i) => (
        <Link
          className="link"
          key={i}
          style={{
            textDecoration: props.active === el ? 'underline' : 'none',
            opacity: firstLoad ? 1 : 0,
            transform: firstLoad ? 'translateY(0)' : 'translateY(1em)',
            transitionDelay: doneAnimating ? '0s' : `.${i * 2}s`,
          }}
          to={`/${el.toLowerCase()}`}>
          {el === '' ? 'Home' : el}
        </Link>)
      )}
    </div>
  )
}