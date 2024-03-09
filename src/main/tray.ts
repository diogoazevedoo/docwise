import { Menu, Tray, app, nativeImage } from 'electron'
import path from 'node:path'

app.whenReady().then(() => {
  const icon = nativeImage.createFromPath(
    path.resolve(__dirname, '../../build/docwiseTemplate.png'),
  )

  const tray = new Tray(icon)

  const menu = Menu.buildFromTemplate([
    { label: 'DocWise', enabled: false },
    { type: 'separator' },
  ])

  tray.setContextMenu(menu)
})
