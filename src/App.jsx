import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Dropzone from './components/Dropzone/Dropzone'
import HeaderSearch from './components/Header/HeaderSearch'
import SelectCustom from './components/Select/SelectCustom'
import { useState } from 'react'
import { Button } from '@headlessui/react'
import uploadDataset from './usecases/uploadDataset'
import { datasetService } from './infrastructure/services/datasetServices'
import DatasetInfo from './pages/DatasetInfo'

const dataTask = [
  { id: 1, name: 'Classification' },
  { id: 2, name: 'Regression' },
]

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
  { id: 6, name: 'Katelyn Rohan' },
  { id: 7, name: 'Katelyn Rohan' },
  { id: 8, name: 'Katelyn Rohan' },
]


const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Analysis', href: '#', current: false },
  { name: 'Plots', href: '#', current: false },
  { name: 'CBR', href: '#', current: false },
]
const App = () => {

  const [selected, setSelected] = useState(dataTask[0])
  const [dataset, setDataset] = useState([])
  const [selectedPeople, setSelectedPeople] = useState([people[0], people[1]])
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [datasetResponse, setDatasetResponse] = useState({})


  const handleFile = (e) => {
    e.preventDefault()
    if (e.target.files.length === 0) {
      return
    }
    setDataset([e.target.files[0]])
  }

  const handleFileDrop = (e) => {
    e.preventDefault()
    setDataset([e.dataTransfer.files[0]])
  }

  const handleUploadDataset = async () => {
    console.log('Uploading dataset...')
    if (dataset.length === 0) {
      console.log('No dataset selected')
      return
    }
    try {
      const result = await uploadDataset(datasetService, dataset[0])
      console.log(result)
      setDatasetResponse(result)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="min-h-full dark:bg-gray-900">
      <Sidebar navigation={navigation} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="lg:pl-64 flex flex-col flex-1 h-full min-h-screen">
        <HeaderSearch setSidebarOpen={setSidebarOpen} />
        {/* <DatasetInfo /> */}
        <div className="p-4 sm:px-6 lg:lg:max-w-6xl lg:mx-auto lg:px-8 ">
          <h1 className="dark:text-white dark:p-4 dark:bg-gray-700 rounded-lg font-bold text-lg mb-4 ">FDQ-KD MultiModal</h1>
          <p className="p-4 my-4 bg-primary-700 text-white text-lg rounded-lg">Este servicio permite analizar la calidad de un dataset basado en el Framework FDQ-KDT.</p>
          <p className="py-4 my-4 text-lg rounded-lg">Sigue los siguientes pasos enumerados.</p>
          <h2 className="dark:text-white dark:p-4 dark:bg-gray-700 rounded-lg font-bold text-lg mb-4 ">1. Carga tu dataset</h2>
          <Dropzone onDrop={handleFileDrop} onChange={handleFile} files={dataset} dataMessage='Only CSV is allowed (<100MB)' />
          <hr className="my-4" />
          <h2 className="dark:text-white dark:p-4 dark:bg-gray-700 rounded-lg font-bold text-lg mb-4 ">2. Configura la tarea</h2>
          <div className='box-border p-1 w-full'>
            <SelectCustom label='Knowledge Discovery Task' selected={selected} setSelected={setSelected} data={dataTask} />
          </div>
          <hr className='my-4' />
          <Button onClick={handleUploadDataset} className="inline-flex animate-bounce shadow-lg w-full justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">Iniciar</Button>
          <section className='py-8'>
            <h3 className='dark:text-white dark:p-4 dark:bg-gray-700 rounded-lg font-bold text-lg mb-4'>3. Resultado</h3>
            <DatasetInfo datasetInfo={datasetResponse['dataset_info']} />
          </section>
        </div>
      </div>
    </div>
  )
}

export default App