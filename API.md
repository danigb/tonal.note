## `note`

In music.kit a note is represented by string, usually in scientific notation.

The note module provides functions to manipulate notes:

- Scientific notation: `ntc` and `ctn`
- Midi and frequencies: `note.midi`, `note.freq`, `note.fromMidi`
- Note properties: `note.pitchClass`, `note.setOctave`
- Enharmonics: `note.enharmonics`
- Transposition and distances: `note.transpose`, `note.distance`






## `note.distance`

Get the interval between two notes

If one or both notes are pitch classes, a simple ascending interval is returned

This function is an alias of `tonal.distance`

### Parameters

* `from` **`String or Array`** the first note
* `to` **`String or Array`** the other note


### Examples

```js
var distance = require('music.kit/note/distance')
distance('C2', 'D3') // => '9M'
distance('D2', 'C2') // => '-2M'
distance('D', 'C') // => '7m'
```

Returns  the interval between them


## `note.enharmonics`

Get the enharmonics of a note. It returns an array of three elements: the
below enharmonic, the note, and the upper enharmonic

### Parameters

* `pitch` **`String`** the pitch to get the enharmonics from


### Examples

```js
enharmonics = require('tonal.note/enharmonics')
enharmonics('C') // => ['B#', 'C', 'Dbb']
enharmonics('A') // => ['G##', 'A', 'Bbb']
enharmonics('C#4') // => ['B##3', 'C#4' 'Db4']
enharmonics('Db') // => ['C#', 'Db', 'Ebbb'])
```

Returns `Array` an array of pitches ordered by distance to the given one


## `note.freq`

Get the pitch frequency in herzs with custom concert tuning

This function is currified so it can be partially applied (see examples)

### Parameters

* `tuning` **`Float`** the frequency of A4 (null means 440)
* `note` **`String or Array`** the note name


### Examples

```js
note.freq(null, 'A4') // => 440
note.freq(444, 'A4') // => 444
```
```js
// partially applied
['A4', 'A#4', 'B5'].map(note.freq(440)) // => [440, ...]
var baroque = note.freq(415)
baroque('A3') // => 207.5
```

Returns `Float` the frequency of the note


## `note.fromMidi`

Get the note name (in scientific notation) of the given midi number

It uses MIDI's [Tuning Standard](https://en.wikipedia.org/wiki/MIDI_Tuning_Standard)
where A4 is 69

This method doesn't take into account diatonic spelling. Always the same
pitch class is given for the same midi number.

### Parameters

* `midi` **`Integer`** the midi number


### Examples

```js
note.fromMidi(69) // => 'A4'
```

Returns `String` the pitch


## `note.midi`

Get the midi number of a note

The note can be an string in scientific notation or
[array pitch notation](https://github.com/danigb/music.array.notation)

### Parameters

* `note` **`String or Array`** the note in string or array notation


### Examples

```js
midi('A4') // => 69
midi('A3') // => 57
midi([0, 2]) // => 36 (C2 in array notation)
```

Returns `Integer` the midi number


## `note.note`

Get a note from a string (or null if not valid note)

This is an alias of `notation.note`

### Parameters

* `src` **`String`** the source


### Examples

```js
note = require('music.kit/note/note')
note('fx2') // => 'F##2'
note('bbb') // => 'Bbb'
note('blah') // => null
```

Returns `String` the note in scientific notation


## `note.pitchClass`

Get the [pitch class](https://en.wikipedia.org/wiki/pitch_class) of a note

### Parameters

* `note` **`String or Array`** the note


### Examples

```js
pc = require('tonal.note/pitchClass')
pc('db3') // => 'Db'
pc('fx/4') // => 'F##'
```

Returns  the pitch class


## `note.setOctave`

Set the octave of the given note

### Parameters

* `octave` **`Integer`** the octave to set
* `note` **`String or Array`** the note


### Examples

```js
var setOctave = require('tonal.note/setOctave')
setOctave('2', 'C#1') // => 'C#2'
```

Returns  a copy of the same note with the octave changed


## `note.transpose`

Transpose a note by an interval.

This is an alias of `tonal.transpose`

### Parameters

* `interval` **`String or Array`** the interval. If its false, the note is not transposed.
* `note` **`String or Array`** the note to transpose


### Examples

```js
var transpose = require('tonal.note/transpose')
transpose('3m', 'C4') // => 'Eb4'
transpose('C4', '3m') // => 'Eb4'
tranpose([1, 0, 2], [3, -1, 0]) // => [3, 0, 2]
['C', 'D', 'E'].map(transpose('3M')) // => ['E', 'F#', 'G#']
```

Returns  the note transposed


