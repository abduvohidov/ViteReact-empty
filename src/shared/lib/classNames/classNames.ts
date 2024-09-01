type Additions = Array<string | undefined>;
type ObjectClasses = Record<string, boolean>;

export function classNames(additions?: Additions): string;
export function classNames(objectClasses?: ObjectClasses, additions?: Additions): string;
export function classNames(className?: string, objectClasses?: ObjectClasses, additions?: Additions): string;
export function classNames(className?: string | ObjectClasses | Additions, objectClasses?: ObjectClasses | Additions, additions?: Additions): string {
    let classes: Additions = []

    if(!className) {
        return ""
    }

    if(className.constructor === Array) {
        classes = className
    }
    else if(className.constructor === Object) {
        if(className && Object.entries(className).length) {
            classes.push(
                ...Object.entries(className)
                    .filter(([_, value]) => Boolean(value))
                    .map(([name]) => name)
            )
        }

        if(objectClasses && objectClasses.length) {
            classes.push(...objectClasses as string[])
        }
    }
    else {
        if(className.constructor === String) {
            classes.push(className)
        }

        if(objectClasses && Object.entries(objectClasses).length) {
            classes.push(
                ...Object.entries(objectClasses)
                    .filter(([_, value]) => Boolean(value))
                    .map(([name]) => name)
            )
        }

        if(additions && additions.length) {
            classes.push(...additions)
        }

    }

    return classes.join(" ")
}
