# is-writable-stream

[![Build Status](https://img.shields.io/travis/julien-f/nodejs-is-writable-stream/master.svg)](http://travis-ci.org/julien-f/nodejs-is-writable-stream)
[![Dependency Status](https://david-dm.org/julien-f/nodejs-is-writable-stream/status.svg?theme=shields.io)](https://david-dm.org/julien-f/nodejs-is-writable-stream)
[![devDependency Status](https://david-dm.org/julien-f/nodejs-is-writable-stream/dev-status.svg?theme=shields.io)](https://david-dm.org/julien-f/nodejs-is-writable-stream#info=devDependencies)

> Check whether a value is a writable stream.

## Install

Download [manually](https://github.com/julien-f/nodejs-is-writable-stream/releases) or with package-manager.

### [npm package](https://npmjs.org/package/is-writable-stream)

```
> npm install --save is-writable-stream
```

## Example

```javascript
var isWritableStream = makeError('is-writable-stream');

isWritableStream(null);
// → false

isWritableStream(process.stdin);
// → false

isWritableStream(process.stdout);
// → true
```

## Contributions

Contributions are *very* welcomed, either on the documentation or on
the code.

You may:

- report any [issue](https://github.com/julien-f/nodejs-is-writable-stream/issues)
  you've encountered;
- fork and create a pull request.

## License

ISC © [Julien Fontanet](http://julien.isonoe.net)
