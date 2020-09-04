const helloWorld = require('./helloExport');

describe('Hello World', function() {
  it('says hello world', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
