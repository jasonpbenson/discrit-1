import React, { useState } from 'react'
import { Link } from 'gatsby'
import './Nav.scss'

export default props => {
  
  // remove transition-delay after the animation completes
  const [doneAnimating, setDoneAnimating] = useState(false)
  setTimeout(() => setDoneAnimating(true), 800)

  return (
    <div className="Nav">
      {props.links.map((el, i) => (
        <Link
          className="link"
          key={i}
          style={{
            opacity: props.isLoaded ? 1 : 0,
            transform: props.isLoaded ? 'translateY(0)' : 'translateY(1em)',
            transitionDelay: doneAnimating ? '0s' : `.${i * 2}s`,
          }}
          to={`/${el.toLowerCase()}`}>
          {el === '' ? 'Home' : el}
        </Link>)
      )}
    </div>
  )
}