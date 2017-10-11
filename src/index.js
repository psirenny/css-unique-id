// @flow

import { toAlphabet } from 'bases';

export const cssAlphabet = ' _abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const cssAlphabetLength = cssAlphabet.length - 1;

export const getCssId = (num: number) => {
  const i = num + Math.floor(num / cssAlphabetLength) + 1;
  return toAlphabet(i, cssAlphabet);
};

export const createCssIdGenerator = () => {
  let i = -1;

  return () => {
    i += 1;
    return getCssId(i);
  };
};
