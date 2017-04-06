'use strict';

const walkDirBasic = require('./walkDirBasic.js');
const walkDirFileNamesMap = require('./walkDirFileNamesMap.js');
const walkDirBlacklistFiles = require('./walkDirBlacklistFiles.js');
const walkDirBlacklistDirs = require('./walkDirBlacklistDirs.js');
const walkDirBlacklistBoth = require('./walkDirBlacklistBoth.js');

const walkDirTests = {
  walkDirBasic,
  walkDirFileNamesMap,
  walkDirBlacklistFiles,
  walkDirBlacklistDirs,
  walkDirBlacklistBoth
};

module.exports = walkDirTests;
