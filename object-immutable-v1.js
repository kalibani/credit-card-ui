function delay(time, text) {
  return new Promise((res) => {
    setTimeout(() => {
      console.log(text)
      res()
    }, time)
  })
}


function series() {
    delay(500, 'first')
    .then(() => {
      return delay(100, 'second')
    })
    .then(() => {
      return delay(300, 'third')
    })
    .then(() => {
      return delay(700, 'fourth')
    })
    .then(() => {
      console.log('each function is executed in sequence')
    })
}

function parallel() {
  delay(500, 'first')
  delay(100, 'second')
  delay(300, 'third')
  delay(700, 'fourth')
  delay(1000, 'every functions executed without wait previous function is complete')
}

const object = {
  series,
  parallel
}

// uncomment code below for running async series logic
// object.series()

// uncomment code below for running async parallel logic
object.parallel()