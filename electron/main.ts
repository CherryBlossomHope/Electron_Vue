import { app, BrowserWindow } from 'electron'
import path from 'path'
//app 控制应用程序的事件生命周期。
//BrowserWindow 创建并控制浏览器窗口。

let win: BrowserWindow | null;
//定义全局变量获取 窗口实例

const createWindow = () => {
    win = new BrowserWindow({
        //
        webPreferences: {
            devTools: true,
            contextIsolation: false,
            nodeIntegration: true
            //允许html页面上的javascipt代码访问nodejs 环境api代码的能力（与node集成的意思）
        }
    })
    // console.log(__dirname);
    // if (process.env.NODE_ENV != "dev") {
    //     win.loadFile(path.join(__dirname, "../index.html"));
    // } else {
    //     win.loadURL(process.env.VITE_DEV_SERVER_URL as string)
    // }
    win.loadFile(path.join(__dirname, "../dist/index.html"));
}
//在Electron完成初始化时被触发
app.whenReady().then(createWindow)