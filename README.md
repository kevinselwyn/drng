# drng

Adds the pseudorandom number generator from id Software's DOOM to the native Math object

## Installation

For browser use, include thusly:

```html
<script src="drng.js"></script>
```

For use in Node.js, include thusly:

```js
require('./drng')
```

## Usage

To return the next "random" number:

```js
Math.drng();
```

To reset the index, pass `true` to the function:

```js
Math.drng(true);
```

## Explanation

See the [original code](https://github.com/id-Software/DOOM/blob/77735c3ff0772609e9c8d29e3ce2ab42ff54d20b/linuxdoom-1.10/m_random.c) in `m_random.c` in the DOOM source code.

For a pretty good explanation, see [this page](http://doom.wikia.com/wiki/Pseudorandom_number_generator) from The DOOM Wiki.
