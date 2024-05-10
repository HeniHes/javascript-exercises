const helloWorld = require('./helloWorld');

describe('Hello Heni', function() {
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
