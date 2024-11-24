import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const RecommendationCard = ({ title, subtitle, description, price, onVisit }) => {
  return (
    <Card sx={{ maxWidth: 500, width: "100%", margin: "10px auto", borderRadius: "15px",  }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="h5" component="div">
          {subtitle}
        </Typography>
        <Typography variant="h6" color="text.primary">
          {price}
        </Typography>
        <Typography variant="body2" color="text.primary" sx={{ margin: "10px 0" }}>
          {description}
        </Typography>
        <Button
          size="small"
          onClick={onVisit}
          sx={{ marginTop: "10px" }}
        >
          Visit →
        </Button>
      </CardContent>
    </Card>
  );
};

export default RecommendationCard;
