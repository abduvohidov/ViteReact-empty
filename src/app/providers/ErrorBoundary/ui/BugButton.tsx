import { useEffect, useState } from 'react';
import { Button } from '@/shared/ui/Button';

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
    const [error, setError] = useState(false);

    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return <Button size="m" type='action' onClick={onThrow}>{"Error"}</Button>;
};
