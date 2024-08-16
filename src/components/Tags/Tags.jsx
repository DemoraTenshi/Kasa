import React from 'react'
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


export default Tags