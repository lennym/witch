# witch
require.resolve for binaries

Given the name of a locally installed dependency, witch will return the paths to the module's associated binary scripts.

## Example

```javascript
const witch = require('witch');
witch('gulp');

// returns "/Users/lennym/dev/my-project/node_modules/gulp/bin/gulp.js"
```

For modules which include more than one binary script, you can pass a specific binary name as a second parameter.

```javascript

const witch = require('witch');
witch('mocha', '_mocha');

// returns "/Users/lennym/dev/my-project/node_modules/mocha/bin/_mocha"
```

## FAQs

### Aren't all my installed binaries symlinked into `./node_modules/.bin` anyway?

No. This only applies to the top-level module. If you're writing code that might ever be installed as a child dependency then you should not assume the install paths of dependencies.
