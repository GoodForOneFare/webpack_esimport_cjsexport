// This should fail because `cowsay` is a CJS export in an es module.
import {cowsay} from './confused';

console.log(cowsay);

