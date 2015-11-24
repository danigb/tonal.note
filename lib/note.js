'use strict'

/**
 * Get a note from a string (or null if the string is not a valid note).
 * In tonal a note is represented by a string with a note in scientific notation.
 *
 * This is an alias of `notation.note`
 *
 * @name note
 * @function
 * @param {String} src - the source
 * @return {String} the note in scientific notation
 *
 * @example
 * note = require('tonal.note')
 * note('fx2') // => 'F##2'
 * note('bbb') // => 'Bbb'
 * note('blah') // => null
 */
module.exports = require('tonal.notation/note')
