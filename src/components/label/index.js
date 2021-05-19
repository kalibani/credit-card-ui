import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

function Label ({children}) {
    return (
      <label className={`label`}>{children}</label>
    )
}

Label.defaultProps={
  children: ''
}

Label.propTypes={
  children: PropTypes.node
}

export default React.memo(Label) 