import { createBrowserHistory } from "@remix-run/router";
import { BrowserRouter } from "react-router-dom";

const history = typeof document !== "undefined" ? createBrowserHistory() : null;

export const withRouter = (component: () => React.ReactNode) => () => {
  return (
    <>
      {history && (
        <BrowserRouter history={history}>{component()}</BrowserRouter>
      ) }
    </>
  );
};
