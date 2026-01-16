import { AppBar, Toolbar, Typography, Box } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar
      position="static"
      elevation={2}
      sx={{
        width: "100vw",        // ✅ Force full viewport width
        left: 0,
        background: "linear-gradient(135deg, #00bfa5, #00e5c3)",
      }}
    >
      <Toolbar sx={{ minHeight: 72 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: 700, letterSpacing: 0.5 }}
        >
          BillVault
        </Typography>

        {/* Spacer */}
        <Box sx={{ flexGrow: 1 }} />
      </Toolbar>
    </AppBar>
  );
}
