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
    //cmds += esc + '!' + '\x38'; //Emphasized + Double-height + Double-width mode selected (ESC ! (8 + 16 + 32)) 56 dec => 38 hex
    cmds += 'BEST DEAL STORES'; //text to print
    cmds += newLine + newLine;
    //cmds += esc + '!' + '\x00'; //Character font A selected (ESC ! 0)
    cmds += 'COOKIES                   5.00';
    cmds += newLine;
    cmds += 'MILK 65 Fl oz             3.78';
    cmds += newLine + newLine;
    cmds += 'SUBTOTAL                  8.78';
    cmds += newLine;
    cmds += 'TAX 5%                    0.44';
    cmds += newLine;
    cmds += 'TOTAL                     9.22';
    cmds += newLine;
    cmds += 'CASH TEND                10.00';
    cmds += newLine;
    cmds += 'CASH DUE                  0.78';
    cmds += newLine + newLine;
    //cmds += esc + '!' + '\x18'; //Emphasized + Double-height mode selected (ESC ! (16 + 8)) 24 dec => 18 hex
    cmds += '# ITEMS SOLD 2';
    //cmds += esc + '!' + '\x00'; //Character font A selected (ESC ! 0)
    cmds += newLine + newLine;
    cmds += '11/03/13  19:53:17';
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