const electron = require("electron");
const url = require("url");
const path = require("path");


const {app,BrowserWindow,Menu,ipcMain} = electron;
let mainWindow;

// 监听app
app.on("ready",function(){
    mainWindow = new BrowserWindow({
        width:360,
        height:640,
        frame:false,
        center: true,
        resizable:false,
        minWidth:220,
        minHeight:220});
    // 加载html
    mainWindow.loadURL(url.format({
        pathname : path.join(__dirname,"mainWindow.html"),
        protocol:"file:",
        slashes:true
    }));
    
    // 退出
    mainWindow.on("closed",function(){
        app.quit();
    });

});