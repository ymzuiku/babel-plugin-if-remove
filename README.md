# babel-plugin-remove-codes

remove codes

## Example

**In**

```js
if ('babel-remove') {
  console.log('need-remove');
}

if ('other') {
  console.log('no-remove');
}
```

**Out**

```js
if ('other') {
  console.log('no-remove');
}
```

## Installation

```sh
$ npm install babel-plugin-if-remove
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["if-remove"]
}
```

### Via CLI

```sh
$ babel --plugins if-remove script.js
```

### Via Node API

```javascript
require('babel-core').transform('code', {
  plugins: ['if-remove'],
});
```
