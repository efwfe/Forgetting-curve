const electron = require("electron");
const url = require("url");
const path = require("path");
const DataStore = require("./database");
const mainX = 720;
const mainH = 640;
const {app,BrowserWindow,ipcMain} = electron;
const store = new DataStore({name:"dayly Main"});

let mainWindow;
let addWindow;


// 监听app
app.on("ready",function(){
    mainWindow = new BrowserWindow({
        width:mainX,
        height:mainH,
        frame:false,
        center: true,
        // resizable:false,
        minWidth:220,
        minHeight:220});


    // 加载html
    mainWindow.loadURL(url.format({
        pathname : path.join(__dirname,"mainWindow.html"),
        protocol:"file:",
        slashes:true
    }));

    // mainWindow.webContents.openDevTools(); // 开发者工具
    mainWindow.on("closed",function(){ app.quit(); }); // 主窗口退出
});


// 退出应用 app:quit
ipcMain.on("app:quit",function(e){mainWindow.close();});

// 添加弹出窗口
ipcMain.on("app:addwindow",function(e)
    {addWindow = createAddWindow();});

// 退出弹窗
ipcMain.on("app:quitAdd",function(e)
    {addWindow.close();});

// 数据获取保存
ipcMain.on("item:add",function(e,item){
   store.addDatas(item);
   console.log(store.data);
})

function createAddWindow(){
    win = new BrowserWindow({width: mainX, height: mainH,frame: false,});
    win.loadURL(url.format({
        pathname : path.join(__dirname,"addWindow.html"),
        protocol:"file:",
        slashes:true
    }));
    win.webContents.openDevTools();
    // 当 window 被关闭，这个事件会被触发。
    win.on('closed', () => {
        win = null});
    return win;
    }




