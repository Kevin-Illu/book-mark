'use strict';
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    minWidth: 800,
    minHeight: 600,
    frame: false,
    roundedCorners: true,
    webPreferences: {
      preload: path.join(__dirname, '/preload.js')
    }
  })

  ipcMain.on('btn-event', (e, action) => {
    const actions = {
      maximize: () => win.maximize(),
      minimize: () => win.minimize(),
      close: () => win.close(),
      rezise: () => win.unmaximize(),
    }

    actions[action]();
  })

  win.loadFile('../index.html')
  win.webContents.openDevTools({ mode: 'detach' })
}

app.whenReady().then(() => {
  createWindow();
  app.on('active', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  })
})

app.on('window-all-closed', () => {
  if (process.paltform !== 'darwin') {
    app.quit();
  }
})
