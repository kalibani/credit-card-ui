import React, {useRef} from 'react'
import PropTypes from 'prop-types';
import MasterCard from 'assets/images/master-card-logo-bg.png'
import VisaCard from 'assets/images/visa-logo-v1.png'
import OpenEye from 'assets/images/open-eye.png'
import ClosedEye from 'assets/images/closed-eye.png'
import handleClickOutside from 'customHooks/handleClickOutSide'
import './style.scss'

function Input (
  {
    isCardNumber, 
    isVisa,
    icon, 
    handleClickIcon, 
    handleBlur,
    handleFocus,
    listenOutsideClick,
    value,
    ...rest
  }) {
  const refComponent = useRef(null)
  if(listenOutsideClick){
    handleClickOutside(refComponent, () => {
      handleBlur()
    })
  }
  return (
    <div ref={refComponent} className="input-form-wrapper" onClick={() => handleFocus()}>
      <input className="input-form" value={value} {...rest}/>
      {
        isCardNumber && (
          <img src={isVisa ? VisaCard : MasterCard} className="master-card-logo" alt="master-card-logo"/>
        )
      }
      {
        icon && value.length > 0 && (
          <img 
            className="icon-eye" 
            src={icon === 'open' ? OpenEye : ClosedEye} 
            onClick={handleClickIcon}
            alt="icon"/>
        )
      }
    </div>
  )
}

Input.defaultProps={
  isCardNumber: false,
  type: 'text',
  isVisa: false,
  value: '',
  icon: '',
  handleClickIcon: () => {},
  handleFocus: () => {},
  handleBlur: () => {}
}

Input.propTypes = {
  isCardNumber: PropTypes.bool,
  type: PropTypes.string,
  isVisa: PropTypes.bool,
  icon: PropTypes.string,
  value: PropTypes.string,
  handleClickIcon: PropTypes.func,
  handleFocus: PropTypes.func,
  handleBlur: PropTypes.func
}

export default React.memo(Input) 