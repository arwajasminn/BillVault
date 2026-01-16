import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: 240, borderRight: "1px solid #eee" }}>
      <List>
        <ListItemButton onClick={() => navigate("/")}>
          <ListItemText primary="📊 Dashboard" />
        </ListItemButton>

        <ListItemButton onClick={() => navigate("/upload")}>
          <ListItemText primary="📤 Upload Bills" />
        </ListItemButton>

        <ListItemButton onClick={() => navigate("/bills")}>
          <ListItemText primary="📂 All Bills" />
        </ListItemButton>

        <ListItemButton onClick={() => navigate("/requests")}>
          <ListItemText primary="📩 Requests" />
        </ListItemButton>

        <ListItemButton onClick={() => navigate("/approvals")}>
          <ListItemText primary="✅ Approvals" />
        </ListItemButton>

        <ListItemButton onClick={() => navigate("/settings")}>
          <ListItemText primary="⚙ Settings" />
        </ListItemButton>
      </List>
    </Box>
  );
}
