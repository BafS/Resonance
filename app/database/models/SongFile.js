/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('SongFile', {
    fileName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fileHash: {
      type: DataTypes.STRING,
      allowNull: true
    },
    folderId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })
}
