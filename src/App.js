import {useState} from 'react'
import { SwitchTransition, CSSTransition } from "react-transition-group";
import 'assets/style/main.scss'
import { Card, InputForm, CardBack} from 'components'
import { maskingCardNumber, maskingExpired, numberOnly, validationRules } from 'helpers'

function App() {
  const [name, setName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [securityCode, setSecurityCode] = useState('')
  const [expired, setExpired] = useState('')
  const [position, setPosition] = useState(false)
  const [isVisa, setIsVisa] = useState(false)
  const [icon, setIcon] = useState('closed')

  const handleChange = (e) => {
    const { target: { value, name } } = e
    const isValid = validationRules(name, value)
    if (!isValid) {
      return false
    } 
    
    const numberValue = numberOnly(value)
    switch (name) {
      case 'cardNumber':
        setCardNumber(numberValue)
        numberValue[0] === '5' || !numberValue ? setIsVisa(false) : setIsVisa(true)
        break;
      case 'expired':
        setExpired(numberValue)
        break;
      case 'securityCode':
        setSecurityCode(numberValue)
        break;
      case 'name':
        setName(value)
        break;
      default:
        break;
    }

  }

  const handleClickIcon = () => {
    if(icon === 'open'){
      setIcon('closed')
    }else {
      setIcon('open')
    }
  }
  return (
    <div className="app">
      <div className="content">
        <SwitchTransition mode={'out-in'}>
          <CSSTransition
            key={position ? 'back' : 'front'}
            classNames="flip"
            timeout={300}
            addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
          >
            <div className="card-container">
              {
                position ? (
                  <CardBack
                    securityCode={securityCode}
                    icon={icon}
                  />
                ) : (
                  <Card
                    name={name}
                    cardNumber={cardNumber}
                    expired={expired}
                    isVisa={isVisa}
                  />
                )
              }
            </div>

          </CSSTransition>
        </SwitchTransition>
        <div className="form">
          <form>
            <InputForm 
              label="Name"
              value={name}
              name="name"
              onChange={handleChange}
              autoComplete="off"
            />
            <InputForm 
              label="Card Number" 
              isVisa={isVisa}
              isCardNumber 
              tag="generate random"
              value={maskingCardNumber(cardNumber)}
              name="cardNumber"
              onChange={handleChange}
              autoComplete="off"
            />
            <div className="wrapper">
              <InputForm 
                label="Expiration (mm/yy)"
                name="expired"
                value={maskingExpired(expired)}
                onChange={handleChange}
                autoComplete="off"
              />
              <InputForm 
                label="Security Code"
                name="securityCode"
                onChange={handleChange}
                listenOutsideClick
                handleFocus={() => setPosition(true)}
                handleBlur={() => setPosition(false)}
                type={icon === 'open' ? "text" : "password"}
                value={securityCode}
                icon={icon}
                handleClickIcon={handleClickIcon}
                autoComplete="off"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
