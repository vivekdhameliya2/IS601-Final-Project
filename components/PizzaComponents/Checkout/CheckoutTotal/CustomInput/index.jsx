import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { Button } from "@mui/material";

export default function CustomInput() {
  return (
    <Paper
      className="custom_input"
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        maxWidth: 268,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, border: "none" }}
        placeholder="Discount codes / Gifts"
        inputProps={{ "aria-label": "Discount codes / Gifts" }}
      />
      <Button>Apply</Button>
    </Paper>
  );
}
