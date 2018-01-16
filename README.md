# @unction/always

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> ValueType => (ValueType | void) => ValueType

Always returns the value given when called

``` javascript
always(1)() // 1
always(1)(0) // 1
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/always.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/always.svg?maxAge=2592000&style=flat-square
