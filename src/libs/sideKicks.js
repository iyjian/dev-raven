const conf = require('./../../conf')

exports.shortenUrl = async url => {
  try {
    if (conf.shortenUrlBase) {
      // url shortener provided, convert gitlab push url info to shorten url
      let res = await fetch(conf.shortenUrlBase, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({
          long_url: url
        })
      })

      let result = await res.json()

      return result.short_url
    }
    
    return url
  } catch (e) {
    // return origin url if shortten failed
    return url
  }
}
