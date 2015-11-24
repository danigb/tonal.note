# tonal.note

[![Build Status](https://travis-ci.org/danigb/tonal.svg?branch=master)](https://travis-ci.org/danigb/tonal.note)
[![Code Climate](https://codeclimate.com/github/danigb/tonal.note/badges/gpa.svg)](https://codeclimate.com/github/danigb/tonal.note)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![npm version](https://img.shields.io/npm/v/tonal.note.svg)](https://www.npmjs.com/package/tonal.note)
[![license](https://img.shields.io/npm/l/tonal.note.svg)](https://www.npmjs.com/package/tonal.note)
[![tonal](https://img.shields.io/badge/lib-tonal-yellow.svg)](https://www.npmjs.com/package/tonal)


`tonal.note` is collection of functions to manipulate notes:

```js
var note = require('tonal.note')
distance('C3', '3m') // => 'Eb3'
```

It's part of [tonal](https://www.npmjs.com/package/tonal)

## Features

- Midi and frequencies: `midi`, `freq`, `fromMidi`
- Note properties: `pitchClass`, `setOctave`
- Enharmonics: `enharmonics`
- Transposition and distances: `transpose`, `distance`

## Install

Only via npm: `npm i --save tonal.note`

## Usage

Notes in tonal are represented by strings, and by default it uses scientific notation with the form: `letter[accidentals][octave]/[duration]`.

Pitch classes are note names without octave and duration. They are used a lot to describe pitch sets like scales.

The `note` function returns a scientific notation of the given string or null if not valid string. It can be used to check if some string is a note:

```js
// get a note
note('c2') // => 'C2'
note('fx') // => 'F##'
note('blah') // => null
// filter notes
['e', 'f', 'g', 'h', 'i'].filter(note) // => ['e', 'f', 'g']
```

#### Note properties

There are several functions to get note properties or to modify them:

```js
// get properties
note.octave('C#4') // => 4
note.pitchClass('Bb5/4') // => 'Bb'

// set properties
note.setOctave(3, 'Bb0') // => 'Bb3'
```

#### Midi and frequencies

You can transform to midi and frequencies:

```js
note.midi('A4') // => 69
note.fromMidi(13) // => 'Bb0'
note.freq(null, 'A4') // => '440'
```

#### Enharmonics

The `note.enharmonics` function return the nearest enharmonics of a note:

```js
note.enharmonics('C') // => ['B#', 'C', 'Dbb']
```

#### Note transposition

You can transpose notes with the `note.transpose` function. The order of the parameters doesn't matter:

```js
transpose('C2', '4A') // => 'F#2'
transpose('4A', 'C2') // => 'F#2'
```

If you transpose pitch classes (note names without octaves), the returned value will be a pitch class:

```js
tranpose('A', '3M') // => 'C#'
tranpose('A5', '3M') // => 'C#5'
```

Also, you can partially apply the function to get a __transposer__:

```js
var major3th = transpose('3M')
major3th('D') // => 'F#'
```

Transposers allows to work with arrays seamlessly:

```js
['C', 'D', 'E', 'F', 'G'].map(transpose('3M')) // => ['E', 'F#', 'G#', 'A', 'B']
['1P', '3m', '5P'].map(transpose('C')) // => ['C', 'Eb', 'G']
```

#### Note distances

The `note.distance` function get the interval between two notes:

```js
note.distance('C2', 'D2') // => '2M'
```

#### More...

Read the [generated documentation](https://github.com/danigb/tonal.notes/blob/master/API.md)
or take a look at [tonal](https://www.npmjs.com/package/tonal)

## License

MIT License
