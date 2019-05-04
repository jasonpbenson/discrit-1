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
          to={`/${el.toLowerCase()}`}>
          {el === '' ? 'Home' : el}
        </Link>)
      )}
    </div>
  )
}