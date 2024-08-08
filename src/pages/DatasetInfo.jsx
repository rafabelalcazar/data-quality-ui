import React from 'react'

const DatasetInfo = ({ datasetInfo }) => {

    // Object.keys(datasetInfo).map((key) => (
    //     <p key={key}>{key}</p>
    // ))
    console.log(datasetInfo)
    return (


        <div className="w-max flex flex-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Análisis de dataset</h5>
                </a>
                <div className="grid grid-cols-6 md:grid-cols-2 gap-2">
                    {
                        datasetInfo && Object.keys(datasetInfo)?.map((item, index) => {
                            if (item === 'missing_values') return

                            // If is a float, round it to 2 decimals
                            let item_value = Number.isInteger(datasetInfo[item]) ? datasetInfo[item] : parseFloat(datasetInfo[item]).toFixed(2)

                            return (
                                <p className="text-slate-700 text-lg capitalize font-bold" key={index}>{item.replaceAll('_', ' ')}: <span className="text-sm text-white bg-primary-600 px-4 p-1.5 rounded-full font-medium ">{datasetInfo[item] && item_value}</span> </p>

                            )
                        })
                    }
                </div>

                {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
                {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a> */}
            </div>
        </div>

    )
}

export default DatasetInfo