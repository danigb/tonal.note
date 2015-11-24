# tonal.note

[![Build Status](https://travis-ci.org/danigb/tonal.svg?branch=master)](https://travis-ci.org/danigb/tonal.note)
[![Code Climate](https://codeclimate.com/github/danigb/tonal.note/badges/gpa.svg)](https://codeclimate.com/github/danigb/tonal.note)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![npm version](https://img.shields.io/npm/v/tonal.note.svg)](https://www.npmjs.com/package/tonal.note)
[![license](https://img.shields.io/npm/l/tonal.note.svg)](https://www.npmjs.com/package/tonal.note)
[![tonal](https://img.shields.io/badge/lib-tonal-yellow.svg)](https://www.npmjs.com/package/tonal)


`tonal.note` is a function to transpose notes:

```js
var transpose = require('tonal.note')
distance('C3', '3m') // => 'Eb3'
```

It's part of [tonal](https://www.npmjs.com/package/tonal)

## Install

Only via npm: `npm i --save tonal.note`

## Usage

#### Note transposition

The simplest usage is with a note name (pitch) and interval (the order doesn't matter):

```js
transpose('C2', '4A') // => 'F#2'
transpose('4A', 'C2') // => 'F#2'
```

#### Pitch class transposition

You can transpose pitch classes (note names without octaves), and the returned value will be a pitch class:

```js
tranpose('A', '3M') // => 'C#'
tranpose('A5', '3M') // => 'C#5'
```

#### Add intervals

If you need it you can transpose an interval:

```js
transpose('3M', '3M') // => '5A'
```

#### Transposers

Also, you can partially apply the function to get a transposer:

```js
var major3th = transpose('3M')
major3th('D') // => 'F#'
```

#### Map arrays

Partially applied transposers allows to work with arrays seamlessly:

```js
['C', 'D', 'E', 'F', 'G'].map(transpose('3M')) // => ['E', 'F#', 'G#', 'A', 'B']
['1P', '3m', '5P'].map(transpose('C')) // => ['C', 'Eb', 'G']
```

#### Using different interval or pitch representations

This library can work with [pitches or intervals expressed as arrays]()

```js
```

#### More...

See [tonal](https://www.npmjs.com/package/tonal)

## License

MIT License
