import { Dialog, DialogBackdrop, Transition, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/16/solid'
import React from 'react'
import { Fragment } from 'react'
import { RenderNavigation } from './RenderNavigation'

const Sidebar = ({ sidebarOpen=false, setSidebarOpen=()=>{}, navigation=[], secondaryNavigation=[] }) => {

    return (
        <div className="min-h-full">
            <Transition show={sidebarOpen} as={Fragment} >
                <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setSidebarOpen}>
                    <TransitionChild
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <DialogBackdrop className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
                    </TransitionChild>
                    <TransitionChild
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-primary-700 dark:bg-gray-950 transition data-[closed]:opacity-0">
                            <div className="flex-shrink-0 flex items-center px-4">
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg"
                                    alt="Easywire logo"
                                />
                                <div className="absolute top-0 right-0 -mr-12 pt-2">
                                    <button
                                        type="button"
                                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        <span className="sr-only">Close sidebar</span>
                                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                            <nav className="mt-5 flex-shrink-0 h-full divide-y divide-primary-800 overflow-y-auto"
                                aria-label="Sidebar"
                            >
                                <div className="px-2 space-y-1">
                                    <RenderNavigation navigation={navigation} />
                                </div>
                                <div className="mt-6 pt-6">
                                    <div className="px-2 space-y-1">
                                        <RenderNavigation navigation={secondaryNavigation} />
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </TransitionChild>
                    <div className="flex-shrink-0 w-14" aria-hidden="true">
                        {/* Dummy element to force sidebar to shrink to fit close icon */}
                    </div>
                </Dialog>
            </Transition>

            {/* Static sidebar for desktop */}
            <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex flex-col flex-grow bg-primary-700 dark:bg-gray-900 pt-5 pb-4 overflow-y-auto shadow-2xl">
                    <div className="flex items-center flex-shrink-0 px-4">
                        <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg"
                            alt="Easywire logo"
                        />
                    </div>
                    <nav className="mt-5 flex-1 flex flex-col divide-y divide-primary-800 overflow-y-auto" aria-label="Sidebar">
                        <div className="px-2 space-y-1">
                            <RenderNavigation navigation={navigation} />
                        </div>
                        <div className="mt-6 pt-6">
                            <div className="px-2 space-y-1">
                                <RenderNavigation navigation={secondaryNavigation} />
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Sidebar