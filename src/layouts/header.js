import { AppBar, Button, Toolbar, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#400CCC",
    paddingRight: "79px",
    paddingLeft: "118px",
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const Header = () => {
  const headersData = [
    {
      label: "My Account",
      href: "/account",
    },
    {
      label: "Log Out",
      href: "/logout",
    },
  ];

  const { header, logo, menuButton, toolbar } = useStyles();

  const appLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      Logo
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: Link,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar position="fixed" className={header}>
        <Toolbar className={toolbar}>
          {appLogo}
          <div>{getMenuButtons()}</div>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default Header;