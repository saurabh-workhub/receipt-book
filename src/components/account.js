import { useAuth0 } from "@auth0/auth0-react";
import { Box, Container, Card, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Header from "./header";
import SideNav from "./side-nav";

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

const Account = () => {
  const { container, nav } = useStyles();

  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Container component="nav" className={nav}>
        <SideNav />
      </Container>
      <Container component="main" className={container}>
        <Card sx={{ maxWidth: 150 }}>
          <CardMedia
            height="140px"
            width="160px"
            component="img"
            alt={name}
            image={picture}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2">
              {email}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
};

export default Account;