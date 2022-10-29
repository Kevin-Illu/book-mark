const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  trafficLights: (action) => ipcRenderer.send('btn-event', action),
})
