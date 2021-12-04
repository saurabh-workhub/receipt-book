import { Divider, Paper, Typography } from "@material-ui/core";
import React from "react";

const WebsiteBlocked = () => {
  return (
    <Paper>
      <Typography variant="h4" component="h4">This site is blocked!</Typography>
      <Divider />
      This website is
      <strong>blocked and cannot print through JSPrintManager</strong>
    </Paper>
  )
}

export default WebsiteBlocked;