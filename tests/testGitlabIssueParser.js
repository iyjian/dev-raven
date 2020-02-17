const axios = require('axios')
const data = require('./../src/examples/newIssue.json')

axios.post('https://test.iyjian.workers.dev/gitlab/parser', data).then(response => {
  console.log(response.data)
}).catch(error => {
  console.log(error)
  process.exit(0)
})

console.log(data)