import React from "react";
import { Divider, Typography } from "@material-ui/core";
import PrintService from "../services/print-service";
import InstallClientApp from "../printing/install-client-app";
import WebsiteBlocked from "../printing/website-blocked";
import Printers from "../printing/printers";
import { usePrinting } from "../services/print-context";
import Loading from "./loading";

const PrinterSetup = () => {
  const [wsStatus, setWsStatus] = React.useState(null);

  const printContext = usePrinting();

  React.useEffect(() => {
    PrintService.getWsStatus(setWsStatus);
  }, []);

  const renderComponent = () => {
    let component;
    if (wsStatus === "Open") {
      component = <Printers onPrinterChange={(newPrinter) => printContext.setClientPrinter(PrintService.getClientPrinter(newPrinter))} />
    }
    else if (wsStatus === "Closed") {
      component = <InstallClientApp />
    }
    else if (wsStatus === "Blocked") {
      component = <WebsiteBlocked />
    }
    else {
      component = (
        <Typography variant="h6" component="div">
          <Loading />
          <Divider />
          Waiting for user response....
        </Typography>
      );
    }
    return component;
  }

  return (
    renderComponent()
  )
}

export default PrinterSetup;