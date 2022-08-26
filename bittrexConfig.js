const { BittrexClient } = require('bittrex-v3-node')

let client = new BittrexClient({
  apiKey: '78fd23dee25b46f7b4afe0d5f353b35a',
  apiSecret: 'df5376b446a1483c81e7fa9d3152cb4b'
})

module.exports = BittrexClient