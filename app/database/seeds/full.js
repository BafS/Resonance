'use strict'

let fs = require('fs')
let path = require('path')
let Sequelize = require('sequelize')
let config = require('./../../../config')
let tag = require('../../utils/tagReader')

let sequelize = new Sequelize
(  config.database.database, config.database.username, config.database.password, config.database.options)

let Folder = sequelize.import('../models/Folder')
let SongFile = sequelize.import('../models/SongFile')
let Genre = sequelize.import('../models/Genre')
let Artist = sequelize.import('../models/Artist')
let Album = sequelize.import('../models/Album')
let Playlist = sequelize.import('../models/Playlist')
let Song = sequelize.import('../models/Song')
let PlaylistSong = sequelize.import('../models/PlaylistSong')
//let SongGenre = sequelize.import('../models/SongGenre')
// Associations

// https://stackoverflow.com/questions/20290815/belongsto-vs-hasmany-in-sequelize-js
// https://stackoverflow.com/questions/30308217/sequelize-find-by-association-through-manually-defined-join-table

Song.belongsTo(Artist, {
  foreignKey: {
    name: 'id',
    allowNull: true
  }
})
Song.belongsTo(Album, {
  foreignKey: {
    name: 'id',
    allowNull: true
  }
})
Song.belongsTo(SongFile, {
  foreignKey: {
    name: 'id',
    allowNull: true
  }
})
Folder.hasMany(SongFile, {
  foreignKey: {
    name: 'id',
    allowNull: true
  }
})
SongFile.hasMany(Song, {
  foreignKey: {
    name: 'songFileId',
    allowNull: false
  }
})
SongFile.belongsTo(Folder, {
  foreignKey: {
    name: 'id',
    allowNull: false
  }
})
Artist.hasMany(Song, {
  foreignKey: {
    name: 'artistId',
    allowNull: false
  }
})
Album.hasMany(Song, {
  foreignKey: {
    name: 'albumId',
    allowNull: false
  }
})
Genre.hasMany(Song, {
  foreignKey: {
    name: 'genreId',
    allowNull: false
  }
})
Song.belongsTo(Genre, {
  foreignKey: {
    name: 'id',
    allowNull:false
  }
})
Playlist.hasMany(Song, {
  foreignKey: {
    name: 'playlistId',
    allowNull: true
  }
})
Song.belongsTo(Playlist, {
  foreignKey: {
    name: 'playlistId',
    allowNull: true
  }
})
var caca = Playlist.findOrCreate({
    where: {
      playlistTitle : 'caca'
    }
  })
var song1 = Song.findAll({where: {id: 1}}).then(function(song) {console.log(song)})

/**
 * Add file to database
 * @param {Object}   meta     File meta infos
 * @param {Function} callback Callback when inserted
 */
function addFileToDB(meta, callback) {
  // meta = path.normalize(meta)
  var pathInfo = path.parse(meta.path)
  // console.log(pathInfo)

  var songInfo = {}

  sequelize.transaction(function(t) {
    return Folder.findOrCreate({
      where: {
        folderPath: pathInfo.dir
      },
      defaults: {
        folderPath: pathInfo.dir
      },
      transaction: t
    })
    .spread(function(folder) {
      return SongFile.findOrCreate({
        where: {
          fileName: pathInfo.base,
          folderId: folder.id
        },
        defaults: {
          fileName: pathInfo.base,
          fileHash: '__HASH__', // TODO
          //folderId: folder.id
        },
        transaction: t
      })
    })
    .spread(function(songFile) {
      songInfo.fileId = songFile.dataValues.id

      return Genre.findOrCreate({
        where: {
          genreName: meta.genre
        },
        defaults: {
          genreName: meta.genre
        },
        transaction: t
      })
    })
    .spread(function(genre) {
      songInfo.genreId = genre.dataValues.id

      return Artist.findOrCreate({
        where: {
          artistName: meta.artist
        },
        defaults: {
          artistName: meta.artist
        },
        transaction: t
      })
    })
    .spread(function(artist) {
      songInfo.artistId = artist.dataValues.id

      return Album.findOrCreate({
        where: {
          albumTitle: meta.album,
          albumDate: new Date(meta.year)
        },
        defaults: {
          albumTitle: meta.album,
          albumDate: new Date(meta.year)
          // albumThumb: meta.thumb // TODO
        },
        transaction: t
      })
    })
    .spread(function(album) {
      songInfo.albumId = album.dataValues.id

      // console.log(meta.title)
      // songInfo.songTitle = meta.title
      songInfo.songTitle = meta.title // .replace(/[\'\"]+/g, ' ')
      songInfo.songTrackNumber = meta.track
      songInfo.songYear = new Date(meta.year)
      songInfo.songDuration = meta.TLEN // TODO
      songInfo.songBpm = meta.bpm // TODO

       //console.log(songInfo)

      return Song.findOrCreate({
        where: {
          songTitle: meta.title,
          //artistId: Song.getArtist()
          songFileId: songInfo.fileId
          //artistId: meta.artist
        },
        defaults: songInfo,
        transaction: t
      })
    })
  }).then(function(result) {
    callback(result)
    // Transaction has been committed
    // result is whatever the result of the promise chain returned to the transaction callback
  }).catch(function(err) {
    console.log('---')
    console.error(err)
    console.log('---')
  })
}

// Add files by hand
// var mfiles = [
//   './music2/Deep Purple - 12.It\'ll Be Me (Bonus Track) .Now What! 2013.mp3',
//   './music2/11 - Wrecking The Sphere.mp3'
// ]

var folder = './music2/'
var mfiles = fs.readdirSync(folder)
mfiles = mfiles.map(el => {
  return folder + '/' + el
  // return path.resolve(folder, el)
})

// console.log(mfiles)

var i = 0
function run(filePath) {
  tag(filePath, (meta) => {
    addFileToDB(meta, () => {
      if (mfiles[++i] !== undefined) {
        run(mfiles[i])
      }
    })
  })
}

run(mfiles[i])

// We sync with the database
sequelize.sync(
  // {force: true}
)
