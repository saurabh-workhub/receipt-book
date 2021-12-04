import { Paper, Divider, Link, Typography } from "@material-ui/core";
import WarningIcon from '@material-ui/icons/Warning'
import React from "react";

const InstallClientApp = () => {
  return (
    <Paper>
      <Typography variant="h4" component="h4">Download &amp; Install Client App</Typography>
      <Divider />
      <Typography>It seems that <strong>Client App is not installed or not running</strong> in this machine!
        <br />
        <br />
        <strong>Client App</strong> is a small utility (
        <strong>
          <em>without any dependencies</em>
        </strong>
        ) that handles all the <strong>Print Jobs</strong> and runs on <strong>Windows, Linux, Mac &amp; Raspberry Pi</strong> devices!
      </Typography>
      <Typography variant="h6" component="h6">
        <Link href="//neodynamic.com/downloads/jspm"> Download Client App...</Link>
        <WarningIcon /> Browser needs to be restarted after package installation! Firefox-based browser must be closed (all open instances) before installing utility.
      </Typography>
    </Paper>
  );
};

export default InstallClientApp;