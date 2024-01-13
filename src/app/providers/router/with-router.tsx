import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "@remix-run/router";

const history = typeof document !== "undefined" ? createBrowserHistory() : null;

export const withRouter = (component: () => React.ReactNode) => () => {
  return (
    <>
      {history && (
        <BrowserRouter history={history}>{component()}</BrowserRouter>
      )}
    </>
  );
};
