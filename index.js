import { globSync as tinyglobby } from 'tinyglobby';
import fastglob from 'fast-glob';
import { globbySync as globby } from 'globby';

const glob1 = './{a/e,b/f}/{n,o,k}.txt';
const glob2 = './{a/e,b/f,**/*}/{n,o,k}.txt';

console.log(glob1);
console.log('tinyglobby', tinyglobby(glob1));
console.log('fast-globb', fastglob.sync(glob1));
console.log('globby', globby(glob1));

console.log()

console.log(glob2);
console.log('tinyglobby', tinyglobby(glob2));
console.log('fast-globb', fastglob.sync(glob2));
console.log('globby', globby(glob2));
