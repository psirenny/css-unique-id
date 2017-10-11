// @flow

import test from 'ava';
import { createCssIdGenerator } from '../src';

const generateCssId = (n) => {
  const nextCssId = createCssIdGenerator();

  for (let i = 0; i < n; i += 1) {
    nextCssId();
  }

  return nextCssId();
};

test('gen 0', (t) => {
  t.is(generateCssId(0), '_');
});

test('gen 1', (t) => {
  t.is(generateCssId(1), 'a');
});

test('gen 2', (t) => {
  t.is(generateCssId(2), 'b');
});

test('gen 53', (t) => {
  t.is(generateCssId(53), '__');
});

test('gen 54', (t) => {
  t.is(generateCssId(54), '_a');
});

test('gen 55', (t) => {
  t.is(generateCssId(55), '_b');
});
