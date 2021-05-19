import React from 'react'
import PropTypes from 'prop-types'
import {Label, Input} from 'components'

import './style.scss'

function InputForm({label, tag, isCardNumber, isVisa, handleClickIcon, icon, ...rest}) {
    return (
      <div className="input-label">
        <div className="input-label__label">
          <Label>{label}</Label>
          {
            tag && (
              <span>
                {tag}
              </span>
            )
          }
        </div>
        <Input 
          isCardNumber={isCardNumber} 
          handleClickIcon={handleClickIcon} 
          {...rest}
          isVisa={isVisa}
          icon={icon}
        />
      </div>
    )
}

InputForm.defaultProps={
  label: '',
  isCardNumber: false,
  tag: '',
  icon: ''
}

InputForm.propTypes = {
  label: PropTypes.string,
  isCardNumber: PropTypes.bool,
  tag: PropTypes.string,
  icon: PropTypes.string
}

export default React.memo(InputForm) 