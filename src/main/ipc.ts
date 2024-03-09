import { ipcMain } from 'electron'
import { IPC } from '../shared/constants/ipc'
import { FetchAllDocumentsResponse } from '../shared/types/ipc'

ipcMain.handle(
  IPC.DOCUMENTS.FETCH_ALL,
  async (): Promise<FetchAllDocumentsResponse> => {
    return {
      data: [
        { id: '1', title: 'Front-end', content: '' },
        { id: '2', title: 'Back-end', content: '' },
        { id: '3', title: 'Database', content: '' },
        { id: '4', title: 'Deployment', content: '' },
      ],
    }
  },
)
