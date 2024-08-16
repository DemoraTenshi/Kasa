import React from 'react'

import './Banner.scss'

function Banner ({page}) {
  return (
    <div className={`${page}__banner`}>
      <div className={`${page}__banner--overlay`}>
        {page === "home" ? (
          <h1 className={`${page}__banner-txt`}>
            <span className='home__banner-txt--mobile'>Chez vous,<br />partout et ailleurs</span>
            <span className='home__banner-txt--desktop'>Chez vous, partout et ailleurs</span>
          </h1>
        ) : null}
      </div>
    </div>
  )
}


export default Banner
