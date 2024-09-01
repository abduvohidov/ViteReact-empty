import { Navigate, useLocation } from 'react-router-dom';
import { getRouteDashboard } from '../config/routerPaths';
import { useUserStore } from "@/entities/User/model/store";

interface RequireAuthProps {
    children: Element;
}

export function RequireAuth({ children }: RequireAuthProps) {
    const isAuthenticate = useUserStore(state => state.user);
    const location = useLocation();

    if (!isAuthenticate) {
        return (
            <Navigate to={getRouteDashboard()} state={{ from: location }} replace />
        );
    }

    return children;
}
