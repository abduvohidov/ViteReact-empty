import { withProviders } from "./providers/router";
import { Routing } from "../pages";

const App = () => {
  return <Routing />;
};

export default withProviders(App);
