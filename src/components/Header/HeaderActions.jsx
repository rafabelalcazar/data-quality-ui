import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { BellIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Fragment } from 'react'

const HeaderActions = () => {
    return (
        <div className="ml-4 flex items-center md:ml-6">
            <button type="button" className="bg-white dark:bg-gray-800 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                <span className="sr-only">View notifications</span>
                {/* <!-- Heroicon name: outline/bell --> */}
                <BellIcon className="h-6 w-6" />
            </button>

            {/* <!-- Profile dropdown --> */}
            <Menu as="div" className="ml-3 relative">

                {/* <MenuButton className="max-w-xs bg-white dark:bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50">
                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <span className="hidden ml-3 text-gray-700 text-sm font-medium lg:block"><span className="sr-only">Open user menu for </span>Emilia Birch</span>
                    <ChevronDownIcon className="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block" aria-hidden="true" />

                </MenuButton> */}
                <MenuItems
                    transition
                    anchor="bottom end"
                    className="origin-top-right absolute right-0 mt-2 z-10 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                    <MenuItem>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabIndex="-1" id="user-menu-item-0">Settings</a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabIndex="-1" id="user-menu-item-0">Logout</a>
                    </MenuItem>
                </MenuItems>
                {/* <div>

                    <button type="button" className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                        <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        <span className="hidden ml-3 text-gray-700 text-sm font-medium lg:block"><span className="sr-only">Open user menu for </span>Emilia Birch</span>
                        <ChevronDownIcon className="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block" aria-hidden="true" />
                        
                    </button>
                </div> */}

                {/* <!--
                  Dropdown menu, show/hide based on menu state.

                  Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                  Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
            --> */}


                {/* <MenuItems transition className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <MenuItem>
                        {({ active }) => (
                            <a
                                href="#"
                                className={active ? 'bg-gray-100' : ''}
                            >
                                Your Profile
                            </a>
                        )}
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</a>
                    </MenuItem>
                </MenuItems> */}

                {/* <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none
                    
                    " role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                    //<!-- Active: "bg-gray-100", Not Active: "" -->
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Logout</a>
                </div> */}

            </Menu>

        </div>
    )
}

export default HeaderActions