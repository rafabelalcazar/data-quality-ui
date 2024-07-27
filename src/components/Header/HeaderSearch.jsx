import { Bars3CenterLeftIcon, MagnifyingGlassCircleIcon, MagnifyingGlassIcon, ServerStackIcon } from '@heroicons/react/16/solid'
import React from 'react'
import HeaderActions from './HeaderActions'

const HeaderSearch = ({ setSidebarOpen, onSearch, searchText }) => {
    return (
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white dark:bg-primary-950 border-b border-gray-200 lg:border-none">
            <button onClick={() => setSidebarOpen(true)} type="button" className="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 lg:hidden">
                <span className="sr-only">Open sidebar</span>
                {/* <!-- Heroicon name: outline/menu-alt-1 --> */}
                <Bars3CenterLeftIcon className="h-6 w-6" />
            </button>
            {/* <!-- Search bar --> */}
            <div className="flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                <div className="flex-1 flex">
                    <form className="w-full flex md:ml-0" action="#" method="GET">
                        <label htmlFor="search-field" className="sr-only">Search</label>
                        <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none" aria-hidden="true">
                                {/* <!-- Heroicon name: solid/search --> */}
                                <MagnifyingGlassIcon className="h-5 w-5" />
                            </div>
                            <input id="search-field"
                                onChange={onSearch}
                                value={searchText}
                                name="search-field" className="block w-full h-full pl-8 pr-3 py-2 bg-white dark:bg-primary-950 border-transparent text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm" placeholder="Search transactions" type="search" />
                        </div>
                    </form>
                </div>
                <HeaderActions />
            </div>
        </div>
    )
}

export default HeaderSearch