'use strict'

module.exports = function (sequelize, DataTypes) {
  return  sequelize.define('PlaylistSong', {
    Song_rowId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Playlist_rowId: {
      type:DataTypes.INTEGER,
      allowNull: true
    }
});
}
