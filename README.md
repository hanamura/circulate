# circulate

Circulate a number into given range.

## Installation

```sh
npm install @hanamura/circulate --save
```

## Example

```javascript
var circulate = require('@hanamura/circulate');

circulate(0, 0, 360);
// -> 0

circulate(180, 0, 360);
// -> 180

circulate(360, 0, 360);
// -> 0

circulate(450, 0, 360);
// -> 90

circulate(-90, 0, 360);
// -> 270

circulate(-3690, 0, 360);
// -> 270

circulate(450, -180, 180);
// -> 90

circulate(-270, -180, 180);
// -> 90
```

## License

MIT
