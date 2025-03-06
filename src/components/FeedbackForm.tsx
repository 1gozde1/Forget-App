import React, { useState } from "react";
import { Box, Typography, TextField, Button, Rating } from "@mui/material";

const FeedbackForm: React.FC = () => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState<number | null>(null);

  const handleFeedbackChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFeedback(event.target.value);
  };

  const handleRatingChange = (
    event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setRating(newValue);
  };

  const handleSubmit = () => {
    console.log("Feedback:", feedback);
    console.log("Rating:", rating);
    setFeedback("");
    setRating(null);
  };

  return (
    <Box sx={{ mt: 3, maxWidth: 600, margin: "0 auto" }}>
      <Typography variant="h6" gutterBottom>
        Help Us Make It Better!
      </Typography>
      <TextField
        label="Your Feedback"
        variant="outlined"
        fullWidth
        multiline
        rows={3}
        value={feedback}
        onChange={handleFeedbackChange}
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        size="small"
        sx={{ mb: 2 }}
      >
        Submit Feedback
      </Button>
      <Typography variant="body2" sx={{ mb: 1 }}>
        Rate the App:
      </Typography>
      <Rating
        name="rating"
        value={rating}
        onChange={handleRatingChange}
        sx={{ mb: 2 }}
      />
    </Box>
  );
};

export default FeedbackForm;
