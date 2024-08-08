import React from 'react'

const DatasetInfo = () => {
  return (
    <div className="p-4 sm:px-6 lg:lg:max-w-6xl lg:mx-auto lg:px-8 ">
        <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">Dataset Information</h1>
            <button className="flex items-center bg-primary-500 text-white px-4 py-2 rounded-md">Edit</button>
        </div>
        <div className="mt-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <p className="mt-1 text-sm text-gray-900">Iris Dataset</p>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <p className="mt-1 text-sm text-gray-900">This is a dataset of flowers</p>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Columns</label>
                <p className="mt-1 text-sm text-gray-900">150</p>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Rows</label>
                <p className="mt-1 text-sm text-gray-900">5</p>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Created At</label>
                <p className="mt-1 text-sm text-gray-900">2021-09-01</p>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Updated At</label>
                <p className="mt-1 text-sm text-gray-900">2021-09-01</p>
            </div>
            </div>
        </div>
        <div>
            {/* Show data by feature */}
            
        </div>
    </div>
  )
}

export default DatasetInfo