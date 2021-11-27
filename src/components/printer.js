import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Paper, Select } from "@material-ui/core";

const Printer = ({printers, callback}) => {
  const [ printer, setPrinter ] = useState(0);

  const handleChange = (event) => {
    setPrinter(event.target.value);
    callback(event.target.value);
  };

  return (
    <Paper style={{ padding: 16 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select an installed Printer:</InputLabel>
        <Select
          labelId="printers-label"
          id="installedPrinterName"
          value={printer}
          label="Printers"
          onChange={handleChange}
        >
        {
          printers.map((printer) => <MenuItem value={printer}>{printer}</MenuItem>)
        }
        </Select>
      </FormControl>
    </Paper>
  )
}

export default Printer;