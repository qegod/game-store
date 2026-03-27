export function classNames(className: string, mods: object, additional: string[]) {

    return [
        className,
        ...Object.entries(mods)
            .filter(([_, bool]) => bool)
            .map(([cls]) => cls)
        ,
        ...additional
    ].join(' ');
}

