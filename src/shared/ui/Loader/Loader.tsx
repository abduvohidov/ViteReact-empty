import { LoaderSize } from "@gravity-ui/uikit";
import { HTMLAttributes } from "react";

interface LoaderProps extends HTMLAttributes<HTMLElement> {
    className?: string;
    size: LoaderSize;
}

export enum LoaderSizeTypes {
    Large = "l",
    Medium = "m",
    Small = "s"
}
export const Loader = (props: LoaderProps) => {
    const {
        className,
        size
    } = props;

    return (
        <Loader size={size} className={className} />
    )
}