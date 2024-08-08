import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon, ChevronUpDownIcon } from '@heroicons/react/16/solid'
import React from 'react'
import './SelectCustom.css'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



const SelectCustom = ({ selected, setSelected, data, label, multiple }) => {

    return (
        <div className="mx-auto w-full flex flex-col flex-1">
            <Listbox value={selected} onChange={setSelected} multiple={multiple} >
                <Label className="block text-sm font-medium text-gray-700 ">{label}</Label>
                <ListboxButton
                    className='bg-white w-[var(--button-width)]  h-12 flex justify-start items-center relative border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm'
                >
                    {

                        multiple &&
                        <div className='flex overflow-x-scroll scrollbarThin flex-1 w-1' >
                            {
                                selected.map((item, index) => <p key={item.id} className='bg-primary-500 text-white rounded-full  px-4 py-1 mx-1 w-auto text-nowrap block'>{item.name}</p>)
                            }
                        </div>
                    }
                        {selected.name}
                    <ChevronDownIcon
                        className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-gray/60 "
                        aria-hidden="true"
                    />

                </ListboxButton>
                <ListboxOptions
                    anchor="bottom"
                    transition
                    className='w-[var(--button-width)] text-gray-700 rounded-xl border border-white/5 bg-white/80 backdrop-blur backdrop-filter shadow  [--anchor-gap:var(--spacing-1)] focus:outline-none transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
                >
                    {data.map((item) => (
                        <ListboxOption
                            key={item.id}
                            value={item}
                            className={`cursor-default select-none relative flex py-2  ${selected.id === item.id && 'text-white bg-primary-600/80 rounded-sm'} 
                            ${multiple && selected.find(selc => selc.id === item.id) !== undefined && 'text-white bg-primary-600/80 rounded-sm'}`}
                        >
                            {
                                // multiple && console.log(selected.find(selc => selc.id === item.id) !== undefined)
                            }
                            <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
                            {/* {console.log(selected)} */}
                            <div className="text-sm/6  dark:text-white">{item.name}</div>
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </Listbox>
        </div>
    )
}

export default SelectCustom