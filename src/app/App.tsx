import { Suspense } from "react";
import { MainLayout } from "./layouts/MainLayout/MainLayout";
import { AppRouter } from "./providers/router";

const App = () => {
    return (
        <div id="app">
        <Suspense fallback="">
            <MainLayout
                content={<AppRouter />}
            />
        </Suspense>
    </div>
    );
};

export default App;
