import {
  Switch,
  Route
} from "react-router-dom";


import baseRoutes from "./baseRoutes";
import brandRoutes from "./brandRoutes";
import typeRoutes from "./typeRoutes";
import useRoutes from "./useRoutes";

function RouterSwitch() {
  return (
    <Switch>

      {/* Base Routes */}
      {baseRoutes.map((entry, index) => {
        return (
          <Route key={'base' + index} exact {...entry} />
        )
      })}

      {/* Brand Routes */}
      {brandRoutes.map((entry, index) => {
        return (
          <Route key={'brand' + index} exact {...entry} />
        )
      })}

      {/* Use Routes */}
      {useRoutes.map((entry, index) => {
        return (
          <Route key={'use' + index} exact {...entry} />
        )
      })}
        
      {/* Type Routes */}
      {typeRoutes.map((entry, index) => {
        return (
          <Route key={'type' + index} exact {...entry} />
        )
      })}
      
    </Switch>
  );
}

export default RouterSwitch;
