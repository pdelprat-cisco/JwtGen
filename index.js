const jwt = require('jsonwebtoken');
const util = require('util');

const email = 'pdelprat@cisco.com';

// const licence = 'Essentials';
// const licence = 'Advantage';
const licence = 'Premier';

// Generate token
var token = jwt.sign(
  {
    email,
    licence,
  },
  'secret',
  { expiresIn: '1d' }
);

// Copy to clipboard
require('child_process')
  .spawn('clip')
  .stdin.end(token);

// setTimeout(() => {
//   try {
//     console.log(token);
//     var decoded = jwt.verify(token, 'secret');
//     console.log(decoded);
//   } catch (err) {
//     console.log('error:', err);
//   }
// }, 1 * 60);

