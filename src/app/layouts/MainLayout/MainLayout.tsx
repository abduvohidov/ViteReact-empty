import { ReactElement } from "react";
import cls from './MainLayout.module.scss';
import { classNames } from "@/shared/lib/classNames/classNames";

interface MainLayoutProps {
    className?: string;
    content: ReactElement;
}

export const MainLayout = (props: MainLayoutProps) => {
    const { className, content } = props;

    return (
        <div className={classNames(cls.MainLayout, {}, [className])}>
            <div className={cls.content}>{content}</div>
        </div>
    );
}