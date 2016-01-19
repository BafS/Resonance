'use strict'

let id3 = require('id3js')
let walk = require('fs-walk')

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
    val = val.replace(/\000*/g, '')
  }

  return val
}

function songWrapper (tag, path) {
  // console.log(tag)
  return {
    title: tag.title !== null ? tag.title : '',
    album: getField(tag, 'album'),
    artist: getField(tag, 'artist'),
    year: getField(tag, 'year'),
    genre: getField(tag, 'genre'),
    track: getField(tag, 'track', -1),
    path: path,
    duration: getField(tag, 'TLEN')
  }
}

// var walker  = walk.walk('./music', { followLinks: false });

let fetch = function (rootPath, cb) {

  let files = []
  // let songsTags = [];

  walk.walkSync(rootPath, function (basedir, filename, stat, next) {
    files.push(basedir + '/' + filename)
  })

  for (let file in files) {
    if (files.hasOwnProperty(file)) {
      let path = files[file]
      id3({ file: path, type: id3.OPEN_LOCAL }, function (err, tags) {
        if (!err) {
          cb(songWrapper(tags, path))
        }
        // console.log(tags.title);
        // console.log("\n\n\n");
        // songsTags.push(tags);

        // songs.push(songWrapper(tags));
      })
    }
  }

    // files.forEach(function(path) {
    //     id3({ file: path, type: id3.OPEN_LOCAL }, function(err, tags) {
    //         // console.log(tags.title);
    //         // console.log("\n\n\n");
    //         songsTags.push(tags);
    //         // songs.push(songWrapper(tags));
    //     });
    // });
    // console.log(songsTags);
    // cb(songsTags);
}

    // walk.walkSync('./music', function(basedir, filename, stat, next) {
        // console.log(stat);
    // });

module.exports = fetch
