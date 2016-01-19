/* eslint strict: 0 */
'use strict'

const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

// Report crashes to our server.
electron.crashReporter.start({
  productName: 'Resonance',
  companyName: 'Resonance',
  submitURL: '',
  autoSubmit: false
})

let mainWindow = null

// if (process.env.NODE_ENV === 'development-hot') {
  process.env.NODE_ENV = 'development'
  process.env.HOT_ENV = true
// }

if (process.env.NODE_ENV === 'development') {
  require('electron-debug')()
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('ready', () => {
  mainWindow = new BrowserWindow({ width: 800, height: 600 })

  // if (process.env.HOT_ENV) {
  //   console.log('HOT MODE')
  // } else {
  // }

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  if (process.env.NODE_ENV === 'development') {
    console.log('DEV MODE') // //
    mainWindow.loadURL(`file://${__dirname}/app/index-dev.html`)
    mainWindow.webContents.openDevTools()
  } else {
    mainWindow.loadURL(`file://${__dirname}/app/index.html`)
  }
})
