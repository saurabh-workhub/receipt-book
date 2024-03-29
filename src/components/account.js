import { useAuth0 } from "@auth0/auth0-react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import React from "react";

const Account = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
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
  )
};

export default Account;