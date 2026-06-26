const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("suhailDesktop", {
    isElectron: true
});

console.log("✅ preload.js loaded");