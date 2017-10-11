// @flow

/* eslint-disable import/no-extraneous-dependencies */

import asyncAuto from 'async/auto';
import flowRemoveTypes from 'flow-remove-types';
import { readFile as fsReadFile, writeFile as fsWriteFile } from 'fs';
import { ensureDir as fsExtraEnsureDir } from 'fs-extra';
import { join as pathJoin } from 'path';

const build = (cb) => asyncAuto({
  ensureLibDir: done => fsExtraEnsureDir(
    pathJoin(__dirname, 'lib'),
    done,
  ),
  readSrcFile: done => fsReadFile(
    pathJoin(__dirname, 'src/index.js'),
    'utf8',
    done,
  ),
  copyFlowFileToLibDir: [
    'ensureLibDir', 'readSrcFile',
    (results, done) => fsWriteFile(
      pathJoin(__dirname, 'lib/index.js.flow'),
      results.readSrcFile,
      done,
    ),
  ],
  copyNonFlowFileToLibDir: [
    'ensureLibDir', 'readSrcFile',
    (results, done) => fsWriteFile(
      pathJoin(__dirname, 'lib/index.js'),
      flowRemoveTypes(results.readSrcFile, { pretty: true }).toString(),
      done,
    ),
  ],
}, cb);

build((err) => {
  if (err) throw err;
});
