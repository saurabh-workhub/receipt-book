import React, { useEffect, useState } from "react";
import PrintService from "./print-service";

function usePrinter() {
  const [printers, setPrinters] = useState([]);

  const printerRef = React.useRef([]);
  useEffect(() => {
    if (printerRef.current.length === 0) {
      PrintService.printers(setPrinters);
      printerRef.current = printers;
    }
  }, [printers]);

  return printerRef.current;
}

export default usePrinter;