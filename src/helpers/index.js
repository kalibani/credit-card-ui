export const maskingCardNumber = (num) => {
  const str = num.toString()
  return str.replace(/\d{4}(?=.)/g, '$& ');
}

export const maskingExpired = (num) => {
  const str = num.toString()
  return str.replace(/\d{2}(?=.)/g, '$&/');
}

export const numberOnly = (str) => {
  return str.replace(/[^0-9]/g,'')
}

export const validationRules = (name, value) => {
  const numberValue = numberOnly(value)
  switch (name) {
    case 'cardNumber':
      return numberValue.length <= 16
    case 'expired':
      return numberValue.length <= 4
    case 'securityCode':
      return numberValue.length <= 3
    case 'name':
      return value.length <= 20
    default:
      return false;
  }
}