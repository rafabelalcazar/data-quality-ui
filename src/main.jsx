import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DatasetProvider from './context/DatasetProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DatasetProvider>
      <App />
    </DatasetProvider>
  </React.StrictMode>,
)
