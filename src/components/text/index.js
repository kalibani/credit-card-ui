import React from 'react'
import './style.scss'

function Text ({children, variant, className}) {
    return (
      <p className={`text ${variant} ${className}`}>{children}</p>
    )
}

Text.defaultProps={
  variant: 'default',
  className: ''
}

export default React.memo(Text) 