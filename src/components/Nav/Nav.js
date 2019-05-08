import React from 'react'
import { Link } from 'gatsby'
import './Nav.scss'

export default props => {
  return (
    <div className="Nav">
      {props.links.map((el, i) => (
        <Link
          className="link"
          key={i}
          style={{
            opacity: props.isLoaded ? 1 : 0,
            transform: props.isLoaded ? 'translateY(0)' : 'translateY(1em)',
            transitionDelay: `.${i*2}s`,
          }}
          to={`/${el.toLowerCase()}`}>
          {el === '' ? 'Home' : el}
        </Link>)
      )}
    </div>
  )
}