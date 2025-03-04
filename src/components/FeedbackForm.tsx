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
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom>
        Share Your Feedback
      </Typography>
      <TextField
        label="Your Feedback"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={feedback}
        onChange={handleFeedbackChange}
        sx={{ mb: 2 }}
      />
      <Typography variant="body2" sx={{ mb: 2 }}>
        Rate the App:
      </Typography>
      <Rating
        name="rating"
        value={rating}
        onChange={handleRatingChange}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit Feedback
      </Button>
    </Box>
  );
};

export default FeedbackForm;
