'use strict';

const getTotalTests = require('./getTotal.js');
const isBlacklistedTests = require('./isBlacklisted.js');
const getCustomDetailsTests = require('./getCustomDetails.js');

const getTotalCount = getTotalTests.getTotalCount;
const getTotalNames = getTotalTests.getTotalNames;
const isBlacklistedTrue = isBlacklistedTests.isBlacklistedTrue;
const isBlacklistedFalse = isBlacklistedTests.isBlacklistedFalse;
const getCustomDetailsCount = getCustomDetailsTests.getCustomDetailsCount;
const getCustomDetailsNames = getCustomDetailsTests.getCustomDetailsNames;

const objOpsTests = {
  getTotalCount,
  getTotalNames,
  isBlacklistedTrue,
  isBlacklistedFalse,
  getCustomDetailsCount,
  getCustomDetailsNames
};

module.exports = objOpsTests;
