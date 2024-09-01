import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import './app/styles/globals.scss';
import App from '@/app/App';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { I18nProvider } from "@/shared/providers/I18nProvider";


const container = document.getElementById('root');

if (!container) {
    throw new Error(
        'Контейнер root не найден. Не удалось вмонтировать реакт приложение',
    );
}

const root = createRoot(container);

root.render(
    <React.StrictMode>
      <I18nProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </BrowserRouter>
      </I18nProvider>
    </React.StrictMode>,
);
