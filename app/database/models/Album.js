/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Album', {
    albumTitle: {
      type: DataTypes.STRING,
      allowNull: true
    },
    albumDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    albumThumb: {
      type: DataTypes.STRING,
      allowNull: true
    }
  })
}
