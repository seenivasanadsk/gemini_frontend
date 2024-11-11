import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  InputAdornment,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchableSelect() {
  // Example options (could be any list)
  const options = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
    { title: "Inception", year: 2010 },
    { title: "The Matrix", year: 1999 },
    { title: "Forrest Gump", year: 1994 },
    { title: "Gladiator", year: 2000 },
  ];

  const [selectedValue, setSelectedValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter options based on the search query
  const filteredOptions = options.filter((option) =>
    option.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ width: "100%", maxWidth: 400 }}>
      {/* Search TextField above the Select dropdown */}
      <TextField
        variant="outlined"
        sx={{ mb: 2 }}
        fullWidth
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search Films..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      {/* Select Component */}
      <FormControl fullWidth>
        <InputLabel id="searchable-select-label">Select Film</InputLabel>
        <Select
          labelId="searchable-select-label"
          id="searchable-select"
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
          label="Select Film"
        >
          {/* Render filtered MenuItems */}
          {filteredOptions.map((option) => (
            <MenuItem key={option.year} value={option.title}>
              {option.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <div>Selected Film: {selectedValue}</div>
    </Box>
  );
}

export default SearchableSelect;
