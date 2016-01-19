/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Folder', {
    folderPath: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true
    }
  })
}
