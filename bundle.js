'use strict';

var _inject = require('@stylexjs/stylex/lib/stylex-inject');
require('@stylexjs/stylex');

var _inject2 = _inject;
_inject2(".x1e2nbdu{color:red}", 3000);
_inject2("@media (prefers-color-scheme: dark){.x165q9wt.x165q9wt{color:green}}", 3200);
_inject2(".x6i1563:root[data-theme='dark']{color:blue}", 3040);
console.log({
  className: "x1e2nbdu x165q9wt x6i1563"
});
