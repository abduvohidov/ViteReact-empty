import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
};

export enum AppRoutes {
    DASHBOARD = 'dashboard',
    FORBIDDEN = 'forbidden',
    // last
    NOT_FOUND = 'not_found',
}

export const getRouteDashboard = () => '/';
export const getRouteForbidden = () => '/forbidden';

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteDashboard()]: AppRoutes.DASHBOARD,
    [getRouteForbidden()]: AppRoutes.FORBIDDEN,
};
