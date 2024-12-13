This repository shows how [tinyglobby](https://github.com/SuperchupuDev/tinyglobby) currently is not capable of handling directory nesting in brace expansion.

Execute `yarn install` and afterwards `yarn comparison` to see the result.

Example tested on a linux disto running on an Ubuntu 24.04 basis:
```
./{a/e,b/f}/{n,o,k}.txt
tinyglobby []
fast-globb [ './a/e/n.txt', './a/e/o.txt', './b/f/n.txt', './b/f/o.txt' ]
globby [ './a/e/n.txt', './a/e/o.txt', './b/f/n.txt', './b/f/o.txt' ]

./{a/e,b/f,**/*}/{n,o,k}.txt
tinyglobby []
fast-globb [
  './a/e/n.txt', './a/e/o.txt', './b/f/n.txt',
  './b/f/o.txt', 'a/f/n.txt',   'a/f/o.txt',
  'a/g/n.txt',   'a/g/o.txt',   'b/e/n.txt',
  'b/e/o.txt',   'b/g/n.txt',   'b/g/o.txt',
  'a/e/h/k.txt', 'a/e/i/k.txt', 'a/e/j/k.txt',
  'a/f/h/k.txt', 'a/f/i/k.txt', 'a/f/j/k.txt',
  'a/g/h/k.txt', 'a/g/i/k.txt', 'a/g/j/k.txt',
  'b/e/h/k.txt', 'b/e/i/k.txt', 'b/e/j/k.txt',
  'b/f/h/k.txt', 'b/f/i/k.txt', 'b/f/j/k.txt',
  'b/g/h/k.txt', 'b/g/i/k.txt', 'b/g/j/k.txt'
]
globby [
  './a/e/n.txt', './a/e/o.txt', './b/f/n.txt',
  './b/f/o.txt', 'a/f/n.txt',   'a/f/o.txt',
  'a/g/n.txt',   'a/g/o.txt',   'b/e/n.txt',
  'b/e/o.txt',   'b/g/n.txt',   'b/g/o.txt',
  'a/e/h/k.txt', 'a/e/i/k.txt', 'a/e/j/k.txt',
  'a/f/h/k.txt', 'a/f/i/k.txt', 'a/f/j/k.txt',
  'a/g/h/k.txt', 'a/g/i/k.txt', 'a/g/j/k.txt',
  'b/e/h/k.txt', 'b/e/i/k.txt', 'b/e/j/k.txt',
  'b/f/h/k.txt', 'b/f/i/k.txt', 'b/f/j/k.txt',
  'b/g/h/k.txt', 'b/g/i/k.txt', 'b/g/j/k.txt'
]
```
`fast-glob` and `globby` produce the exact same outputs while `tinyglobby` does not return any files at all.


When using the online tool [Glob tester](https://globster.xyz/), one can also see how the globs should work and match files.

<details>
  <summary>File-List used in Glob tester (matches file structure of this repository)</summary>

```
./a/e/h/k.txt
./a/e/h/l.txt
./a/e/h/m.txt
./a/e/i/k.txt
./a/e/i/l.txt
./a/e/i/m.txt
./a/e/j/k.txt
./a/e/j/l.txt
./a/e/j/m.txt
./a/e/n.txt
./a/e/o.txt
./a/e/p.txt
./a/f/h/k.txt
./a/f/h/l.txt
./a/f/h/m.txt
./a/f/i/k.txt
./a/f/i/l.txt
./a/f/i/m.txt
./a/f/j/k.txt
./a/f/j/l.txt
./a/f/j/m.txt
./a/f/n.txt
./a/f/o.txt
./a/f/p.txt
./a/g/h/k.txt
./a/g/h/l.txt
./a/g/h/m.txt
./a/g/i/k.txt
./a/g/i/l.txt
./a/g/i/m.txt
./a/g/j/k.txt
./a/g/j/l.txt
./a/g/j/m.txt
./a/g/n.txt
./a/g/o.txt
./a/g/p.txt
./a/q.txt
./a/r.txt
./a/s.txt
./b/e/h/k.txt
./b/e/h/l.txt
./b/e/h/m.txt
./b/e/i/k.txt
./b/e/i/l.txt
./b/e/i/m.txt
./b/e/j/k.txt
./b/e/j/l.txt
./b/e/j/m.txt
./b/e/n.txt
./b/e/o.txt
./b/e/p.txt
./b/f/h/k.txt
./b/f/h/l.txt
./b/f/h/m.txt
./b/f/i/k.txt
./b/f/i/l.txt
./b/f/i/m.txt
./b/f/j/k.txt
./b/f/j/l.txt
./b/f/j/m.txt
./b/f/n.txt
./b/f/o.txt
./b/f/p.txt
./b/g/h/k.txt
./b/g/h/l.txt
./b/g/h/m.txt
./b/g/i/k.txt
./b/g/i/l.txt
./b/g/i/m.txt
./b/g/j/k.txt
./b/g/j/l.txt
./b/g/j/m.txt
./b/g/n.txt
./b/g/o.txt
./b/g/p.txt
./b/q.txt
./b/r.txt
./b/s.txt
```

</details>

The globs `./{a/e,b/f}/{n,o,k}.txt` and `./{a/e,b/f,**/*}/{n,o,k}.txt` match the same files as `fast-glob`, indicated by blue highlighted filenames.
Glob tester uses `minimatch` version 3.0.4.
