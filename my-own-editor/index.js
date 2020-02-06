console.log("oe");

const {app, BrowserWindow} = require('electron');

app.on('ready',() => {
  let mainWindow = new BrowserWindow(
    {
        webPreferences: {
            nodeIntegration: true,
            nodeIntegrationInWorker: true
        }
    }
  );

  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.webContents.on('will-navigate', (e,url) =>{
    e.preventDefaults();
    mainWindow.webContents.send('open-file',url);
    console.log('que pasa');
  })
});
