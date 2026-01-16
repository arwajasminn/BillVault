import { Typography, Button, Box } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebase/firebase";

function App() {

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Logged in user:", result.user.email);

      // later you can redirect to dashboard
      // navigate("/dashboard");

    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Typography variant="h4">
        BillVault
      </Typography>

      <Typography variant="body1">
        College Bill Management System
      </Typography>

      <Button
        variant="contained"
        size="large"
        onClick={handleGoogleLogin}   // 🔥 IMPORTANT
        sx={{
          borderRadius: "50px",
          paddingX: 4,
          paddingY: 1.5,
          textTransform: "none",
          fontSize: "16px",
          backgroundColor: "#00bfa5",
          boxShadow: "0px 6px 16px rgba(0,191,165,0.4)",
          "&:hover": {
            backgroundColor: "#00a896",
          }
        }}
      >
        Login with Google
      </Button>
    </Box>
  );
}

export default App;
