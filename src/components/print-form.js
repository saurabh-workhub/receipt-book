import React, { useState } from "react";
import { Button, Drawer, FormControl, FormControlLabel, FormLabel, Input, InputAdornment, InputLabel, makeStyles, Paper, Grid, Radio, RadioGroup, TextField } from "@material-ui/core";
import { useFormik } from 'formik';
import * as Yup from "yup";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Printer from "./printer";
import usePrinter from "../services/use-Printer";
import PrintService from "../services/print-service";

const useStyles = makeStyles(() => ({
  drawerPaper: {
    width: "30%"
  }
}));

const PrintForm = () => {
  const classes = useStyles();

  const printers = usePrinter();
  const [defaultPrinter, setDefaultPrinter] = useState();

  const validationSchema = Yup.object().shape({
    tokenNumber: Yup.number().required('Required'),
    partyName: Yup.string().required('Required'),
    sampleType: Yup.string().required('Required'),
    finenessInPercent: Yup.number().min(0).max(100, 'Invalid').required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      tokenNumber: '',
      partyName: '',
      sampleType: '',
      finenessInPercent: '',
      finenessInCarat: '',
      specialInformation: '',
      testDate: new Date(),
      receiptDate: new Date(),
      checkedBy: 'SJ'
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      PrintService.print(defaultPrinter, values);
    }
  });

  const percentToCarat = (value) => {
    return value ? value * 24 / 100 : '';
  };

  React.useEffect(() => {
    if (formik.values.finenessInPercent) {
      formik.values.finenessInCarat = percentToCarat(formik.values.finenessInPercent);
    }
  });

  const [drawer, setDrawer] = React.useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawer(open);
  };

  return (
    <div>
      <React.Fragment>
        <Button variant="outlined" onClick={() => setDrawer(true)}>Setup Printer</Button>
        <form onSubmit={formik.handleSubmit}>
          <Paper style={{ padding: 16 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField id="tokenNumber" name="tokenNumber" label="Token #" value={formik.values.tokenNumber} onChange={formik.handleChange} fullWidth />
                {formik.errors.tokenNumber ? formik.errors.tokenNumber : null}
              </Grid>
              <Grid item xs={12}>
                <TextField id="partyName" name="partyName" label="Party Name" value={formik.values.partyName} onChange={formik.handleChange} fullWidth />
                {formik.errors.partyName ? formik.errors.partyName : null}
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset" fullWidth>
                  <FormLabel component="legend">Type of Sample</FormLabel>
                  <RadioGroup row name="sampleType" value={formik.values.sampleType} onChange={formik.handleChange}>
                    <FormControlLabel value="Cut-bit" control={<Radio />} label="Cut-bit" />
                    <FormControlLabel value="TM" control={<Radio />} label="TM" />
                  </RadioGroup>
                </FormControl>
                {formik.errors.sampleType ? formik.errors.sampleType : null}
              </Grid>
              <Grid item xs={6}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel htmlFor="finenessInPercent">Fineness</InputLabel>
                  <Input id="finenessInPercent" endAdornment={<InputAdornment position="end">%</InputAdornment>} value={formik.values.finenessInPercent} onChange={formik.handleChange} fullWidth />
                </FormControl>
                {formik.errors.finenessInPercent ? formik.errors.finenessInPercent : null}
              </Grid>
              <Grid item xs={6}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel htmlFor="finenessInCarat">Fineness</InputLabel>
                  <Input readOnly id="finenessInCarat" endAdornment={<InputAdornment position="end">Ct</InputAdornment>} value={formik.values.finenessInCarat} onChange={formik.handleChange} fullWidth />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField id="specialInformation" label="Special Information" multiline rows={3} variant="standard" value={formik.values.specialInformation} onChange={formik.handleChange} fullWidth />
              </Grid>
              <Grid item xs={12}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    fullWidth
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="testDate"
                    label="Test Date"
                    value={formik.values.testDate}
                    onChange={formik.handleChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={4}>
                <Button variant="outlined" type="submit">Print</Button>
              </Grid>
            </Grid>
          </Paper>
        </form>
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          anchor='right'
          open={drawer}
          onClose={toggleDrawer(false)}
        >
          <Printer printers={printers} callback={setDefaultPrinter} />
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default PrintForm;