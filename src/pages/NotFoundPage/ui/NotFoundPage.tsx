import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';
import { useTranslation } from "@/shared/hooks/useTranslation";

interface NotFoundPageProps {
    className?: string;
}
export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation()

    return (
        <div
            data-testid="NotFoundPage"
            className={classNames(cls.NotFoundPage, {}, [className])}
        >
            {t("page.not_found")}
        </div>
    );
};
