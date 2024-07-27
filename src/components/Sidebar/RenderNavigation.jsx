function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const RenderNavigation = ({ navigation }) => {
    return (
        <>
            {
                navigation.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                            item.current ? 'bg-primary-800 text-white' : 'text-primary-100 hover:text-white hover:bg-primary-600',
                            'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                    >
                        <item.icon className="mr-4 flex-shrink-0 h-6 w-6 text-primary-200" aria-hidden="true" />
                        {item.name}
                    </a>
                ))
            }
        </>
    )
}