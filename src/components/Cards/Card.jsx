import React from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'

const Card = ({ data }) => {
  const { id, cover, title } = data

  return (
    <Link to={`/housing/${id}`} className="card__link-housing">
      <figure className="gallery__card">
        <img
          className="card__img-preview"
          src={cover}
          alt={title}
          title={title}
        />
        <figcaption className="card__caption">{title}</figcaption>
      </figure>
    </Link>
  )
}


export default Card
