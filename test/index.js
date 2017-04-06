'use strict';

const assert = require('assert'),
  testCases = require('./testCases'),
  testDataPath = './test/testData/testDirectory',
  testObjCount = require('./testData/objOpsTestObjectCount.json'),
  testObjMap = require('./testData/objOpsTestObjectMap.json'),
  testObjData = require('./testData/testObjData.json'),
  helpers = require('../src/helpers');

async function testRunner(testDataPath) {

  helpers.logTime('Test run time');

  try {

    for (const test in testCases.walkDirTests) {
      if (testCases.walkDirTests.hasOwnProperty(test)) {

        await testCases.walkDirTests[test](testDataPath);
      }
    }

  }
  catch (err) {

    process.exit(1);
  }

  testCases.objOpsTests.getTotalCount(testObjCount);
  testCases.objOpsTests.getTotalNames(testObjMap);
  testCases.objOpsTests.isBlacklistedTrue(testObjData.blacklist.strTrue, testObjData.blacklist.blist);
  testCases.objOpsTests.isBlacklistedFalse(testObjData.blacklist.strFalse, testObjData.blacklist.blist);
  testCases.objOpsTests.getCustomDetailsCount(testObjCount, testObjData.customDetailsPatterns);
  testCases.objOpsTests.getCustomDetailsNames(testObjMap, testObjData.customDetailsPatterns);

  helpers.log('=====================================');
  helpers.log('All tests passing. Long live the king');
  helpers.logTimeEnd('Test run time');
}


testRunner(testDataPath);
