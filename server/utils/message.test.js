var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Jen';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Connor';
    var lat = "15";
    var long = "12";
    var url = "https://www.google.com/maps/?q=15,12";
    var message = generateLocationMessage(from, lat, long);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, url});
  });
});
