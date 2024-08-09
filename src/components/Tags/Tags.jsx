import React from 'react'
import PropTypes from 'prop-types'
import './Tags.scss'

function Tags({ tags }) {
    return (
        <div className='tags'>
            {tags.map((tag, id) => (
                <span key={id} className='tags__tag'>
                    {tag}
                </span>
            ))}
        </div>
    )
}

Tags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Tags