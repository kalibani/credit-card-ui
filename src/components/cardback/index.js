import React from 'react'
import PropTypes from 'prop-types';
import './style.scss'

function CardBack ({securityCode, icon}) {
    const split = securityCode.split('')
    return (
      <div className="card-back">
        <div className="card-back__strip">
          {
            split.map((el, idx) => icon === 'open' ? <span key={idx}>{el}</span> : <span key={idx}>*</span>)
          }
        </div>
        <div className="card-back__dots">
          <div/>
          <div/>
          <div/>
        </div>
      </div>
    )
}

CardBack.defaultProps={
  securityCode: '',
  icon: ''
}

CardBack.propTypes = {
  securityCode: PropTypes.string,
  icon: PropTypes.string
}

export default React.memo(CardBack) 