import React from 'react'
import SelectCustom from '../components/Select/SelectCustom'
import { useContext } from 'react'
import { DatasetContext } from '../context/DatasetContext'
import { useState } from 'react'

const DatasetAttributes = () => {
  const { datasetInfo } = useContext(DatasetContext)
  const [selected, setSelected] = useState([])

  const columns_stats = datasetInfo?.columns_stats
  console.log(columns_stats)
  const stats = columns_stats ? Object?.keys(columns_stats)?.map((key, index) => ({ id: index, name: key })) : []


  // console.log(columns_stats)
  return (
    <div className="flex flex-1 my-4 flex-col">
      <h2 className='dark:text-white dark:p-4 dark:bg-gray-700 rounded-lg font-bold text-lg mb-4'>4. Attributes Statistics</h2>
      {
        stats && stats.length > 0 &&
        <SelectCustom selected={selected} setSelected={setSelected} data={stats} label='Attributes' multiple />
      }
    </div>
  )
}

export default DatasetAttributes