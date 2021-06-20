import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Details from "../pages/Details";
import Search from "../pages/Search";
import Navbar from "../components/Navbar";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/search" exact component={Search} />
      <Route path="/details/:id" exact component={Details} />
    </Switch>
    <Navbar />
  </BrowserRouter>
);

export default Routes;
