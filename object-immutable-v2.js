const data = Array.from('asynchronous')

function delay(time, text) {
  return new Promise((res) => {
    setTimeout(() => {
      console.log(text)
      res(text)
    }, time)
  })
}

function series() {
  data.reduce((acc, item) => {
    return acc.then(() => {
      const timer = Math.floor(Math.random() * 1000) + 1;
      return delay(timer, item)
    })
  }, Promise.resolve())

}

function parallel() {
  const promises = []
  data.forEach(el => {
    const timer = Math.floor(Math.random() * 1000) + 1;
    promises.push(delay(timer, el))
  })
  
  Promise.all(promises)
}

const object = {
  series,
  parallel
}

// uncomment code below for running async series logic
// object.series()

// uncomment code below for running async parallel logic
// object.parallel()
