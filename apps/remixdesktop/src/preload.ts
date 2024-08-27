
import { Message } from '@remixproject/plugin-utils'
import { contextBridge, ipcRenderer } from 'electron'

console.log('preload.ts', new Date().toLocaleTimeString())

/* preload script needs statically defined API for each plugin */

const exposedPLugins = ['fs', 'git', 'xterm', 'isogit', 'electronconfig', 'electronTemplates', 'ripgrep', 'compilerloader', 'appUpdater', 'remixAID', 'slither']

let webContentsId: number | undefined

ipcRenderer.invoke('getWebContentsID').then((id: number) => {
  webContentsId = id
})

contextBridge.exposeInMainWorld('electronAPI', {
  isPackaged: () => ipcRenderer.invoke('config:isPackaged'),
  isE2E: () => ipcRenderer.invoke('config:isE2E'),
  canTrackMatomo: () => ipcRenderer.invoke('config:canTrackMatomo'),
  trackEvent: (args: any[]) => ipcRenderer.invoke('matomo:trackEvent', args),

  activatePlugin: (name: string) => {
    return ipcRenderer.invoke('manager:activatePlugin', name)
  },

  plugins: exposedPLugins.map(name => {
    return {
      name,
      on: (cb:any) => ipcRenderer.on(`${name}:send`, cb),
      send: (message: Partial<Message>) => {
        ipcRenderer.send(`${name}:on:${webContentsId}`, message)
      }
    }
  })
})