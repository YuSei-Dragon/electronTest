const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('myApi',{
        close:(args)=>ipcRenderer.send('window-close',args),
        min:(args)=>ipcRenderer.send('window-min',args),
        change:(args)=>{
            ipcRenderer.send('window-change',args)
        },
    })