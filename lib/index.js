'use strict'

var note = require('./note')

note.midi = require('./midi')
note.fromMidi = require('./fromMidi')
note.freq = require('./freq')

note.pitchClass = require('./pitchClass')
note.setOctave = require('./setOctave')

note.enharmonics = require('./enharmonics')
note.transpose = require('./transpose')
note.distance = require('./distance')

module.exports = note
