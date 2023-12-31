const { contextBridge, ipcRenderer} = require("electron");
ipcRenderer.on('update-available', (e,arg)=>
console.log(arg)
)
ipcRenderer.on('downloadUpdate', (e,arg)=>
console.log(arg)
)
ipcRenderer.on('update-downloaded', (e,arg)=>
console.log(arg)
)
// onClick={() => window.api.save(state)} a implementer
contextBridge.exposeInMainWorld("api", {
  minimize: () => {
      
      ipcRenderer.send("minimize");
    },
  maximize: () => {
      
      ipcRenderer.send("maximize");
    },
    close: () => {
  
      ipcRenderer.send("close");
    },
    save: (state) => {
      console.log(state);
      ipcRenderer.send("save", state);
    },
    print: (content) => {
      console.log(content);
      ipcRenderer.send("print", content);
    },
  });

  ipcRenderer.on('message', function(event, text) {
    // var container = document.getElementById('messages');
    // var message = document.createElement('div');
    // message.innerHTML = text;
    // container.appendChild(message);
    console.log('====================================');
    console.log("update :>",text);
    console.log('====================================');
  })

  ipcRenderer.on("update-available", (e, arg) => console.log(arg));
  ipcRenderer.on("downloadUpdate", (e, arg) => console.log(arg));
  ipcRenderer.on("update-downloaded", (e, arg) => console.log(arg));