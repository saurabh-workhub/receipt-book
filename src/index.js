import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { withStyles } from "@material-ui/core/styles";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './auth/auth-provider';

const styles = theme => ({
  "@global": {
    // MUI typography elements use REMs, so you can scale the global
    // font size by setting the font-size on the <html> element.
    html: {
      fontSize: 13,
      [theme.breakpoints.up("sm")]: {
        fontSize: 12
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 12
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 12
      }
    }
  }
});

const PrintApp = withStyles(styles)(App);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={`/${process.env.REACT_APP_BASE_PATH}`}>
      <AuthProvider>
        <PrintApp />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
