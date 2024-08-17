import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectVariants({section ,set_section }) {

  const handleChange = (event) => {
    console.log(event.target.value);
    set_section(event.target.value);
  };

  return (
    <div>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Select Section</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={section}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Select Section from your section</em>
          </MenuItem>
          <MenuItem value={'BSCS-1A'}>BSCS-1A</MenuItem>
          <MenuItem value={'BSCS-2C'}>BSCS-2C</MenuItem>
          <MenuItem value={'BSSE-3B'}>BSSE-3B</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}