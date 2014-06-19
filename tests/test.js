var assert = require('assert'),
		formatter = require('../src/index');

describe('node-address-format', function () {

  it('should not output blank lines', function() {
    var expected = []
    var actual = formatter({
      countryCode: 'US'
    })
    assert.deepEqual(actual, expected);
  });

	it('should output correct address (US)', function() {
    var expected = [
      'line 1',
      'line 2',
      'line 3',
      'city, state zipcode'
    ]
    var actual = formatter({
      address: 'line 1',
      address2: 'line 2',
      address3: 'line 3',
      city: 'city',
      subdivision: 'state',
      postalCode: 'zipcode',
      countryCode: 'US'
    })
		assert.deepEqual(actual, expected);
	});

  it('should output correct address (DK)', function() {
    var expected = [
      'line 1',
      'line 2',
      'line 3',
      'zipcode city'
    ]
    var actual = formatter({
      address: 'line 1',
      address2: 'line 2',
      address3: 'line 3',
      city: 'city',
      postalCode: 'zipcode',
      countryCode: 'DK'
    })
    assert.deepEqual(actual, expected);
  });

  it('should not output state (DK)', function() {
    var expected = [
      'zipcode city'
    ]
    var actual = formatter({
      city: 'city',
      subdivision: 'state',
      postalCode: 'zipcode',
      countryCode: 'DK'
    })
    assert.deepEqual(actual, expected);
  });
});
