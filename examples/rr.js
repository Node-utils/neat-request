const request = require('../index.js')

const arr = [{
    host: 'localhost',
    port: 8000
  },
  {
    host: 'localhost',
    port: 9000
  },
];

const send = request.createClient({
  path: '/path',
}, {
  rr: arr
});

(async() => {
  for (let i = 0; i < 10; i++) {
    await send();
  }
  console.log('done')
})()


