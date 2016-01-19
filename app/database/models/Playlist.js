/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Playlist', {
    playlistTitle: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
}
