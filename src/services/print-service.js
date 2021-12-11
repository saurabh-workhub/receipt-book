import JSPM from 'jsprintmanager';

const PrintService = {
  getWsStatus: (setWsStatus) => {
    JSPM.JSPrintManager.auto_reconnect = true;
    JSPM.JSPrintManager.start();

    JSPM.JSPrintManager.WS.onOpen = function () {
      return setWsStatus(JSPM.WSStatus[JSPM.JSPrintManager.WS.status]);
    };

    JSPM.JSPrintManager.WS.onStatusChanged = function () {
      return setWsStatus(JSPM.WSStatus[JSPM.JSPrintManager.WS.status]);
    };

    JSPM.JSPrintManager.WS.onClose = function () {
      return setWsStatus(JSPM.WSStatus[JSPM.JSPrintManager.WS.status]);
    };
  },

  getInstalledPrinters: (setInstalledPrinters) => {
    JSPM.JSPrintManager.getPrinters().then((printerList) => setInstalledPrinters(printerList));
  },

  getClientPrinter: (printerName) => {
    return new JSPM.InstalledPrinter(printerName);
  },

  createPrintCommands: (values) => {
    //Create ESP/POS commands for sample label
    var esc = '\x1B'; //ESC byte in hex notation
    var newLine = '\x0A'; //LF byte in hex notation

    var cmds = esc + "@"; //Initializes the printer (ESC @)
    // eslint-disable-next-line no-useless-concat
    cmds += esc + '!' + '\x38'; //Emphasized + Double-height + Double-width mode selected (ESC ! (8 + 16 + 32)) 56 dec => 38 hex
    cmds += newLine + newLine + newLine + newLine;
    cmds += `                    ${values.tokenNumber}                      ${values.receiptDate.toDateString()}`;
    cmds += newLine;
    cmds += `                    ${values.partyName}`;
    cmds += newLine;
    cmds += `                    ${values.sampleType}`;
    cmds += newLine;
    cmds += `                    ${values.finenessInPercent}`;
    cmds += newLine;
    cmds += `                    ${values.finenessInCarat}`;
    cmds += newLine;
    cmds += `                    ${values.specialInformation}`;
    cmds += newLine;
    cmds += `                    ${values.testDate.toDateString()}                    ${values.checkedBy}`;
    return cmds;
  },

  doPrinting: (printContext) => {
    if (!printContext.clientPrinter) {
      alert('Please setup the printer first.');
      return false;
    }

    var cpj = new JSPM.ClientPrintJob();
    cpj.clientPrinter = printContext.clientPrinter;
    cpj.printerCommands = printContext.printerCommands;
    cpj.sendToClient();
  }
}

export default PrintService;