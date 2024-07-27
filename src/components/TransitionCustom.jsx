import React from 'react'
import { Button, Transition } from '@headlessui/react'
import { ArrowPathIcon } from '@heroicons/react/16/solid'
import clsx from 'clsx'
import { useState } from 'react'
import { Fragment } from 'react'

const TransitionCustom = () => {

    let [isShowing, setIsShowing] = useState(true)
    return (
        <div className="mt-8 flex flex-col items-center bg-gray-700 p-4">
            <div className="size-[6.25rem]">
                <Transition show={isShowing} as={Fragment} >
                    <div
                        className={clsx(
                            'size-full rounded-xl bg-white shadow-lg transition duration-1000',
                            'data-[closed]:scale-150 data-[closed]:rotate-[-120deg] data-[closed]:opacity-0',
                            // 'data-[leave]:duration-1000 data-[leave]:ease-in-out',
                            'data-[leave]:data-[closed]:scale-95 data-[leave]:data-[closed]:rotate-[0deg]'
                        )}
                    />
                </Transition>
            </div>

            <Button
                onClick={() => {
                    setIsShowing((prev) => !prev)
                    // setTimeout(() => setIsShowing(true), 1000)
                }}
                className="mt-10 flex items-center gap-2 rounded-full bg-white/10 py-1 px-3 text-sm/6 font-semibold text-white transition data-[hover]:scale-105 data-[hover]:bg-white/15"
            >
                <ArrowPathIcon className="size-4 fill-white" />
                <span>Click to transition</span>
            </Button>
        </div>
    )
}

export default TransitionCustom