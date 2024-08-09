import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Card.scss'

const Card = ({ data }) => {
  const { id, cover, title } = data

  return (
    <Link to={`/housing/${id}`} className='card__link-housing'>
      <figure className='gallery__card'>
        <img className='card__img-preview' src={cover} alt={title} title={title} />
        <figcaption className='card__caption'>{title}</figcaption>
      </figure>
    </Link>
  )
}

Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.any.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card
