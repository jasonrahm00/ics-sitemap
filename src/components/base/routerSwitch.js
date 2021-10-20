import {
  Switch,
  Route
} from "react-router-dom";

import routeData from '../../data/routeData';

function RouterSwitch() {
  return (
    <Switch>
      {routeData.map((route, index) => {
        return (
          <Route exact key={index} {...route} />
        )
      })}
    </Switch>
  );
}

export default RouterSwitch;
