import { CloudArrowUpIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useRef } from 'react'

const Dropzone = ({ onDrop, onChange, files = [], dataMessage }) => {
    return (
        <div className="flex items-center justify-center w-full hover:bg-neutral-100/20" onDrop={(e) => onDrop(e)} onDragOver={(e) => e.preventDefault()} onDragEnter={(e) => e.preventDefault()} onDragLeave={(e) => e.preventDefault()}
        >
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    {
                        files.length > 0 && files.map((file, index) => (<p key={index} >🗃️ {file.name} <span className='text-gray-500'>{file.size/1024} KB</span> </p>))
                    }
                    {
                        files.length === 0 && <>
                            <CloudArrowUpIcon className="w-10 h-10 mb-4 text-gray-500 dark:text-gray-400" />
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{dataMessage}</p>
                        </>
                    }

                </div>
                <input id="dropzone-file" type="file" className="hidden" onChange={(e) => onChange(e)} />
            </label>
        </div>

    )
}

export default Dropzone