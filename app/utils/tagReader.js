'use strict'

let id3 = require('id3js')

/**
 * Get a specific field from the ID3 tag
 * It will search in ID3 v2, if nothing v1 and fallback to "defaultVal"
 * @param  {Object} tag        File ID3 tag object
 * @param  {String} field      Field to get
 * @param  {String} defaultVal Default value if field is empty
 */
function getField (tag, field, defaultVal) {
  if (defaultVal === undefined) {
    defaultVal = ''
  }

  let val
  if (tag[field] !== undefined) {
    val = tag[field]
  } else if (tag.v2[field] !== undefined) {
    val = tag.v2[field]
  } else if (tag.v1[field] !== undefined) {
    val = tag.v1[field]
  } else {
    return defaultVal
  }

  if (typeof val === 'string') {
    // let bytelike = unescape(encodeURIComponent(val))
    // val = decodeURIComponent(escape(bytelike))
    val = val.trim().replace(/[\000\x00\u0000]*/g, '')
    // let re = /(?![\x00-\x7F]|[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3})./g
    // val = val.replace(re, '')
  }

  return val
}

/**
 * Song wrapper, to access meta data
 * @param  {Object} tag  [description]
 * @param  {String} path Song path
 * @return {[type]}      [description]
 */
function songWrapper (tag, path) {
  //console.log(getField(tag, 'length'))
  //console.log(tag)
  return {
    title: tag.title !== null ? tag.title : '',
    album: getField(tag, 'album'),
    composer: getField(tag, 'composer'),
    artist: getField(tag, 'artist'),
    year: getField(tag, 'year'),
    genre: getField(tag, 'genre'),
    track: getField(tag, 'track', null), // try to convert to number
    path: path,
    //duration: getField(tag, 'TLEN')
  }
}

/**
 * Get ID3 tag from a file
 * @param  {String}   filePath File path
 * @param  {Function} callback
 */
function getTag (filePath, callback) {
  id3({ file: filePath, type: id3.OPEN_LOCAL }, function (err, tags) {
    if (!err) {
      callback(songWrapper(tags, filePath))
    }
  })
}

// files []
// let tags = function (files, cb) {
//   for (let file in files) {
//     if (files.hasOwnProperty(file)) {
//       let path = files[file]
//       id3({ file: path, type: id3.OPEN_LOCAL }, function (err, tags) {
//         if (!err) {
//           cb(songWrapper(tags, path))
//         }
//       })
//     }
//   }
// }

module.exports = getTag
