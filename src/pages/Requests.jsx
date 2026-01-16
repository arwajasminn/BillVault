import { 
  Box, 
  TextField, 
  Button, 
  Typography,
  MenuItem,
  Paper,
  Chip
} from "@mui/material";
import { useState } from "react";

export default function Requests() {

  // 🔁 Change this to "faculty" or "club" to test UI
  const userRole = "club";

  const [club, setClub] = useState("");
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");

  const [requests, setRequests] = useState([
    {
      id: 1,
      club: "IEEE",
      title: "Upload Travel Bills",
      dueDate: "2026-01-20",
      status: "Pending"
    }
  ]);

  const handleCreate = () => {
    if (!club || !title || !dueDate) {
      alert("Fill all fields");
      return;
    }

    const newRequest = {
      id: Date.now(),
      club,
      title,
      dueDate,
      status: "Pending"
    };

    setRequests([...requests, newRequest]);

    setClub("");
    setTitle("");
    setDueDate("");
  };

  return (
    <Box sx={{ display: "flex", gap: 3 }}>

      {/* 🧑‍🏫 Faculty Only — Create Request */}
      {userRole === "faculty" && (
        <Paper sx={{ p: 3, width: 350 }}>
          <Typography variant="h6" gutterBottom>
            📩 Create Bill Request
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              select
              label="Select Club"
              value={club}
              onChange={(e) => setClub(e.target.value)}
            >
              <MenuItem value="IEEE">IEEE</MenuItem>
              <MenuItem value="NSS">NSS</MenuItem>
              <MenuItem value="Arts">Arts Club</MenuItem>
            </TextField>

            <TextField
              label="Request Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <TextField
              label="Due Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />

            <Button
              variant="contained"
              onClick={handleCreate}
              sx={{
                borderRadius: "50px",
                background: "linear-gradient(135deg, #00bfa5, #00e5c3)",
              }}
            >
              Create Request
            </Button>
          </Box>
        </Paper>
      )}

      {/* 📋 Requests List */}
      <Paper sx={{ flex: 1, p: 3 }}>
        <Typography variant="h6" gutterBottom>
          📋 Active Requests
        </Typography>

        {userRole === "club" && (
          <Typography variant="body2" sx={{ mb: 2 }}>
            Upload requested bills using the + button.
          </Typography>
        )}

        {requests.map((req) => (
          <Box
            key={req.id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2,
              borderBottom: "1px solid #eee"
            }}
          >
            <Box>
              <Typography fontWeight={600}>
                {req.title}
              </Typography>
              <Typography variant="body2">
                Club: {req.club} | Due: {req.dueDate}
              </Typography>
            </Box>

            {/* 🏫 Club can mark completed */}
            {userRole === "club" && req.status === "Pending" ? (
              <Button
                size="small"
                variant="outlined"
                onClick={() => {
                  setRequests(
                    requests.map(r =>
                      r.id === req.id ? { ...r, status: "Completed" } : r
                    )
                  );
                }}
              >
                Mark Completed
              </Button>
            ) : (
              <Chip 
                label={req.status}
                color={req.status === "Pending" ? "warning" : "success"}
              />
            )}
          </Box>
        ))}
      </Paper>

    </Box>
  );
}
