const { app, BrowserWindow } = require("electron");
const path = require("path");

const isDev = !app.isPackaged;

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800
    });

    if (isDev) {
        win.loadURL("http://localhost:3003/")
    } else {
        win.loadFile(path.join(__dirname, "dist", "index.html"));
    }
    
    win.webContents.on("before-input-event", (event, input) => {
        if (input.key === "F12" && input.type === "keyDown") {
            win.webContents.toggleDevTools();
            event.preventDefault();
        }
    });

}

app.whenReady().then(createWindow);

app.on("will-quit", () => {
    globalShortcut.unregisterAll();
});