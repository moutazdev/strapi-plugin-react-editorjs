/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from "react";
import { Switch, Route } from "react-router-dom";
import { Page } from "@strapi/strapi/admin";
// Utils
import pluginId from "../../pluginId";
// Containers
import HomePage from "../HomePage";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path={`/plugins/${pluginId}`} component={HomePage} exact />
        {/* AHLY */}
        <Route component={Page.Error} />
      </Switch>
    </div>
  );
};

export default App;
