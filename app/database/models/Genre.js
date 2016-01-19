/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Genre', {
    genreName: {
      type: DataTypes.STRING,
      allowNull: true
    }
  })
}
