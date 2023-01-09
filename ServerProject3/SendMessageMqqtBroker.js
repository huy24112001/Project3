const mqtt = require('mqtt')
const options = {
  // Clean session
  clean: true,
  connectTimeout: 4000,
  // Auth
  clientId: 'huy24',
  username: 'assassin24',
  password: 'assassin24',
}
const topic = 'Project3'
const client  = mqtt.connect('tcp://127.0.0.1:1883', options)

client.on('connect', function () {
  console.log('Connected to broker')
  client.subscribe(topic, function (err) {
    if (!err) {
     console.log("Subscribe successfully")
    }
  })

})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())

})
