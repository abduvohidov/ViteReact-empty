import { useTranslation } from "@/shared/hooks/useTranslation";

export const DashboardPage = () => {
    const {t} = useTranslation();

    return (<>{t("Рабочий стол")}</>);
}
