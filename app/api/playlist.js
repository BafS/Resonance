'use strict'

let Sequelize = require('sequelize')
let config = require('./../../config')

let sequelize = new Sequelize(
  config.database.database, config.database.username, config.database.password, config.database.options)

// let Song = sequelize.import('Song', require('../database/models/Song'))

// TODO :
// Share those infos

let Folder = sequelize.import('./app/database/models/Folder')
let SongFile = sequelize.import('./app/database/models/SongFile')
let Genre = sequelize.import('./app/database/models/Genre')
let Artist = sequelize.import('./app/database/models/Artist')
let Album = sequelize.import('./app/database/models/Album')
let Playlist = sequelize.import('./app/database/models/Playlist')
let Song = sequelize.import('./app/database/models/Song')
// let PlaylistSong = sequelize.import('./app/database/models/PlaylistSong')

Song.belongsTo(SongFile, {
  foreignKey: {
    name: 'id',
    allowNull: true
  }
})


// Folder.belongsTo(SongFile, {
//   foreignKey: {
//     name: 'id',
//     allowNull: true
//   }
// })


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
Folder.hasMany(SongFile, {
  foreignKey: {
    name: 'id',
    allowNull: true
  }
})
SongFile.hasOne(Song, {
  foreignKey: {
    name: 'id',
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
})/*
SongGenre.hasOne(Song, {
  foreignKey: {
    name: 'id',
    allowNull: false
  }
})/*
SongGenre.hasOne(Genre, {
  foreignKey: {
    name: 'id',
    allowNull: false
  }
})*/
Genre.hasMany(Song, {
  foreignKey: {
    name: 'genreId',
    allowNull: false
  }
})
Song.belongsTo(Genre, {
  foreignKey: {
    name: 'id',
    allowNull: false
  }
})

// const _songs = [
//   {id: 1, title: 'Highwayl', band: 'acdc', path: 'my/super/path.mp3'},
// ]

export default {
  // From all playlists
  getAllSongs(cb) {
    Song.findAll({
      raw: true,

      include: [
        { model: Album },
        { model: Artist },
        { model: SongFile }
        // {
        //   model: Folder,
        //   where: { id: SongFile.folderId }
        // }
        // { model: Folder, where: { id: SongFile.folderId }}
        // { model: Picture, as: 'ProfilePicture' }, // load the profile picture. Notice that the spelling must be the exact same as the one in the association
      ]

    }).then(songs => {

      console.log(songs[0])
      // console.log(songs[0].SongFile.id)

      // Folder.findAll({
      //   raw: true,

      //   where: { id: songs[0].SongFile.folderId }
      // }).then(folder => {
      //   console.log(folder)
      // })

      cb(songs)
      return null
    })
  },

  //  From specific playlist
  //  @TODO
  getSongsFromPlaylist(name, cb) {
    Song.findAll({
      raw: true,

      // where: ['Playlist.title', '=', name]

      include: [
        { model: Album },
        { model: Artist },
        { model: SongFile }
        // { model: Picture, as: 'ProfilePicture' }, // load the profile picture. Notice that the spelling must be the exact same as the one in the association
      ]
    }).then(songs => {
      cb(songs)
      return null
    })
  },

  addSong(filePath) {
    console.log(filePath)
  },

  addSongs(files, cb) {
    console.log('__ api addSongs __')
    console.log(files)
    console.log(files[0].path) // example

    // ADD SONGS INTO PLAYLIST
    //
    // Pass the new songs to cb(songs)

    cb(files) // tmp
  }
}
