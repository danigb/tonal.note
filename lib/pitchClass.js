'use strict'

var operation = require('tonal.pitch/operation')

/**
 * Get the [pitch class](https://en.wikipedia.org/wiki/pitch_class) of a note
 *
 * @name note.pitchClass
 * @param {String|Array} note the note
 * @return {String|Array} the pitch class
 *
 * @example
 * pc = require('tonal.note/pitchClass')
 * pc('db3') // => 'Db'
 * pc('fx/4') // => 'F##'
 */
module.exports = operation(function (n) {
  return [n[0]]
})
