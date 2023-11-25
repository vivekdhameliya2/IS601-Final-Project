// Footer.js
import { Box, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 2,
        backgroundColor: "#3f51b5",
        color: "#ffffff",
      }}
    >
      <Typography variant="body2">
        Want More? Sign Up For Pizza Offer
      </Typography>
      <Box sx={{ alignItems: "center" }}>
        <input
          type="email"
          placeholder="Enter your email"
          style={{ marginRight: 10 }}
        />
        <Link href="#">Submit</Link>
      </Box>
      <Box>
        <Typography variant="body2">Overview</Typography>
        <Typography variant="body2">About Us</Typography>
        <Typography variant="body2">Social Media</Typography>
        <Typography variant="body2">Terms</Typography>
      </Box>
      <Box>
        <Typography variant="body2">Features</Typography>
        <Typography variant="body2">Press</Typography>
        <Typography variant="body2">Facebook</Typography>
        <Typography variant="body2">Privacy</Typography>
      </Box>
      <Box>
        <Typography variant="body2">Pricing</Typography>
        <Typography variant="body2">News</Typography>
        <Typography variant="body2">ITALIAN</Typography>
        <Typography variant="body2">LinkedIn</Typography>
      </Box>
      <Box>
        <Typography variant="body2">Careers</Typography>
        <Typography variant="body2">Media Kit</Typography>
        <Typography variant="body2">
          Ita long established fact that a reader will be
        </Typography>
        <Typography variant="body2">Github</Typography>
      </Box>
      <Box>
        <Typography variant="body2">Help</Typography>
        <Typography variant="body2">Releases</Typography>
        <Typography variant="body2">Behance</Typography>
        <Typography variant="body2">Settings</Typography>
      </Box>
      <Box>
        <Typography variant="body2">Privacy Policy</Typography>
        <Typography variant="body2">Contact</Typography>
        <Typography variant="body2">Dribbble</Typography>
        <Typography variant="body2">Terms of Service</Typography>
      </Box>
      <Typography variant="body2">
        © 2023 Italian Pizza
      </Typography>
    </Box>
  );
}
