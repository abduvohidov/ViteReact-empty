import { DashboardPage } from '@/pages/DashboardPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { AppRoutes, AppRoutesProps, getRouteForbidden, getRouteDashboard } from './routerPaths';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.DASHBOARD]: {
        path: getRouteDashboard(),
        element: <DashboardPage />,
    },
    [AppRoutes.FORBIDDEN]: {
        path: getRouteForbidden(),
        element: <ForbiddenPage />,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
