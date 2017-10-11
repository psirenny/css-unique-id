# css-unique-id

Generate extremely short and unique css ids.
Perfect for those obsessed with reducing the size of their html class names.

# Usage

```
import { createCssIdGenerator } from 'css-unique-id';

const nextCssId = createCssIdGenerator();

const cssClass1 = nextCssId(); // “_”
const cssClass2 = nextCssId(); // “a”
const cssClass3 = nextCssId(); // “b”
// …
const cssClass54 = nextCssId(); // “__”
const cssClass55 = nextCssId(); // “_a”
const cssClass56 = nextCssId(); // “_b”
```

OR for those who prefer pure functions:

```
import { getCssId } from 'css-unique-id';

const cssClass1 = getCssId(0); // “_”
const cssClass2 = getCssId(1); // “a”
const cssClass3 = getCssId(2); // “b”
// …
const cssClass54 = getCssId(53); // “__”
const cssClass55 = getCssId(54); // “_a”
const cssClass56 = getCssId(55); // “_b”
```

# Notes

Generates up to 2,862 ids that are 2 characters or less.
This number could be increased but it doesn't seem worth the effort.
