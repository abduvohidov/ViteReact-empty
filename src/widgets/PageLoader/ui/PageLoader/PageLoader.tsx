import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader, LoaderSizeTypes } from '@/shared/ui/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <Loader size={LoaderSizeTypes.Large}/>
    </div>
);
