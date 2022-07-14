import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'

function Card({title, imageSource, text,  url}) {
 
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUpBig">
      
      <div className="overflow">

      <img src={imageSource} alt="dd" className='card-img-top'/>

      </div>
     <div className='card-body'>
      <h4 className='card-title'>{title}</h4>
      <p className='card-text text-secondary'> 
      {
        text ? text :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quasi dolores, autem nesciunt perspiciatis quidem praesentium. Quasi quas, placeat dolores suscipit voluptate rerum pariatur commodi quibusdam accusantium animi quaerat reiciendis.'
      }
      </p>
      
      <a href={url} className="btn btn-outline-secondary rounded-0"target="blank">get</a>
    </div>
    </div>
  )
}


Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
  
}

export default Card