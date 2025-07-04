'use strict'

import { app, protocol, BrowserWindow, session } from 'electron'
// import electronReload from 'electron-reload'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
const { contextBridge, ipcMain, ipcRenderer } = require('electron')

// const electronReload = require('electron-reload');
const isDevelopment = process.env.NODE_ENV !== 'production'
// Scheme must be registered before the app is ready
let win
const path = require('path')
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

// contextBridge.exposeInIsolatedWorld('electron',{
//   ipcRenderer,
//   ipcMain,
// })
async function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1050,
    height: 650,
    minWidth: 987,
    minHeight: 648,
    icon:path.join(__dirname,"../public/img/weixinIcon.png"),
    frame: false,
    webPreferences: {

      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      // nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      // contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: true,
      // nodeIntegration: true,
      // contextIsolation:false,
      preload: path.join(__dirname, 'preload.js'),
      sandbox: false,
     
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }
  // 引入electron-reload
  // electronReload(__dirname);
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment) {
    //&& !process.env.IS_TEST
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  createWindow()

})
ipcMain.on('window-close', function () {
  win.close();
}),
  // ipcMain.on('window-max', function () {
  //   win.maximize();
  // }),
  ipcMain.on('window-min', function () {
    win.minimize();
  }),
  ipcMain.on('window-change', function () {
    if (win.isMaximized()) {
      win.restore()
    } else {
      win.maximize()
    }
  }),
  ipcMain.on('window-init', function () {
    win.setSize(1051, 651)
    win.setSize(1050, 650)
    //刷新一次高度和宽度，让自适应方法跑起来
  })

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
