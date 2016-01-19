/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Song', {
    songTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    songTrackNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    songYear: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    songDuration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    songBpm: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    songFileId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }/*
     artistId: {
       type: DataTypes.INTEGER,
       allowNull: false
     }*/
    // albumId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },
    // genreId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // }
  /*classMethods: {associate: function(models) {
            Song.hasOne(models.Artist, {
                foreignKey: "id",
                through: 'Artist'
                })}
  }*/
})}
