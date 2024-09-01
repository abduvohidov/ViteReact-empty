import { ButtonSize, ButtonView, Button as GButton } from "@gravity-ui/uikit";
import { HTMLAttributes } from "react"

interface ButtonProps extends HTMLAttributes<HTMLElement> {
    className?: string;
    type: ButtonView;
    size: ButtonSize;
}

export const Button = (props: ButtonProps) => {
    const {
        className,
        children,
        type,
        size,
        ...otherProps
    } = props

    return (
        <GButton 
            view={type} 
            size={size}
            className={className}
            {...otherProps}
        >
            {children}
        </GButton>
    )
}