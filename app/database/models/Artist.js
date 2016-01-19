/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Artist', {
    artistName: {
      type: DataTypes.STRING,
      allowNull: true
    }
  })
}
