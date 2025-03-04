import React from "react";
import { Box, Typography, Container, Paper } from "@mui/material";

const HowToUsePage: React.FC = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Paper
        sx={{
          padding: 4,
          backgroundColor: "#ffffff",
          borderRadius: 2,
          boxShadow: 3,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          How to Use ReMind App
        </Typography>

        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.8,
            fontSize: "1.2rem",
            color: "#333333",
            mb: 3,
          }}
        >
          <strong>Imagine this:</strong> You’re getting ready to leave for work,
          but you suddenly realize you’ve forgotten your laptop at home. You
          rush back to get it, but it’s a time-consuming hassle. You wish you
          could remember everything you need every time you head out.
          <br />
          <br />
          This is where <strong>ReMind App</strong> steps in!
        </Typography>

        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.8,
            fontSize: "1.2rem",
            color: "#333333",
            mb: 3,
          }}
        >
          Meet Sarah, a busy professional who was always forgetting things, from
          her gym shoes to her important work documents. One day, Sarah
          discovered <strong>ReMind App</strong>, and it changed her daily
          routine.
        </Typography>

        <Box sx={{ textAlign: "left", maxWidth: 600, mx: "auto" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            1. Create a List for Every Location
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Every morning, Sarah opens the app and creates a list for each
            location she’s heading to. For example, she creates a "Gym" list, a
            "Work" list, and a "Home" list. Each list includes the items she
            needs to bring along to that specific place. For the gym, it’s her
            towel, water bottle, and shoes. For work, it’s her laptop, charger,
            and notebook.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            2. Add Items to the List
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            As Sarah goes about her day, she can easily add any item she needs
            to remember to her list. Let’s say, after work, she’s going to the
            grocery store. She adds "Groceries" to her "Work" list and writes
            down the items she’ll need. That way, she doesn't forget the milk or
            bread.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            3. Checklists to the Rescue
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Before leaving for any location, Sarah simply opens the app, checks
            her location’s list, and makes sure she has everything packed. It’s
            like having a personal assistant in your pocket that makes sure
            you’re always prepared, no matter where you’re going!
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            4. Easy-to-Use and Always Accessible
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Sarah loves how user-friendly the app is. With just a tap, she can
            create, view, and check off her lists. The app’s simple design means
            no confusion, just pure convenience.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            5. Feedback and Improvements
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Sarah can also provide feedback on how she feels about the app.
            Whether it's a suggestion for new features or just a quick rating,
            the app allows her to voice her thoughts and help improve it.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              fontSize: "1.2rem",
              color: "#333333",
            }}
          >
            Thanks to <strong>ReMind App</strong>, Sarah never forgets her
            essentials anymore. Whether it’s her keys, gym bag, or laptop, she’s
            always ready to go, and the best part? She no longer has to stress
            about forgetting the important stuff!
          </Typography>
          <br />
          <Typography
            variant="h6"
            sx={{
              mt: 4,
              fontWeight: "bold",
              color: "#f1c232",
              fontSize: "1.3rem",
            }}
          >
            So, what about you? Are you ready to stop forgetting and start
            organizing your life?
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default HowToUsePage;
