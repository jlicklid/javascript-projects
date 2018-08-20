const {app, BrowserWindow} = require('electron')

function createWindow () {
    mainWindow = new BrowserWindow({width: 800, height: 600})
    
    mainWindow.loadFile('index.html')
    
    // win.webContents.openDevTools()
    
    mainWindow.on('closed', () => {
        mainWindow = null
    })
 }
 
 app.on('ready', createWindow)
 
 app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit()
    }
 })
 
 app.on('active', () => {
    if (win === null) {
         createWindow()
    }
})