/**
 * Get the interval between two notes
 *
 * If one or both notes are pitch classes, a simple ascending interval is returned
 *
 * This function is an alias of `tonal.distance`
 *
 * @name note.distance
 * @function
 * @param {String|Array} from - the first note
 * @param {String|Array} to - the other note
 * @return {String|Array} the interval between them
 *
 * @example
 * var distance = require('music.kit/note/distance')
 * distance('C2', 'D3') // => '9M'
 * distance('D2', 'C2') // => '-2M'
 * distance('D', 'C') // => '7m'
 */
module.exports = require('tonal.distance')
