import { Typography, Button, Box } from "@mui/material";

function App() {
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

