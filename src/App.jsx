import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Dropzone from './components/Dropzone/Dropzone'
import HeaderSearch from './components/Header/HeaderSearch'

const App = () => {
  return (
    <div className="min-h-full dark:bg-primary-950">
      <Sidebar />
      <div className="lg:pl-64 flex flex-col flex-1 h-full min-h-screen">
        <HeaderSearch />
        <div className="p-4">
          <h1 className="dark:text-white dark:p-4 dark:bg-gray-700 rounded-lg font-bold text-lg mb-4 ">FDQ-KD MultiModal</h1>
          <p className="py-4">Este es servicio permite analizar la calidad de un dataset basado en el Framework FDQ KD</p>
          <h2 className="dark:text-white dark:p-4 dark:bg-gray-700 rounded-lg font-bold text-lg mb-4 ">1. Carga tu dataset</h2>
          <Dropzone />
          <hr className="my-4" />
          <h2 className="dark:text-white dark:p-4 dark:bg-gray-700 rounded-lg font-bold text-lg mb-4 ">2. Configura la tarea</h2>

        </div>

      </div>
    </div>
  )
}

export default App