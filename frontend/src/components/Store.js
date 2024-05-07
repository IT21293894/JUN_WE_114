import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";

const Store = ({ name, level, imageURL }) => {
  return (
    <div
      style={{
        display: "inline-block",
        marginRight: "10px",
        marginLeft: "10px",
        width: "calc(25% - 20px)",
      }}
    >
      <Card
        sx={{
          margin: "20px",
          padding: 2,
          boxShadow: "5px 5px 10px #ccc",
          "&:hover": {
            boxShadow: "10px 10px 20px #ccc",
          },
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia component="img" height="194" image={imageURL} />
        <CardContent style={{ height: "100px" }}>
          {" "}
          {/* Set a fixed height */}
          <Typography variant="body2" color="text.secondary">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {level}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Store;