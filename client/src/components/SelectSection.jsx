import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';

export default function SelectVariants({ program, set_program, dec, set_dec }) {
  const [programs, setPrograms] = React.useState([]);
  const [decs, setDecs] = React.useState([]);
  const [selectedProgram, setSelectedProgram] = React.useState(false);
  const [selecteddec, setSelecteddec] = React.useState('');


  React.useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/sections');
        setPrograms(response.data);
      } catch (error) {
        console.error('Error fetching programs:', error);
      }
    };

    fetchPrograms();
  }, []);

  React.useEffect(() => {
    const fetchDecs = async () => {
      if (selectedProgram) {
        try {
          const response = await axios.get(`http://localhost:3001/api/sections/dec`);
          setDecs(response.data);
        } catch (error) {
          console.error('Error fetching decs:', error);
        }
      }
    };

    fetchDecs();
  }, [selectedProgram]);

  const handleProgramChange = (event) => {
    const newValue = event.target.value;
    setSelectedProgram(true);
    set_program(newValue); // Set the selected program
    set_dec(''); // Reset dec when program changes
  };

  const handleDecChange = (event) => {
    set_dec(event.target.value); // Set the selected dec
    // mark as selected:
    setSelecteddec(true);
  };

  return (
    <div>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="program-select-label">Select Program</InputLabel>
        <Select
          labelId="program-select-label"
          id="program-select"
          value={program}
          onChange={handleProgramChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {programs.map((program) => (
            <MenuItem key={program.prog_id} value={program.prog_id}>
              {program.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Nested Dropdown */}
      {selectedProgram && (
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="dec-select-label">Select Dec/Prog</InputLabel>
          <Select
            labelId="dec-select-label"
            id="dec-select"
            value={dec}
            onChange={handleDecChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {decs.map((dec) => (
              <MenuItem key={dec.dec_id} value={dec.dec_id}>
                {dec.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </div>
  );
}
