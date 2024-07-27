import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions, ListboxSelectedOption, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon, ChevronUpDownIcon } from '@heroicons/react/16/solid'
import React from 'react'
import { Fragment } from 'react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



const SelectCustom = ({ selected, setSelected, data, label }) => {
    return (
        <div className="mx-auto w-52 ">
            <Listbox value={selected} onChange={setSelected}>
                <Label className="block text-sm font-medium text-gray-700">{label}</Label>
                <ListboxButton
                    className='bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                >
                    {selected.name}
                    <ChevronDownIcon
                        className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-gray/60"
                        aria-hidden="true"
                    />
                    
                </ListboxButton>
                <ListboxOptions
                    anchor="bottom"
                    transition
                    className='w-[var(--button-width)] text-gray-700 rounded-xl border border-white/5 bg-white shadow  [--anchor-gap:var(--spacing-1)] focus:outline-none transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
                >
                    {data.map((item) => (
                        <ListboxOption
                            key={item.name}
                            value={item}
                            className={`cursor-default select-none relative flex py-2  ${selected.id === item.id && 'text-white bg-indigo-600 rounded-sm'} `}
                        >
                            <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
                            <div className="text-sm/6  dark:text-white">{item.name}</div>
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </Listbox>
        </div>
    )
}

export default SelectCustom