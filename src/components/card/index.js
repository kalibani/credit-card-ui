import React from 'react'
import PropTypes from 'prop-types';
import Chip from 'assets/images/chip.png'
import MasterCard from 'assets/images/master-card-logo.png'
import VisaCard from 'assets/images/visa-logo-v2.png'
import { maskingCardNumber, maskingExpired } from 'helpers'
import { Text } from 'components'

import './style.scss'
function Card ({name, cardNumber, expired, isVisa}) {
    return (
      <div className="card">
        {/* <SvgWave/> */}
        <span className="wave"/>
        <div className="icons">
          <img src={Chip} className="chip" alt="chip"/>
          <img src={ isVisa ? VisaCard : MasterCard} className="master-card" alt="master-card"/>
        </div>
        <div>
          <Text>card number</Text>
          <Text variant="card-number">{cardNumber ? maskingCardNumber(cardNumber) : 'XXXX XXXX XXXX XXXX'}</Text>
        </div>
        <div className="footer">
          <div>
            <Text>cardholder name</Text>
            <Text variant="card-name">{name ? name : 'XXXX XXXX'}</Text>
          </div>
          <div className="expired">
            <Text>expiration</Text>
            <span>
              <Text className="valid-thru">VALID THRU</Text>
              <Text variant="card-name">{expired ? maskingExpired(expired) : 'XX/XX'}</Text>
            </span>
          </div>
        </div>
      </div>
    )
}

Card.defaultProps={
  name: '',
  isVisa: false,
  expired: '',
  cardNumber: ''
}

Card.propTypes = {
  name: PropTypes.string,
  isVisa: PropTypes.bool,
  expired: PropTypes.string,
  cardNumber: PropTypes.string
}

export default React.memo(Card) 