import React from 'react'
import { DatasetContext } from './DatasetContext'
import { useState } from 'react'

const DatasetProvider = ({ children }) => {

    const [datasetInfo, setDatasetInfo] = useState({})

    const clearDatasetInfo = () => {
        setDatasetInfo({})
    }

    return (
        <DatasetContext.Provider value={{ datasetInfo, clearDatasetInfo, setDatasetInfo }}>
            {children}
        </DatasetContext.Provider>
    )
}

export default DatasetProvider