import { 
  Box, 
  TextField, 
  Button, 
  Typography,
  MenuItem,
  Paper,
  Snackbar,
  Alert
} from "@mui/material";
import { useState } from "react";

export default function Upload() {

  const [club, setClub] = useState("");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [file, setFile] = useState(null);
  const [successOpen, setSuccessOpen] = useState(false);

  const handleSubmit = () => {
    if (!club || !title || !amount || !date || !file) {
      alert("Please fill all fields and upload a file.");
      return;
    }

    setSuccessOpen(true);

    // Reset form
    setClub("");
    setTitle("");
    setAmount("");
    setDate("");
    setFile(null);
  };

  return (
    <Paper sx={{ maxWidth: 600, p: 4 }}>
      <Typography variant="h5" gutterBottom>
        📤 Upload New Bill
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
          label="Bill Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <TextField 
          label="Amount (₹)" 
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <TextField
          label="Bill Date"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <Button variant="outlined" component="label">
          Upload Bill File
          <input 
            hidden 
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </Button>

        {file && (
          <Typography variant="body2">
            📎 Selected: {file.name}
          </Typography>
        )}

        <Button 
          variant="contained"
          size="large"
          onClick={handleSubmit}
          sx={{
            borderRadius: "50px",
            background: "linear-gradient(135deg, #00bfa5, #00e5c3)",
          }}
        >
          Submit Bill
        </Button>

      </Box>

      {/* Success Snackbar */}
      <Snackbar
        open={successOpen}
        autoHideDuration={3000}
        onClose={() => setSuccessOpen(false)}
      >
        <Alert severity="success" variant="filled">
          ✅ Bill uploaded successfully!
        </Alert>
      </Snackbar>

    </Paper>
  );
}
