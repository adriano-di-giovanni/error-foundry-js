'use strict';

global.expect = require('chai').expect;

var
  ErrorFoundry = require('../ErrorFoundry');

describe('ErrorFoundry', function () {
  it('.forge', function () {
    var
      CustomError = ErrorFoundry.forge('CustomError'),
      AnotherCustomError = ErrorFoundry.forge('AnotherCustomError'),

      customError = new CustomError(),
      anotherCustomError = new AnotherCustomError();

    expect(customError).to.be.an.instanceof(Error);
    expect(customError).to.be.an.instanceof(CustomError);
    expect(customError.name).to.equal('CustomError');
    expect(anotherCustomError).not.to.be.an.instanceof(CustomError);
  });
});
