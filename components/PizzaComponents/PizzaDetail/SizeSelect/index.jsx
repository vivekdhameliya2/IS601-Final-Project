import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import pizzaStyles from "../../../../styles/pizza.module.scss";

const SizeSelect = ({ formData, handleChange }) => {
  return (
    <div className={pizzaStyles.form_item}>
      <label>Size</label>
      <FormControl sx={{ minWidth: 180, maxWidth: 180 }} size="small">
        <InputLabel id="demo-select-small-label">Choose your size</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          label="Choose your size"
          value={formData.size}
          className={pizzaStyles.custom_select}
          onChange={(e) => handleChange("size", e.target.value)}
        >
          <MenuItem value={1}>Regular</MenuItem>
          <MenuItem value={1.5}>Medium</MenuItem>
          <MenuItem value={2}>Large</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SizeSelect;
