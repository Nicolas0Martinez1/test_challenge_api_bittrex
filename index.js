const express = require('express')
const app = express()
const port = 3000
const BittrexClient = require('./bittrexConfig');

app.get('/', (req, res) => {
    async function subscribe(client) {
        const channels = [
          'heartbeat',
          'trade_BTC-USD',
          'balance'
        ];
        const response = await invoke(client, 'subscribe', channels);
      
        for (var i = 0; i < channels.length; i++) {
          if (response[i]['Success']) {
            console.log('Subscription to "' + channels[i] + '" successful');
          }
          else {
            console.log('Subscription to "' + channels[i] + '" failed: ' + response[i]['ErrorCode']);
          }
        }
      }
      
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})