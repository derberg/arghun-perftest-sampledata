'use strict';

const helpers = require('../../../src/helpers');
const assert = require('assert');
const arghun = require('../../../');
const opt = {
  blDir: ['even-more', 'crap', 'A-characters']
};
const expected =  { './test/testData/testDirectory/B-characters': 6,
     './test/testData/testDirectory/B-characters/more-B': 3,
     './test/testData/testDirectory/B-characters/more-B/inside-B': 2,
     './test/testData/testDirectory/B-characters/more-B/inside-B/custom': 4,
     './test/testData/testDirectory/B-characters/my-man': 1,
     './test/testData/testDirectory/C-characters': 6,
     './test/testData/testDirectory/C-characters/my-man': 2,
     './test/testData/testDirectory/D-characters': 7,
     './test/testData/testDirectory/D-characters/more-and-more-D': 6,
     './test/testData/testDirectory/D-characters/my-man': 1,
     './test/testData/testDirectory/E-characters': 12,
     './test/testData/testDirectory/F-characters': 5,
     './test/testData/testDirectory/F-characters/moremoremore': 3,
     './test/testData/testDirectory/F-characters/my-man': 1,
     './test/testData/testDirectory/G-characters': 7 };

async function walkDirBlacklistDirs(path) {

  try {

    const result = await arghun.walkDir(path, opt);
    assert.deepEqual(result, expected, 'walkDir failed with dirs blacklist');
    helpers.log('walkDir with dirs blacklist - successful');
  }

  catch(err) {

    helpers.log(err);
    throw new Error(err);
  }
}

module.exports = walkDirBlacklistDirs;
