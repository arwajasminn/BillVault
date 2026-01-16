import { Box, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <Box sx={{ flex: 1, position: "relative" }}>
        <Navbar />
        <Box sx={{ p: 3 }}>{children}</Box>

        <Fab
          onClick={() => navigate("/upload")}
          sx={{
            position: "fixed",
            bottom: 32,
            right: 32,
            background: "linear-gradient(135deg, #00bfa5, #00e5c3)",
          }}
        >
          <AddIcon />
        </Fab>
      </Box>
    </Box>
  );
}
