import React, { useEffect } from "react";
import { Switch, Redirect } from "react-router-dom";
import InAppSidebar  from "../components/InAppSidebar";
import RouteWithSubRoutes from "../components/routeHelper";

export const ROOT_URL_PATH = "/";

const AppContainer = props => {
    const { routes } = props;
  
    return (
            <Switch>
              <Redirect
                exact
                from= {ROOT_URL_PATH}
                to={`${ROOT_URL_PATH}/configVM`}
              />
              {routes.map(route => {
                return <RouteWithSubRoutes {...route} key={route.key} />;
              })}
            </Switch>
    );
  };

const AppLayoutContainer = (props) => {
    return (
        <div>
            <InAppSidebar {...props} />
            <AppContainer {...props} />
        </div>
    );
}

export default AppLayoutContainer;