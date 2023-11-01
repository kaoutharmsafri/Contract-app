import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { DAppProvider } from '@usedapp/core'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DAppProvider config={{}}>
      <MantineProvider >

        <App />
      </MantineProvider>
    </DAppProvider>
  </React.StrictMode>
)