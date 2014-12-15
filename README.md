# error-foundry-js

A minimalistic Javascript Universal Module to create custom errors.

## Installation

`npm install error-foundry-js --save`

or

`bower install error-foundry-js --save`

## Usage

### Node

```javascript
var
	ErrorFoundry = require('error-foundry-js');

var
	CustomError = ErrorFoundry.forge('CustomError');

throw new CustomError();
```

### Browser

### Globals

```html
<script src="js/vendor/ErrorFoundry.min.js">
<script>
	var
		CustomError = ErrorFoundry.forge('CustomError');

	throw new CustomError();
</script>
```

### AMD

```javascript
define([ 'ErrorFoundry' ], function (ErrorFoundry) {
	var
		CustomError = ErrorFoundry.forge('CustomError');

	return CustomError;
});
```
