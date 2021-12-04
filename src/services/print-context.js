import React from "react";

const printContext = {
  clientPrinter: null,
  printerCommands: null,
  setClientPrinter: (clientPrinter) => {
    printContext.clientPrinter = clientPrinter;
  },
  setPrinterCommands: (printerCommands) => {
    printContext.printerCommands = printerCommands;
  },
  reset: () => {
    printContext.printerCommands = null;
  }
};

export const PrintContext = React.createContext();
export const usePrinting = () => React.useContext(PrintContext);

export const PrintContextProvider = ({children}) => {
  return <PrintContext.Provider value={printContext}>{children}</PrintContext.Provider>
};

export const PrintContextConsumer = ({children}) => {
  return <PrintContext.Consumer>{children}</PrintContext.Consumer>
};