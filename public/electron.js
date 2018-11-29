const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

const { autoUpdater } = require("electron-updater");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    titleBarStyle: "hiddenInset"
  });
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  ); // load the react app
  mainWindow.on("closed", () => (mainWindow = null));
}

// when the app is loaded create a BrowserWindow and check for updates
app.on("ready", function() {
  createWindow();
  if (!isDev) autoUpdater.checkForUpdates();
});

// on MacOS leave process running also with no windows
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// if there are no windows create one
app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// when the update has been downloaded and is ready to be installed, notify the BrowserWindow
autoUpdater.on("update-downloaded", info => {
  mainWindow.webContents.send("updateReady");
});

// when receiving a quitAndInstall signal, quit and install the new version ;)
ipcMain.on("quitAndInstall", (event, arg) => {
  autoUpdater.quitAndInstall();
});

// if (isDev) {

// import installExtension, {
//     REACT_DEVELOPER_TOOLS
// } from "electron-devtools-installer";

// installExtension(REACT_DEVELOPER_TOOLS)
//     .then(name => {
//       console.log(`Added Extension:  ${name}`);
//     })
//     .catch(err => {
//       console.log("An error occurred: ", err);
//     });
// }
