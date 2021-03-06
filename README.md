# css-unique-id

Generate extremely short and unique css ids.
Perfect for those obsessed with reducing the size of their html class names.

[![CircleCI](https://circleci.com/gh/psirenny/css-unique-id/tree/master.svg?style=shield)](https://circleci.com/gh/psirenny/css-unique-id/tree/master)
[![codecov](https://codecov.io/gh/psirenny/css-unique-id/branch/master/graph/badge.svg)](https://codecov.io/gh/psirenny/css-unique-id)
[![Greenkeeper badge](https://badges.greenkeeper.io/psirenny/css-unique-id.svg)](https://greenkeeper.io/)

# Usage

```
import { createCssIdGenerator } from 'css-unique-id';

const nextCssId = createCssIdGenerator();

const cssClass0 = nextCssId(); // “_”
const cssClass1 = nextCssId(); // “a”
const cssClass2 = nextCssId(); // “b”

// …

const cssClass53 = nextCssId(); // “__”
const cssClass54 = nextCssId(); // “_a”
const cssClass55 = nextCssId(); // “_b”
```

Or if you prefer pure functions:

```
import { getCssId } from 'css-unique-id';

const cssClass0 = getCssId(0); // “_”
const cssClass1 = getCssId(1); // “a”
const cssClass2 = getCssId(2); // “b”

// …

const cssClass53 = getCssId(53); // “__”
const cssClass54 = getCssId(54); // “_a”
const cssClass55 = getCssId(55); // “_b”
```

# Notes

Generates up to 2,862 ids that are 2 characters or less.
This could be increased but it doesn't seem worth the effort.
