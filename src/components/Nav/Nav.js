import React, { useState } from 'react'
import { Link } from 'gatsby'
import './Nav.scss'

export default props => {

  const [isLoaded, setIsLoaded] = useState(props.root ? false : true)
  const [doneAnimating, setDoneAnimating] = useState(props.root ? false : true)

  setTimeout(() => setIsLoaded(true), 100)
  setTimeout(() => setDoneAnimating(true), props.links.length * 200)

  return (
    <div className="Nav">
      {props.links.map((el, i) => (
        <Link
          className="link"
          key={i}
          style={{
            textDecoration: props.active === el ? 'underline' : 'none',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(1em)',
            transitionDelay: doneAnimating ? '0s' : `.${i * 2}s`,
          }}
          to={`/${el.toLowerCase()}`}>
          {el === '' ? 'Home' : el}
        </Link>)
      )}
    </div>
  )
}