// Scripts trampa por si el live code no funciona.

// Return example
var a = function () {
    return
    {
        alpha: 90
    }
}

// function statement / expression
if (true) {
  function foo() {
    return 1;
  }
} else {
  function foo() {
    return 2;
  }
}

var foo;
if (true) {
  foo = function {
    return 1;
  }
} else {
  foo = function {
    return 2;
  }
}

// Scope (function scope)
var s = function () {
    if (true) {
        var b = 10;
    }
    console.log(b);
}

var sc = function () {
  var a = 3, b = 5;

  var bar = function () {
    var b = 7, c = 11;

    a += b + c;
  }

  bar();

  console.log(a, b);
}

// Module
var mod = (function () {
  return {
    add: function (a, b) {return a + b}
  }
})();

// Mini jQuery
var J = function (query) {
  return document.querySelector(query)
};


// Hello world 2
var http = require('http');
var server = http.createServer(function (req, res) {
  res.end('Hello World');
})
server.listen(9001);

// require
module.exports = function (num) {
  return num*2;
};

var pow = require('./pow');
console.log(pow(8));

// Express hello world
// http://expressjs.com/en/starter/hello-world.html

// Socket IO chat
// http://socket.io/get-started/chat/

