import React from 'react'
import SelectCustom from '../components/Select/SelectCustom'

const DatasetAttributes = () => {
  return (
    <div>
        <SelectCustom selected={selected} setSelected={setSelected} data={dataTask} label='Task' />
    </div>
  )
}

export default DatasetAttributes