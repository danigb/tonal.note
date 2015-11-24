'use strict'

/**
 * Get a note from a string (or null if not valid note)
 *
 * This is an alias of `notation.note`
 *
 * @name note.note
 * @function
 * @param {String} src - the source
 * @return {String} the note in scientific notation
 *
 * @example
 * note = require('music.kit/note/note')
 * note('fx2') // => 'F##2'
 * note('bbb') // => 'Bbb'
 * note('blah') // => null
 */
module.exports = require('tonal.notation/note')
