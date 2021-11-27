import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import Header from "./header";
import PrintForm from "./print-form";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flex: 1,
    paddingTop: "100px"
  },
  main: {
    flex: 1,
    background: "#f7f5f5",
    color: "black",
  },
}));  

const Home = () => {
  const { container, main } = useStyles();

  return (
    <div>
      <Header />
      <Container className={container}>
       <main className={main}><PrintForm /></main>
      </Container>
    </div>
  );
};

export default Home;