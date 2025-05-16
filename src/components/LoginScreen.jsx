import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  CssBaseline,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase"; // Import Firebase auth

// Define the theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#f9c662", // Primary color
    },
    secondary: {
      main: "#312e28", // Secondary color
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Sign Up modes

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        // Log in the user
        await signInWithEmailAndPassword(auth, email, password);
        console.log("User logged in successfully");
      } else {
        // Register the user
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("User registered successfully");
      }
    } catch (err) {
      setError(err.message || "An error occurred");
      console.error("Authentication error:", err);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      console.log("User signed in with Google");
    } catch (err) {
      setError("Google sign-in failed");
      console.error("Google sign-in error:", err);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#fff",
            padding: 4,
            borderRadius: 2,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Logo */}
          <Box sx={{ marginBottom: 2 }}>
            <img
              src="/icons/sow-bible-icon-circle-120x120.png"
              alt="Stream Of Wisdom Bible Logo"
              style={{ width: "80px", height: "80px" }}
            />
          </Box>

          {/* Title */}
          <Typography
            component="h1"
            variant="h5"
            sx={{ color: theme.palette.secondary.main, fontWeight: "bold" }}
          >
            {isLogin ? "Welcome Back" : "Create an Account"}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: theme.palette.secondary.main, marginBottom: 2 }}
          >
            {isLogin
              ? "Please log in to continue"
              : "Sign up to get started"}
          </Typography>

          {/* Error Message */}
          {error && (
            <Typography
              variant="body2"
              sx={{ color: "red", marginBottom: 2 }}
            >
              {error}
            </Typography>
          )}

          {/* Form */}
          <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                marginTop: 2,
                padding: 1.5,
                fontWeight: "bold",
                textTransform: "none",
              }}
            >
              {isLogin ? "Log In" : "Sign Up"}
            </Button>
          </Box>

          {/* Google Sign-In Button */}
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            onClick={handleGoogleSignIn}
            sx={{
              marginTop: 2,
              padding: 1.5,
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            Sign in with Google
          </Button>

          {/* Toggle Between Login and Sign Up */}
          <Typography
            variant="body2"
            sx={{ marginTop: 2, color: theme.palette.secondary.main }}
          >
            {isLogin
              ? "Don't have an account? "
              : "Already have an account? "}
            <Button
              variant="text"
              color="primary"
              onClick={() => {
                setIsLogin(!isLogin);
                setError(""); // Clear error when switching modes
              }}
              sx={{ textTransform: "none", fontWeight: "bold" }}
            >
              {isLogin ? "Sign Up" : "Log In"}
            </Button>
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LoginScreen;