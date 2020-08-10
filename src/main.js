const { app, BrowserWindow } = require('electron')
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 400,
        height: 700,

        webPreferences: {
            nodeIntegration: false,
            preload: path.join(__dirname, 'preload.js')
        },
        title: 'SpotiLy'
    })
    win.setIcon('../img/logo.ico');
    win.removeMenu();
    win.loadFile('main.html')
}

app.whenReady().then(createWindow)