'use strict'

// let Sequelize = require('sequelize')

module.exports = {
  database: {
    username: 'root',
    password: '',
    database: 'reso',
    options: {
      host: '127.0.0.1',
      dialect: 'sqlite',
      // disable logging; default: console.log
      logging: false,
      // isolationLevel: Sequelize.Transaction.SERIALIZABLE,
      // isolationLevel: Sequelize.Transaction.ISOLATION_LEVELS.SERIALIZABLE,
      autocommit: false,
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      },
      storage: './database.sqlite'
    }
  }
}
