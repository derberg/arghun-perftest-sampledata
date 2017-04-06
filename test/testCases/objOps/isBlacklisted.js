'use strict';

const helpers = require('../../../src/helpers');
const assert = require('assert');
const arghun = require('../../../');
const expectedTrue = true;
const expectedFalse = false;


function isBlacklistedTrue(str, blacklist) {

  try {

    const result = arghun.isBlacklisted(str, blacklist);
    assert.equal(result, expectedTrue, 'isBlacklisted with true failes');
    helpers.log('isBlacklisted with true - successful');
  }

  catch(err) {

    helpers.log(err);
    throw new Error(err);
  }
}

function isBlacklistedFalse(str, blacklist) {

  try {

    const result = arghun.isBlacklisted(str, blacklist);
    assert.equal(result, expectedFalse, 'isBlacklisted with false failes');
    helpers.log('isBlacklisted with false - successful');
  }

  catch(err) {

    helpers.log(err);
    throw new Error(err);
  }

}



const isBlacklistedTests = {
  isBlacklistedFalse,
  isBlacklistedTrue
};

module.exports = isBlacklistedTests;
