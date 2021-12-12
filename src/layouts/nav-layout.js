import React from 'react'
import { Box, Container, makeStyles } from "@material-ui/core";
import Header from './header';
import SideNav from './side-nav';

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flex: 1,
    paddingTop: "100px"
  },
  nav: {
    width: 20
  }
}));  

const NavLayout = ({ children }) => {
  const { container, nav } = useStyles();

  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Container component="nav" className={nav}>
        <SideNav />
      </Container>
      <Container component="main" className={container}>
        {children}
      </Container>
    </Box>
  );
};

export default NavLayout;