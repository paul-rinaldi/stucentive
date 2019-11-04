import React from "react";

import Tabs from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import { Paper } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";

const Navigation = () => {
  return (
    <Paper>
      <Tabs indicatorcolor="primary" textcolor="primary" fullwidth="true">
        <Tab label="Focus" to={"/focus"} component={Link} />
        <Tab label="My Events" to={"/myevents"} component={Link} />
      </Tabs>
    </Paper>
  );
};

export default Navigation;
