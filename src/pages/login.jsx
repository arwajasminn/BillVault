import { Button, Box, Typography } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

export default function Login({ onLogin }) {

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    onLogin(result.user);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2
      }}
    >
      <Typography variant="h4">BillVault 🔐</Typography>

      <Button
        variant="contained"
        onClick={handleLogin}
        sx={{
          borderRadius: "50px",
          background: "linear-gradient(135deg, #00bfa5, #00e5c3)",
        }}
      >
        Login with Google
      </Button>
    </Box>
  );
}
