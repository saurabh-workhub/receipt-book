import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import PrintService from "../services/print-service";

const Printers = (props) => {
  const [installedPrinters, setInstalledPrinters] = React.useState([]);
  const [printer, setPrinter] = React.useState();

  React.useEffect(() => {
    PrintService.getInstalledPrinters(setInstalledPrinters);
  }, [])

  const handleChange = (event) => {
    setPrinter(event.target.value);
    props.onPrinterChange(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Select an installed Printer:</InputLabel>
      <Select
        labelId="printers-label"
        id="installedPrinterName"
        label="Printers"
        value={printer || ''}
        onChange={handleChange}
      >
        {
          installedPrinters?.map((printer) => <MenuItem key={printer} value={printer}>{printer}</MenuItem>)
        }
      </Select>
    </FormControl>
  )
}

export default Printers;