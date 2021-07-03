import { app, BrowserWindow } from 'electron';
import * as path from 'path';

let win: BrowserWindow = null;

const isDevelopment = process.env.NODE_ENV === 'development';

function createWindow(): BrowserWindow {
  win = new BrowserWindow({
    center: true,
    width: 1000,
    height: 640,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      allowRunningInsecureContent: isDevelopment,
      contextIsolation: false,
      enableRemoteModule : false
    },
  });

  const winURL = isDevelopment
    ? 'http://localhost:4200'
    : `file://${path.join(__dirname, '/../renderer/index.html')}`;
  if (isDevelopment) {win.webContents.openDevTools();}

  win.loadURL(winURL).then();

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });

  return win;
}

app.on('ready', () => setTimeout(createWindow, 400));

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') { app.quit(); }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
