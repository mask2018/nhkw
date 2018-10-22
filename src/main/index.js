'use strict'

import { app, BrowserWindow } from 'electron'

const ipc = require('electron').ipcMain

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 883,
    useContentSize: true,
    width: 1300,
    webPreferences: {
      webSecurity: false,
      nativeWindowOpen: true
    },
    frame: false
  })
  mainWindow.webContents.on('new-window', (event, url, frameName, disposition, options, additionalFeatures) => {
    if (frameName === 'modal') {
      event.preventDefault()
      Object.assign(options, {
        modal: true,
        parent: mainWindow,
        width: 100,
        height: 100
      })
      event.newGuest = new BrowserWindow(options)
    }
  })

  mainWindow.on('maximize', (e) => {
    mainWindow.webContents.send('resizeWin', 'max')
  })
  mainWindow.on('unmaximize', (e) => {
    mainWindow.webContents.send('resizeWin', 'unmax')
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */

ipc.on('newClose', function (event, arg) {
  if (arg === 'close') {
    mainWindow.close()
  }
  if (arg === 'big') {
    mainWindow.maximize()
  }
  if (arg === 'nobig') {
    mainWindow.unmaximize()
  }
  if (arg === 'small') {
    mainWindow.minimize()
  }
})
