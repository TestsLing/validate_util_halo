# noone-user-agent for nodejs
generate a random user-agent

## How to install
```bash
npm install noone-user-agent
```

## How to use
```javascript
const nooneUA = require('noone-user-agent');
console.log(nooneUA());
```

## In the real world ^o^

```javascript
const nooneUA = require('noone-user-agent');
const request = require('request');

var url = 'https://www.google.com.vn/search?safe=off&hl=en&q=hello';
var headers = {
  'User-Agent': nooneUA()
};
request.get({ url: url, headers: headers }, function (e, r, body) {
  console.log(r, body)
});

```