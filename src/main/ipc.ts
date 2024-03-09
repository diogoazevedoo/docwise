import { ipcMain } from 'electron'

ipcMain.handle('fetch-documents', async () => {
  return [
    { id: '1', title: 'Front-end' },
    { id: '2', title: 'Back-end' },
    { id: '3', title: 'Database' },
    { id: '4', title: 'Deployment' },
  ]
})
