const {app, BrowserWindow, webContents} = require('electron')
const path = require('path')
const url = require('url')

let win


function createWindow () {    
  // win = new BrowserWindow({webPreferences: { experimentalFeatures: true, webSecurity: false } })
  win = new BrowserWindow({webPreferences: { experimentalFeatures: true, webSecurity: false }, frame: false, titleBarStyle: 'hidden'})

  win.webContents.on('did-finish-load', (event) => {
    win.maximize()
    win.setFullScreen(true)
    win.show()
  })

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', function () {
  createWindow()
})

app.on('window-all-closed', () => {

  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {

  if (win === null) {
    createWindow()
  }
})
